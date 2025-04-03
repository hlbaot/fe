import React from 'react'
import '../assets/styles/managerHome.scss'
import styled from 'styled-components';
import ButtonAdd from '../ui/add';

const ManagerHome: React.FC = () => {
  return (
    <div className='mngHome'>
      <div className="card" />
      <div className="btn-add">
        <ButtonAdd />
      </div>
    </div>
  )
}

export default ManagerHome;