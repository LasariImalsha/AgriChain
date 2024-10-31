import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TablePagination from '@mui/material/TablePagination';


function ViewPastOrders() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [displayPastOrders, setDisplayPastOrders] = useState([]);


    const pastOrders =[
        {
            order_id:"4589",
            date:"2024-12-08",
            item_id:"1586",
            item_name:"fertilizer1",
            status:"delivering",
            customer_name:"john",
            paid_unpaid:"paid"
        },
        {
            order_id:"4593",
            date:"2024-12-10",
            item_id:"1586",
            item_name:"fertilizer2",
            status:"delivered",
            customer_name:"jack",
            paid_unpaid:"unpaid"
        },
        {
            order_id:"4594",
            date:"2024-12-12",
            item_id:"14896",
            item_name:"fertilizer3",
            status:"delivering",
            customer_name:"rose",
            paid_unpaid:"paid"
        },
        {
            order_id:"4595",
            date:"2024-12-15",
            item_id:"5886",
            item_name:"fertilizer1",
            status:"delivered",
            customer_name:"jill",
            paid_unpaid:"unpaid"
        }
    ]

    //set the past orders to  display all the past orders
    useEffect(()=>{
        setDisplayPastOrders(pastOrders);
    },[]);


    //handle the page
    const handleChangePage = (event, newPage) =>{
        setPage(newPage);
    }


    //handle the rows for a page
    const handleChangeRowsPerPage=(event)=>{
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }


    //filter items when the search butotn is clicked
    const handleSearch = ()=>{
        const filtered = pastOrders.filter(order => order.item_id.includes(searchTerm));
        setDisplayPastOrders(filtered);
        setPage(0);
    }

  return (
    <>
    <div className='flex flex-col items-center justify-center'>
        <h1 className='flex text-center justify-center font-semibold text-2xl text-gray-500 tracking-wider'> Past Orders</h1>
    </div>

    {/* The Table starts here */}
    <div className='flex flex-col rounded-lg mt-6 '>
        <div className='flex flex-row w-full  justify-between items-center'>
            <h1 className='font-semibold text-xl text-black/50'>Orders</h1>
            <div className='flex flex-row gap-3'>
                <input
                    className='rounded-lg px-2 py-2 text-xs bg-agro_lightgreen/50 focus:outline-none'
                    placeholder="Search by Item Id"
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                />
                <button
                    className='px-3 rounded-md text-white bg-agro_yellow text-sm font-semibold'
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </div>

    <div className='flex flex-col'>
        <TablePagination 
            component="div"
            rowsPerPageOptions={[2,10,25,50]}
            page={page}
            count={displayPastOrders.length}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <div className='overflow-x-auto rounded-lg bg-agro_lightgreen/70'>
            <table className='min-w-full rounded-lg'>
                <thead className='bg-agro_green/90 text-white text-left'>
                    <tr>
                        <th className='px-6 py-3 text-xs'>No</th>
                        <th className='px-6 py-3 text-xs'>Date</th>
                        <th className='px-6 py-3 text-xs'>OrderID</th>
                        <th className='px-6 py-3 text-xs'>ItemID</th>
                        <th className='px-6 py-3 text-xs'>Item Name</th>
                        <th className='px-6 py-3 text-xs'>Status</th>
                        <th className='px-6 py-3 text-xs'>Customer Name</th>
                        <th className='px-6 py-3 text-xs'>Paid/Unpaid</th>
                        <th className='px-6 py-3 text-xs'>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {displayPastOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                        <tr key={index} className=' text-xs font-normal border border-b-agro_green/20'>
                            <td className='px-6 py-3'>{page * rowsPerPage + index + 1}</td>
                            <td className='px-6 py-3'>{row.date}</td>
                            <td className='px-6 py-3'>{row.order_id}</td>
                            <td className='px-6 py-3'>{row.item_id}</td>
                            <td className='px-6 py-3'>{row.item_name}</td>
                            <td className='px-6 py-3'>{row.status}</td>
                            <td className='px-6 py-3'>{row.customer_name}</td>
                            <td className='px-6 py-3 text-center'>
                                {row.paid_unpaid === "paid" ? (
                                <div className='bg-agro_yellow/15 font-semibold text-agro_yellow  px-1 py-1 w-16 rounded-md'>
                                    Paid
                                </div>
                                ):(
                                <div className='bg-red-400/30 font-semibold text-red-500 opacity-80 px-1 py-1 w-16 rounded-md'>
                                    UnPaid
                                </div>
                                )}</td>
                            <td className='px-6 py-3'>
                                <button 
                                    className='px-4 py-2 rounded-md text-white font-semibold bg-agro_green/90 hover:bg-agro_green/50'
                                    onClick={()=>navigate(`/dashboard/orderDetails/${row.order_id}`)}
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    </div>
    </>
  )
}

export default ViewPastOrders