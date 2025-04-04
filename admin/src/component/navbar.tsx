import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.scss';

const Navbar: React.FC = () => {
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    window.location.href = '/login'
  }
  return (
    <div className='navbar'>
      <div className="head">
        <h1 className='p-4 text-[23px] text-center font-bold'>Menu Admin</h1>
      </div>
      <ul>
        <Link to="/home">
          <li>
            Quản lí home
          </li>
        </Link>
        <Link to="/client">
          <li>
            Quản lí khách hàng
          </li>
        </Link>
        <Link to="/service">
          <li>
            Quản lí gói dịch vụ
          </li>
        </Link>
        <Link to="/feedback">
          <li>
            Quản lí đánh giá
          </li>
        </Link>
      </ul>
      <div onClick={handleLogout} className="footer bg-red-300 py-2 py-4 hover:cursor-pointer">
        <p className='text-center'>Logout</p>
      </div>
    </div>
  );
}

export default Navbar;
