import React, { useState } from 'react';
import '../assets/styles/managerService.scss';
import ButtonAddService from '../ui/btnAddService';
import Swal from 'sweetalert2';
import ModalPackage from '../component/modalPackage';
import axios from 'axios';

interface ServicePackage {
  id: number;
  namePacket: string;
  pricePacket: number;
  description: string;
}

function ManagerService() {
  const [data, setData] = useState<ServicePackage[]>([]); // Initialize with an empty array
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState<ServicePackage>({
    id: 0,
    namePacket: '',
    pricePacket: 0,
    description: '',
  });
  const [openModal, setOpenModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(null);

  // Function to handle adding a new service package (called from ButtonAddService)
  const handleAddService = (newService: ServicePackage) => {
    setData((prevData) => [...prevData, newService]);
  };

  const handleDelete = async (id: number) => {
    Swal.fire({
      title: 'Bạn chắc chắn muốn xóa?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xóa!',
      cancelButtonText: 'Hủy',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/service-packages/${id}`);

          setData((prevData) => prevData.filter((item) => item.id !== id));

          Swal.fire({
            title: 'Đã xóa!',
            text: 'Gói dịch vụ đã được xóa thành công.',
            icon: 'success',
            timer: 1500,
            confirmButtonText: 'OK',
          });
        } catch (error) {
          console.error('Lỗi khi xóa gói dịch vụ:', error);
          Swal.fire({
            title: 'Lỗi!',
            text: 'Có lỗi xảy ra khi xóa gói dịch vụ!',
            icon: 'error',
            timer: 1500,
            confirmButtonText: 'OK',
          });
        }
      }
    });
  };

  const handleChange = (id: number) => {
    const itemToEdit = data.find((item) => item.id === id);
    if (itemToEdit) {
      setEditingIndex(id);
      setEditData(itemToEdit);
    }
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = async (index: number) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/service-packages/${editData.id}`,
        editData
      );

      const newData = [...data];
      const dataIndex = newData.findIndex((item) => item.id === editData.id);
      if (dataIndex !== -1) {
        newData[dataIndex] = editData;
        setData(newData);
      }

      Swal.fire({
        title: 'Lưu thành công!',
        text: 'Gói dịch vụ đã được cập nhật.',
        icon: 'success',
        timer: 1500,
        confirmButtonText: 'OK',
      });
      setEditingIndex(null);
    } catch (error) {
      console.error('Lỗi khi lưu gói dịch vụ:', error);
      Swal.fire({
        title: 'Lỗi!',
        text: 'Không thể cập nhật gói dịch vụ. Vui lòng thử lại.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  const handleOpenModal = (item: ServicePackage) => {
    setSelectedPackage(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedPackage(null);
  };

  return (
    <div className="relative">
      <div className="mngService">
        <h1 className="w-full bg-white z-10 text-2xl font-bold text-center py-2 sticky top-0">
          Quản lí dịch vụ
        </h1>
        <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Tên gói</th>
              <th className="border px-4 py-2 text-left">Giá</th>
              <th className="border px-4 py-2 text-left">Mô tả</th>
              <th className="border px-4 py-2 text-left">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={4} className="border px-4 py-2 text-center text-gray-500">
                  Chưa có dịch vụ nào
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition duration-200">
                  <td className="border px-4 py-2">
                    {editingIndex === item.id ? (
                      <input
                        type="text"
                        name="namePacket"
                        value={editData.namePacket}
                        onChange={handleEditChange}
                        className="border rounded px-2 py-1 w-full"
                      />
                    ) : (
                      item.namePacket
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {editingIndex === item.id ? (
                      <input
                        type="text"
                        name="pricePacket"
                        value={editData.pricePacket}
                        onChange={handleEditChange}
                        className="border rounded px-2 py-1 w-full"
                      />
                    ) : (
                      <>
                        {item.pricePacket}
                        <span> VNĐ</span>
                      </>
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {editingIndex === item.id ? (
                      <textarea
                        name="description"
                        value={editData.description}
                        onChange={handleEditChange}
                        className="border rounded px-2 py-1 w-full"
                        rows={2}
                      />
                    ) : (
                      item.description
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    <div className="flex gap-2">
                      {editingIndex === item.id ? (
                        <>
                          <button
                            onClick={() => handleSave(item.id)}
                            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
                          >
                            Lưu
                          </button>
                          <button
                            onClick={() => setEditingIndex(null)}
                            className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm"
                          >
                            Hủy
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleOpenModal(item)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                          >
                            Xem
                          </button>
                          <button
                            onClick={() => handleChange(item.id)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm"
                          >
                            Sửa
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                          >
                            Xóa
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="absolute right-8 bottom-8">
        <ButtonAddService onAddService={handleAddService} />
      </div>

      {selectedPackage && (
        <ModalPackage
          open={openModal}
          handleClose={handleCloseModal}
          data={selectedPackage}
        />
      )}
    </div>
  );
}

export default ManagerService;