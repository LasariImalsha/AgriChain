import React from 'react';
import logo from '../../Assests/logo.png';


function Sidebar() {
  return (
    <div className=' bg-agro_green flex flex-col'>
      <div className='flex flex-row items-center'>
        <img src={logo} className='w-20'/>
        <h1 className='font-bold text-xl tracking-wider text-agro_yellow'>HARVEST HUB</h1>
      </div>
    </div>
  )
}

export default Sidebar