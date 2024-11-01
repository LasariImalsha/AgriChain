import React from 'react'

function AdminDashboard() {
  return (
    <>
    <h1 className='flex text-start font-semibold text-2xl mt-2 text-gray-500 tracking-wider'>Overview</h1>
      <div className='flex flex-row mt-6 gap-8 text-[13px]'>
      <h3 className='hover:'>FARMERS</h3>
      <h3>SUPPLIERS</h3>
    </div>
    </>
  )
}

export default AdminDashboard