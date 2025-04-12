import React from 'react'
import '../assets/styles/admin.scss'
import Navbar from '../component/navbar'
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import ManagerHome from '../pages/managerHome';
import ManagerClient from '../pages/managerClient';
import ManagerService from '../pages/managerService';
import ManagerFeedback from '../pages/managerFeedback';


const Admin: React.FC = () => {
  return (
    <div className='admin'>
      <div className="nav-bar">
        <Navbar />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<ManagerHome />} />
          <Route path="/admin/home" element={<ManagerHome />} />
          <Route path="/admin/client" element={<ManagerClient />} />
          <Route path="/admin/service" element={<ManagerService />} />
          <Route path="/admin/feedback" element={<ManagerFeedback />} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin