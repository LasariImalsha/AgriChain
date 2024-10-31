import React from 'react';
import logo from '../../Assests/logo.png';
import Button from '../../Components/Button';
import { Link } from 'react-router-dom';
import dashboardImg from '../../Assests/sidebar/dashboard.png';
import hoverDashboardImg from '../../Assests/sidebar/hoverdashboard.png';
import stockManage from '../../Assests/sidebar/stockManage.png';
import hoverStockManage from '../../Assests/sidebar/hoverStockmanage.png';
import pastOrders from '../../Assests/sidebar/pastOrders.png';


function Sidebar() {
  const userRole = "supplier";

  return (
    <div className='flex flex-col w-[280px] bg-light_green rounded-l-lg'>
      <div className='flex flex-row items-center bg-agro_lightgreen rounded-tl-lg  p-2'>
        <img src={logo} className='w-16'/>
        <h1 className='font-bold text-[18px] text-center tracking-wide text-agro_green'>HARVEST HUB</h1>
      </div>
      <div className='flex flex-col gap-8  mt-8 mx-4'>

        {userRole === "supplier" && (
        <>
        {/* navigate to supplier dashboard */}
        <Link to="/dashboard">
          <Button
            btnName="DASHBOARD"
            btnImg={hoverDashboardImg}
            hoverImg={dashboardImg}
          />
        </Link>

        {/* navigate to stock management */}
        <Link to="/dashboard/stockManage">
          <Button
            btnName="MANAGE STOCK"
            btnImg={hoverStockManage}
            hoverImg={stockManage}
          />
        </Link>

        {/* navigate to view past orders for supplier */}
        <Link to="/dashboard/pastOrders">
          <Button
            btnName="PAST ORDERS"
            btnImg={pastOrders}
            hoverImg={pastOrders}
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