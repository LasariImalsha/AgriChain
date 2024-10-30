import React from 'react'
import FarmerDashboard from './Farmer/FarmerDashboard'
import SupplierDashboard from './Supplier/SupplierDashboard'

function DashboardContent() {
    const userRole = "supplier"
  return (
    <div className='flex flex-col'>
        {userRole  === "farmer" && (
            <FarmerDashboard />
        )}

        {userRole === "supplier" && (
            <SupplierDashboard />
        )}
    </div>
  )
}

export default DashboardContent