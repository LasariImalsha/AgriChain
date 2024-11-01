import React, { useState } from 'react';
import logo from '../../Assests/logo.png';
import Button from '../../Components/Button';
import { Link, useNavigate } from 'react-router-dom';
import dashboardImg from '../../Assests/sidebar/dashboard.png';
import hoverDashboardImg from '../../Assests/sidebar/hoverdashboard.png';
import stockManage from '../../Assests/sidebar/stockManage.png';
import hoverStockManage from '../../Assests/sidebar/hoverStockmanage.png';
import pastOrders from '../../Assests/sidebar/pastOrders.png';
import profile from '../../Assests/sidebar/profile.png';
import noprofile from '../../Assests/sidebar/profilenone.png';
import products from "../../Assests/sidebar/products.png";
import cultivate from '../../Assests/sidebar/cultivate.png';
import myorders from '../../Assests/sidebar/myorders.png';
import userlist from '../../Assests/sidebar/userList.png';


function Sidebar() {
  const navigate = useNavigate();
  const userRole = "admin";
  const [logoutClick, setLogoutClick] = useState(false);


  //handle the logout function in here
  const handleLogout =()=>{
    setLogoutClick(false);
    navigate("/");
  }

  return (
    <div className='flex flex-col w-[280px] bg-light_green rounded-l-lg'>
      <div className='flex flex-row items-center bg-agro_lightgreen rounded-tl-lg  p-2'>
        <img src={logo} className='w-16'/>
        <h1 className='font-bold text-[18px] text-center tracking-wide text-agro_green'>HARVEST HUB</h1>
      </div>
    
    <div className='flex flex-col justify-between flex-grow mx-4'>
      <div className='flex flex-col gap-8 mt-8'>

      {/* navigate to the dashboard */}
        <Link to="/dashboard">
          <Button
            btnName="DASHBOARD"
            btnImg={hoverDashboardImg}
            hoverImg={dashboardImg}
          />
        </Link>


        {/* navigate to view all productst */}
        <Link to="/dashboard/products">
          <Button
            btnName="PRODUCTS"
            btnImg={products}
          />
        </Link>


      {/* when the user is a supplier */}
      {userRole === "supplier" && (
        <>
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

        {/* navigate to supplier profile */}
        <Link to ="/dashboard/profile">
          <Button
            btnName="PROFILE"
            btnImg={profile}
          />
        </Link>
        </>
        )}


      {/* When the user is a farmer */}
      {userRole === "farmer" && (
        <>
        {/* navigate to farmer dashboard */}
        <Link to="/dashboard/myorders">
          <Button
            btnName="MY ORDERS"
            btnImg={myorders}
          />
        </Link>


        {/* navigate to all products */}
        <Link to="/dashboard/cultivate">
          <Button
            btnName="CULTIVATION"
            btnImg={cultivate}
          />
        </Link>


        {/* navigate to supplier profile */}
        <Link to ="/dashboard/profile">
          <Button
            btnName="PROFILE"
            btnImg={profile}
          />
        </Link>
        </>
        )}


        {/* when the user is an admin */}
        {userRole === "admin" && (
        <>
        {/* handle users */}
        <Link to ="/dashboard/users">
          <Button
            btnName="USERS LIST"
            btnImg={userlist}
          />
        </Link> 


        <Link to ="/dashboard/profile">
          <Button
            btnName="PROFILE"
            btnImg={profile}
          />
        </Link>           
        </>
        )}
      </div>


      {/* The username section in the sidebar */}
      <div className='flex flex-row items-center p-2 justify-between relative'>
        <div className=' flex flex-row items-center gap-2 p-2'>
          <img src={noprofile} className='w-12 h-12 object-cover border-2 rounded-full border-agro_green' alt='profile'/>
          <h3 className='text-sm font-semibold text-black/50'>Username</h3>
        </div>
        <button
          onClick={()=>setLogoutClick(!logoutClick)}
          className='text-black/50 font-bold'
        >:</button>

        {logoutClick && (
          <button 
            className='absolute bg-agro_green/40 right-2 top-[-8px] px-3 rounded-md'
            onClick={handleLogout}
          >
            <h3 className='text-sm text-agro_green font-semibold py-1'>Logout</h3>
          </button>
        )}
      </div>
    </div>
  </div>
  )
}

export default Sidebar