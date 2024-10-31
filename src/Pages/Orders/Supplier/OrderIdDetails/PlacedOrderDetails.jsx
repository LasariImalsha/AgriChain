import React from 'react'


function PlacedOrderDetails() {
    const status ="delivered";

  return (
    <div className='border rounded-md p-4 flex flex-col gap-4 '>
        <h1>ORDER DETAILS</h1>
        <div className='w-full text-[12px] text-black/50 flex flex-col gap-5'>
            <div className=' grid grid-cols-3 '>
                <label className='font-semibold col-span-1'>Total Amount</label>
                <span className='w-full font-bold'>$ 50.00</span>
            </div>

            <div className=' grid grid-cols-3 '>
                <label className='font-semibold col-span-1'>Status</label>
                <span className='w-full font-bold'>
                    {status === "delivering"? (
                        <div className='bg-agro_lightgreen/70 px-2 py-1 rounded-lg w-24'>
                            Delivering
                        </div>
                    ):(
                        <div className='bg-agro_yellow/30 px-2 py-1 rounded-lg w-24'>
                            Delivered
                        </div>
                    )}
                </span>
            </div>
        </div>
    </div>
  )
}

export default PlacedOrderDetails