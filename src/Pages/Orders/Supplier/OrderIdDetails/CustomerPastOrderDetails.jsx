import React from 'react'
import { useParams } from 'react-router-dom'
import CustomerDetailsperorder from '../OrderIdDetails/CustomerDetailsperorder';
import ItemsOrderedPerOder from '../OrderIdDetails/ItemsOrderedPerOder';
import PlacedOrderDetails from './PlacedOrderDetails';

function CustomerPastOrderDetails() {
    const {orderID} = useParams();

  return (
    <div className='flex flex-col mt-4 gap-4 h-auto overflow-y-auto'>
        <h1 className='text-3xl font-semibold text-gray-500'>Order ID: <span className='text-agro_green font-bold text-md ml-2'>{orderID}</span></h1>
        
        {/* The details about order Id */}
        <div className='w-full border rounded-md p-4 flex flex-col  gap-6'>
            <h1 className='text-'>Order Id: {orderID} </h1>
            <div className='flex flex-row text-[10px] text-black/50 font-semibold gap-8'>
                <div  className='flex flex-row px-2 py-2 gap-3 bg-agro_lightgreen/70 rounded-lg'>
                    <h3>Paid On:</h3>
                    <span>2024-10-12</span>
                </div>
                <div  className='flex flex-row px-2 py-2 gap-3 bg-agro_lightgreen/70 rounded-lg'>
                    <h3>Placed On:</h3>
                    <span>2024-10-05</span>
                </div>
            </div>
        </div> 


        
        <div className='grid grid-cols-3 gap-2 '>
            {/* The details about the customer*/}
            <CustomerDetailsperorder />

            {/* The billing address for the order */}
            <div className='border rounded-md p-4 flex flex-col gap-4 '>
                <h1>BILLING ADDRESS</h1>
                <p className='text-black/50 text-[12px]'>29A/22H Maitipe, 2nd Lane, Nagahawtta, Galle</p>
            </div>

            <PlacedOrderDetails />
        </div>
       
            {/* The details of items ordered per order ID */}
            <ItemsOrderedPerOder />
    </div>
  )
}

export default CustomerPastOrderDetails