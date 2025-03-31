import React from 'react'
import '../assets/styles/admin.scss'
import Navbar from '../component/navbar'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ManagerHome from '../pages/managerHome';

function Admin() {
  return (
    <div className='admin'>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<ManagerHome/>} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin