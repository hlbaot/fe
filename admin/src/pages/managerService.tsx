import React from 'react'
import '../assets/styles/managerService.scss'
import ButtonAddService from '../ui/btnAddService'
function ManagerService() {
  const data = [
    {

    }
  ]
  return (
    <div className='relative'>
      <div className='mngService'>
        <h1 className='w-full bg-white z-10 text-2xl font-bold text-center py-2 sticky top-0'>Quản lí dịch vụ</h1>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Tên gói</th>
              <th className="border px-4 py-2 text-left">Giá</th>
              <th className="border px-4 py-2 text-left">Mô tả</th>
              <th className="border px-4 py-2 text-left">Thao tác</th>
            </tr>
          </thead>


        </table>
      </div>
      <div className="absolute right-8 bottom-8">
        <ButtonAddService/>
      </div>
    </div>
  )
}

export default ManagerService