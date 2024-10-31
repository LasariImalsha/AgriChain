import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';


function Dashboard() {
  return (
    <div className='p-2 w-full h-screen bg-agro_green'>
      <div className='flex flex-row  bg-white w-full h-full rounded-lg '>
          <Sidebar />
        <div className='w-full h-full bg-white rounded-lg p-4 overflow-y-auto no-scrollbar'>
          <Outlet />
        </div> 
      </div>
    </div>
  )
}

export default Dashboard