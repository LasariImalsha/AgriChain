import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TablePagination from '@mui/material/TablePagination';


function CurrentOrderList() {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [currentOrders, setCurrentOrders] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');

    const OrderedOrders = [
        { 
            order_id: "5689", 
            date: "2024-10-05", 
            customer_name: "John", 
            price: "$20", 
            status: "$80" 
        },
        { 
            order_id: "7828", 
            date: "2024-10-05", 
            customer_name: "Rose", 
            price: "$20", 
            status: "$80" 
        },
        { 
            order_id: "2324", 
            date: "2024-10-06", 
            customer_name: "Sunil", 
            price: "$20", 
            status: "$80" 
        },
        { 
            order_id: "5477", 
            date: "2024-10-07", 
            customer_name: "Nimali", 
            price: "$20", 
            status: "$80" 
        },
    ];


    useEffect(() => {
        setCurrentOrders(OrderedOrders);
    }, []);


    // Extract unique dates for the select options
    const uniqueDates = [...new Set(OrderedOrders.map(order => order.date))];


    // Handle date selection
    const handleDateChange = (event) => {
        const date = event.target.value;
        setSelectedDate(date);
        // Filters the orders based on selected date
        const filteredOrders = date ? OrderedOrders.filter(order => order.date === date) : OrderedOrders;
        setCurrentOrders(filteredOrders);
        setPage(0); 
    };


    // Handle page change
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    
    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    return (
    <div className='flex flex-col rounded-md border p-4'>
        <h1>CURRENT ORDERS</h1>

        {/* Table and Pagination */}
        <div className='flex flex-col rounded-lg '>
            <div className='flex flex-row justify-between my-3 '>
            
            {/* Dropdown for selecting date */}
            <div className='border rounded-md w-auto h-full '>
                <select value={selectedDate} onChange={handleDateChange} className="p-2 flex  focus:outline-none flex-col items-center justify-center w-full text-[12px]">
                    <option value="">Sort By Date </option>

                    {uniqueDates.map((date, index) => (
                        <option key={index} value={date}>
                            {date}
                        </option>
                    ))}
                </select>
            </div>
            
            <TablePagination
                component="div"
                rowsPerPageOptions={[2, 10, 25, 50]}
                page={page}
                count={currentOrders.length}
                rowsPerPage={rowsPerPage}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </div>

            {/* Table Content */}
            <div className='overflow-x-auto rounded-lg bg-agro_lightgreen/70 '>
                <table className='min-w-full rounded-lg '>
                    <thead className='bg-agro_green/90 text-white text-left'>
                        <tr>
                            <th className='px-6 py-3 text-xs'>No</th>
                            <th className='px-6 py-3 text-xs'>Order ID</th>
                            <th className='px-6 py-3 text-xs'>Date</th>
                            <th className='px-6 py-3 text-xs'>Customer Name</th>
                            <th className='px-6 py-3 text-xs'>Amount</th>
                            <th className='px-6 py-3 text-xs'>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                    {currentOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order, index) => (
                        <tr key={index} className='text-xs font-normal border border-b-agro_green/20'>
                            <td className='px-6 py-3'>{page * rowsPerPage + index + 1}</td>
                            <td className='px-6 py-3'>{order.order_id}</td>
                            <td className='px-6 py-3'>{order.date}</td>
                            <td className='px-6 py-3'>{order.customer_name}</td>
                            <td className='px-6 py-3'>{order.price}</td>
                            <td className='px-6 py-3'>
                                <button
                                    className='px-4 py-2 rounded-md text-white font-semibold bg-agro_green/90 hover:bg-agro_green/50'
                                    onClick={() => navigate(`/dashboard/orderDetails/${order.order_id}`)}
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
    )
}

export default CurrentOrderList;
