import React from 'react';
import logo from '../../Assests/logo.png';
import Button from '../../Components/Button';
import { Link } from 'react-router-dom';
import dashboardImg from '../../Assests/sidebar/dashboard.png';
import hoverDashboardImg from '../../Assests/sidebar/hoverdashboard.png';


function Sidebar() {
  return (
    <div className='flex flex-col w-full '>
      <div className='flex flex-row items-center rounded-tl-lg bg-light_green'>
        <img src={logo} className='w-16'/>
        <h1 className='font-bold text-2xl tracking-wide text-agro_green'>HARVEST HUB</h1>
      </div>
      <div className='flex flex-col justify-center  gap-4 bg-agro_green mt-8 mx-4'>
          <Link to="/dashboard">
            <Button
                btnName="DASHBOARD"
                btnImg={dashboardImg}
                hoverImg={hoverDashboardImg}
            />
          </Link>

          <Link to="/dashboard">
          <Button
                btnName="DASHBOARD"
                btnImg={dashboardImg}
                hoverImg={hoverDashboardImg}
            />
          </Link>
      </div>
    </div>
  )
}

export default Sidebar