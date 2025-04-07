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
      <div className="w-[100%] bg-black m-[5px] rounded-[30px]">
        <h1 className='p-2 text-[23px] text-center text-white font-bold'>Menu Admin</h1>
      </div>
      <div>

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
      <div
        onClick={handleLogout}
        className="px-[3rem] bg-red-600 m-[5px] rounded-[30px] hover:cursor-pointer hover:bg-red-700 flex items-center justify-center gap-2"
      >
        <i className="fa-solid fa-right-from-bracket text-white"></i>
        <p className="p-2 text-center text-white">Logout</p>
      </div>

    </div>
  );
}

export default Navbar;
