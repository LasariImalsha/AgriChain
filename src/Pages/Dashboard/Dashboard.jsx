import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';


function Dashboard() {
  return (
    <div className='p-2 w-full h-screen bg-agro_green'>
      <div className='flex flex-row  bg-white h-full w-full rounded-lg '>
        <div className='w-[260px] bg-light_green rounded-l-lg '>
          <Sidebar />
        </div>
        <div className='w-full mt-4'>
          <Outlet />
        </div> 
      </div>
    </div>
  )
}

export default Dashboard