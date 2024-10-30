import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';


function Dashboard() {
  return (
    <div className='p-2 w-full h-screen bg-light_green/40'>
      <div className='flex flex-row gap-2 bg-white h-full rounded-lg '>
        <div className='w-2/12 p-1 bg-agro_green rounded-l-lg '>
          <Sidebar />
        </div>
        <div className='w-10/12 p-1'>
          <Outlet />
        </div> 
      </div>
    </div>
  )
}

export default Dashboard