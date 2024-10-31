import React from 'react'

function ItemsOrderedPerOder() {

  const OrderedOrders =[
    {
      item_id:"5689",
      item_name:"fertilizer One",
      quantity:"4",
      price:"$20",
      total:"$80"
    },
    {
      item_id:"5689",
      item_name:"fertilizer One",
      quantity:"4",
      price:"$20",
      total:"$80"
    },
    {
      item_id:"7989",
      item_name:"fertilizer Two",
      quantity:"2",
      price:"$50",
      total:"$100"
    },
    {
      item_id:"6889",
      item_name:"fertilizer Three",
      quantity:"5",
      price:"$70",
      total:"$350"
    }
]
  return (
    <div className='border rounded-md p-4 flex flex-col'>
      <h1>ITEMS ORDERED</h1>

      <div className='flex flex-col rounded-lg mt-6 '>
      <div className='flex flex-col'>
        <div className='overflow-x-auto rounded-lg '>
          <table className='min-w-full rounded-lg '>
            <thead className='bg-agro_lightgreen text-black/50 text-left'>
              <tr>
                <th className='px-6 py-3 text-xs'>No</th>
                <th className='px-6 py-3 text-xs'>ItemID</th>
                <th className='px-6 py-3 text-xs'>Item Name</th>
                <th className='px-6 py-3 text-xs'>Quantity</th>
                <th className='px-6 py-3 text-xs'>Price</th>
                <th className='px-6 py-3 text-xs'>Total</th>
              </tr>
            </thead>

            <tbody>
            {OrderedOrders.map((order, index)=>(
            <tr key={index} className=' text-xs font-normal border border-b-agro_lightgreen'>
              <td className='px-6 py-3'>{index + 1}</td>
              <td className='px-6 py-3'>{order.item_id}</td>
              <td className='px-6 py-3'>{order.item_name}</td>
              <td className='px-6 py-3'>{order.quantity}</td>
              <td className='px-6 py-3'>{order.price}</td>
              <td className='px-6 py-3'>{order.total}</td>
            </tr>
            ))}  
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ItemsOrderedPerOder