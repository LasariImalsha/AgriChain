import React from 'react'
import FarmerDashboard from './Farmer/FarmerDashboard'
import SupplierDashboard from './Supplier/SupplierDashboard'
import FarmerProfile from './Farmer/FarmerProfile'
import AdminDashboard from './Admin/AdminDashboard'


function DashboardContent() {
    const userRole = "admin"
    
  return (
    <div className='flex flex-col'>
        {userRole  === "farmer" && (
            <FarmerDashboard />
        )}

        {userRole === "supplier" && (
            <SupplierDashboard />
        )}

        {userRole === "admin" && (
            <AdminDashboard />
        )}


    </div>
  )
}

export default DashboardContent