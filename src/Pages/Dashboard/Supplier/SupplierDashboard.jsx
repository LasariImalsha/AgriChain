import React from 'react'
import SupplierSales from './SupplierSales'
import SupplierIncome from './SupplierIncome'
import CurrentOrderList from '../../Orders/Supplier/CurrentOrderList'

function SupplierDashboard() {
  return (
  <>
  <h1 className='flex text-start font-semibold text-2xl mt-2 text-gray-500 tracking-wider'>Overview</h1>

  <div className='flex flex-col gap-6 w-full'>
    <div className='grid grid-cols-2 mt-6 gap-6'>
      <SupplierSales/>
      <SupplierIncome />
    </div>

    <CurrentOrderList />
  </div>
  </>
  )
}

export default SupplierDashboard