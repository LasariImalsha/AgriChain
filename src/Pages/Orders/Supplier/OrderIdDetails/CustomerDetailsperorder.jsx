import React from 'react'

function CustomerDetailsperorder() {
  return (
    <div className='border rounded-md p-4 flex flex-col gap-6'>
        <h1>CUSTOMER DETAILS</h1>
        <div className='w-full text-[12px] text-black/50 flex flex-col gap-5'>
            <div className=' flex flex-row justify-between '>
                <label className='font-semibold w-2/5'>Name</label>
                <span className='w-3/5'>: John Fernando</span>
            </div>
            <div className=' flex flex-row justify-between w-full'>
                <label className='font-semibold w-2/5'>Email</label>
                <span className='w-3/5'>: john123@gmail.com</span>
            </div>
            <div className=' flex flex-row justify-between w-full'>
                <label className='font-semibold w-2/5'>Contact</label>
                <span className='w-3/5'>: 0770568975</span>
            </div>
            <div className=' flex flex-row justify-between w-full'>
                <label className='font-semibold w-2/5'>Address</label>
                <span className='w-3/5 flex-wrap flex'>: 29A/22H, Maitipe, 2nd Lane, Nagawatta, Galle</span>
            </div>

        </div>
    </div>
  )
}

export default CustomerDetailsperorder