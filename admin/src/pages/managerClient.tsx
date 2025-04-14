import React, { useState, useEffect } from 'react';
import '../assets/styles/managerClient.scss';
import Swal from "sweetalert2";
import axios from "axios";

interface ServicePackage {
  id: number;
  namePackage: string;
  pricePackage: number;
  description: string;
}

interface Booking {
  name: string;
  email: string;
  dayBooking: string;
  timeBooking: string;
  typePackage: string;
  address: string;
  price: number;
  status?: string;
}

const ManagerClient: React.FC = () => {
  const [dataaa, setData] = useState<Booking[]>([]);
  const [filteredData, setFilteredData] = useState<Booking[]>(dataaa);
  const [packages, setPackages] = useState<ServicePackage[]>([]); // State lưu danh sách gói dịch vụ

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem('token');
        if (!token) {
          Swal.fire({
            title: 'Lỗi!',
            text: 'Bạn chưa đăng nhập hoặc phiên đăng nhập đã hết hạn.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
          return;
        }
        
        // Lấy dữ liệu về các booking
        const responseBookings = await axios.get('https://api.yourbackend.com/bookings', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setData(responseBookings.data);
        setFilteredData(responseBookings.data);

        // Lấy dữ liệu về các gói dịch vụ
        const responsePackages = await axios.get('https://api.yourbackend.com/packages', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPackages(responsePackages.data); 
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
        Swal.fire({
          title: 'Lỗi!',
          text: 'Có lỗi xảy ra khi lấy dữ liệu!',
          icon: 'error',
          timer: 2000,
          confirmButtonText: 'OK'
        });
      }
    };

    fetchData();
  }, []);

  const handleDelete = (email: string) => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      Swal.fire({
        title: 'Lỗi!',
        text: 'Bạn chưa đăng nhập hoặc phiên đăng nhập đã hết hạn.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    Swal.fire({
      title: "Bạn chắc chắn muốn xóa?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa!",
      cancelButtonText: "Hủy"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete('https://api.yourbackend.com/bookings', {
            headers: {
              Authorization: `Bearer ${token}`
            },
            data: { email }
          });

          setData(prevData => prevData.filter(item => item.email !== email));

          Swal.fire({
            title: 'Đã xóa!',
            text: 'Lịch đặt đã được xóa thành công.',
            icon: 'success',
            timer: 2000,
            confirmButtonText: 'OK'
          });
        } catch (error) {
          console.error('Lỗi khi xóa lịch đặt:', error);
          Swal.fire({
            title: 'Lỗi!',
            text: 'Có lỗi xảy ra khi xóa lịch đặt!',
            icon: 'error',
            timer: 2000,
            confirmButtonText: 'OK'
          });
        }
      }
    });
  }

  const handleApprove = async (email: string) => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      Swal.fire({
        title: 'Lỗi!',
        text: 'Bạn chưa đăng nhập hoặc phiên đăng nhập đã hết hạn.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    try {
      // Cập nhật trạng thái "Đã duyệt"
      await axios.patch('https://api.yourbackend.com/bookings', {
        email,
        status: 'Đã duyệt' 
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setData(prevData => prevData.map(item =>
        item.email === email ? { ...item, status: 'Đã duyệt' } : item
      ));

      Swal.fire({
        title: 'Đã duyệt!',
        text: 'Lịch đặt đã được duyệt.',
        icon: 'success',
        timer: 2000,
        confirmButtonText: 'OK'
      });
    } catch (error) {
      console.error('Lỗi khi duyệt lịch đặt:', error);
      Swal.fire({
        title: 'Lỗi!',
        text: 'Có lỗi xảy ra khi duyệt lịch đặt!',
        icon: 'error',
        timer: 2000,
        confirmButtonText: 'OK'
      });
    }
  }

  return (
    <div>
      <div className='mngClient'>
        <h1 className='w-full bg-white z-10 text-2xl font-bold text-center py-2 sticky top-0'>Đặt lịch</h1>

        {/* Phần Tìm kiếm và bộ lọc */}
        <div className="w-full p-4 flex gap-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              className="w-[300px] rounded-xl h-12 px-4 border border-gray-300 focus:outline-none"
              type="text"
              placeholder="Tìm kiếm theo tên khách hàng"
              onChange={(e) => {
                const searchTerm = e.target.value.toLowerCase();
                setFilteredData(dataaa.filter(item => item.name.toLowerCase().includes(searchTerm)));
              }}
            />
            <div className="px-2 bg-white rounded-xl">
              <select
                className="w-fit rounded-xl h-12 px-4 focus:outline-none"
                onChange={(e) => {
                  const packageFilter = e.target.value;
                  if (packageFilter) {
                    setFilteredData(dataaa.filter(item => item.typePackage === packageFilter));
                  } else {
                    setFilteredData(dataaa); 
                  }
                }}
              >
                <option value="">Tất cả gói dịch vụ</option>
                {packages.map((pkg, index) => (
                  <option key={pkg.id} value={pkg.namePackage}>
                    {pkg.namePackage} - {pkg.pricePackage} VNĐ
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center gap-2 mr-10">
            <input
              className="w-[200px] rounded-xl h-12 px-4 border border-gray-300 focus:outline-none"
              type="date"
            />
            <p className="self-center">Đến</p>
            <input
              className="w-[200px] rounded-xl h-12 px-4 border border-gray-300 focus:outline-none"
              type="date"
            />
          </div>
        </div>

        <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Tên</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Ngày</th>
              <th className="border px-4 py-2 text-left">Giờ</th>
              <th className="border px-4 py-2 text-left">Gói</th>
              <th className="border px-4 py-2 text-left">Địa chỉ</th>
              <th className="border px-4 py-2 text-left">Giá</th>
              <th className="border px-4 py-2 text-left">Trạng Thái</th>
              <th className="border px-4 py-2 text-left">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center py-4">
                  Chưa có lịch đặt nào
                </td>
              </tr>
            ) : (
              filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.email}</td>
                  <td className="border px-4 py-2">{item.dayBooking}</td>
                  <td className="border px-4 py-2">{item.timeBooking}</td>
                  <td className="border px-4 py-2">{item.typePackage}</td>
                  <td className="border px-4 py-2">{item.address}</td>
                  <td className="border px-4 py-2">{item.price} VNĐ</td>
                  <td className="border px-4 py-2 text-center">
                    {item.status === 'Đã duyệt' ? 'Đã duyệt' : 'Chưa duyệt'}
                  </td>
                  <td className="border text-yellow-500 px-4 py-2 flex gap-2">
                    {item.status !== 'Đã duyệt' && (
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
                        onClick={() => handleApprove(item.email)}
                      >
                        Duyệt
                      </button>
                    )}
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                      onClick={() => handleDelete(item.email)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerClient;
