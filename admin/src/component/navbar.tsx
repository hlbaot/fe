import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.scss'
import handleLogout from '../hook/logout';
function Navbar() {
  return (
    <div className='navbar'>
      <div className="head">
        <h1 className='p-4 text-[23px] text-center font-bold'>Menu Admin</h1>
      </div>
      <ul>
        <Link to="/home">
          <li>
            <p>
              Quản lí home
            </p>
          </li>
        </Link>
        <Link to="/client">
          <li>
            <p>
              Quản lí khách hàng
            </p>
          </li>
        </Link>
        <Link to="/service">
          <li>
            <p>
              Quản lí gói dịch vụ
            </p>
          </li>
        </Link>
        <Link to="/feedback">
          <li>
            <p>
              Quản lí đánh giá
            </p>
          </li>
        </Link>
      </ul>
      <div onClick={handleLogout} className="footer bg-red-300 py-2 py-4 hover:cursor-pointer">
        <p className='text-center'>Logout</p>
      </div>
    </div>
  )
}

export default Navbar