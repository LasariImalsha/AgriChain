import React from 'react';
import logo from '../../Assests/logo.png';
import Button from '../../Components/Button';
import { Link } from 'react-router-dom';
import dashboardImg from '../../Assests/sidebar/dashboard.png';
import hoverDashboardImg from '../../Assests/sidebar/hoverdashboard.png';
import stockManage from '../../Assests/sidebar/stockManage.png';
import hoverStockManage from '../../Assests/sidebar/hoverStockmanage.png';


function Sidebar() {
  const userRole = "supplier";

  return (
    <div className='flex flex-col w-full '>
      <div className='flex flex-row items-center bg-agro_lightgreen justify-center rounded-tl-lg  p-2'>
        <img src={logo} className='w-16'/>
        <h1 className='font-bold text-[18px] text-center tracking-wide text-agro_green'>HARVEST HUB</h1>
      </div>
      <div className='flex flex-col justify-center  gap-4  mt-8 mx-4'>

        {userRole === "supplier" && (
        <>
        <Link to="/dashboard">
          <Button
            btnName="DASHBOARD"
            btnImg={hoverDashboardImg}
            hoverImg={dashboardImg}
          />
        </Link>

        <Link to="/dashboard/stockManage">
          <Button
            btnName="MANAGE STOCK"
            btnImg={hoverStockManage}
            hoverImg={stockManage}
          />
        </Link>
        </>
        )}

        {userRole === "farmer" && (
        <>
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
        </>
        )}
      </div>
    </div>
  )
}

export default Sidebar