import React, { useState } from 'react'
import '../assets/styles/managerClient.scss'
import Swal from "sweetalert2";
import axios from "axios";
interface Booking {
  name: string;
  email: string;
  dayBooking: string;
  timeBooking: string;
  typePackage: string;
  address: string;
  price: number;
}
function ManagerClient() {
  const [status, setStatus] = useState<boolean>(false);
  const data = [
    {
      name: 'toan',
      email: 'baotoanit1505@gmail.com',
      dayBooking: '17/4/2025',
      timeBooking: '15:01:00',
      typePackage: 'Gói Cặp Đôi',
      address: '42/8 npn',
      price: 250000,
    },
    {
      name: 'toan1',
      email: 'baotoanit1504@gmail.com',
      dayBooking: '10/4/2025',
      timeBooking: '15:00:00',
      typePackage: 'Gói Đơn',
      address: '42/8 ldl',
      price: 240000,
    },
  ]

  return (
    <div>
      <div className='mngClient'>
        <h1 className='w-full bg-white z-10 text-2xl font-bold text-center py-2 sticky top-0'>Đặt lịch</h1>

        {/* Phần Tìm kiếm và bộ lọc */}
        <div className="w-full p-4 flex gap-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              // onChange={(e) => setSearch(e.target.value)}
              className="w-[300px] rounded-xl h-12 px-4 border border-gray-300 focus:outline-none"
              type="text"
              placeholder="Tìm kiếm theo tên khách hàng"
            // value={search}
            />
            <div className="px-2 bg-white rounded-xl">
              <select
                // onChange={(e) => setPackage(e.target.value)}
                className="w-fit rounded-xl h-12 px-4 focus:outline-none"
              >
                <option value="">Tất cả gói dịch vụ</option>
                {/* {packageList.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))} */}
              </select>
            </div>
          </div>
          <div className="flex items-center gap-2 mr-10">
            <input
              // onChange={(e) => setFromDate(e.target.value)}
              className="w-[200px] rounded-xl h-12 px-4 border border-gray-300 focus:outline-none"
              type="date"
            // value={fromDate}
            />
            <p className="self-center">Đến</p>
            <input
              // onChange={(e) => setToDate(e.target.value)}
              className="w-[200px] rounded-xl h-12 px-4 border border-gray-300 focus:outline-none"
              type="date"
            // value={toDate}
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
            {data.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center py-4">
                  Chưa có lịch đặt nào
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.email}</td>
                  <td className="border px-4 py-2">{item.dayBooking}</td>
                  <td className="border px-4 py-2">{item.timeBooking}</td>
                  <td className="border px-4 py-2">{item.typePackage}</td>
                  <td className="border px-4 py-2">{item.address}</td>
                  <td className="border px-4 py-2">{item.price} VNĐ</td>
                  <td className="border text-yellow-500 px-4 py-2">chờ duyệt</td>
                  <td className="border text-yellow-500 px-4 py-2">
                    
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManagerClient;