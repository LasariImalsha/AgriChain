import React, { useState, useEffect } from 'react';
import TablePagination from '@mui/material/TablePagination';
import { useNavigate } from 'react-router-dom';


function ManageStock() {
    const navigate =useNavigate();
    const [searchTerm, setSearchTerm]= useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [displayedOrders, setDisplayedOrders] = useState([]);

    const currentOrders = [
        {
            order_Id: "12553",
            Redieved_date: "2024-10-5",
            Deliverd_date: "2024-11-8",
            Quantity: "155"
        },
        {
            order_Id: "12483",
            Redieved_date: "2024-1-5",
            Deliverd_date: "2024-10-8",
            Quantity: "195"
        },
        {
            order_Id: "5893",
            Redieved_date: "2024-10-12",
            Deliverd_date: "2024-11-24",
            Quantity: "493"
        },
        {
            order_Id: "98663",
            Redieved_date: "2024-11-7",
            Deliverd_date: "2024-12-10",
            Quantity: "500"
        }
    ];

    // Set initial orders display to show all orders
    useEffect(() => {
        setDisplayedOrders(currentOrders);
    }, []);


    //handle the page
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    //handle the rows for a page
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    // Filter items when the search button is clicked
    const handleSearch = () => {
        const filtered = currentOrders.filter(order =>
            order.order_Id.includes(searchTerm)
        );
        setDisplayedOrders(filtered);
        setPage(0);
    };

  return (
    <>
    <div className='flex flex-col items-center justify-center'>
        <h1 className='flex text-center justify-center font-semibold text-2xl text-gray-500 tracking-wider'> Stock Management</h1>
    </div>

    {/* The Table starts here */}
    <div className='flex flex-col rounded-lg mt-6 mx-4'>
    <div className='flex flex-row w-full p-2 justify-between items-center'>
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

    <div className='flex flex-col p-2'>
        <TablePagination 
            component="div"
            rowsPerPageOptions={[2,10,25,50]}
            page={page}
            count={displayedOrders.length}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <div className='overflow-x-auto rounded-lg bg-agro_lightgreen/70'>
            <table className='min-w-full rounded-lg'>
                <thead className='bg-agro_green text-white text-left'>
                    <tr>
                        <th className='px-6 py-3 text-xs'>No</th>
                        <th className='px-6 py-3 text-xs'>ItemID</th>
                        <th className='px-6 py-3 text-xs'>Item Name</th>
                        <th className='px-6 py-3 text-xs'>Quantity</th>
                        <th className='px-6 py-3 text-xs'>Price</th>
                        <th className='px-6 py-3 text-xs'>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {displayedOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                        <tr key={index} className=' text-xs font-normal border border-b-agro_green/20'>
                            <td className='px-6 py-3'>{page * rowsPerPage + index + 1}</td>
                            <td className='px-6 py-3'>{row.order_Id}</td>
                            <td className='px-6 py-3'>{row.Redieved_date}</td>
                            <td className='px-6 py-3'>{row.Deliverd_date}</td>
                            <td className='px-6 py-3'>{row.Quantity}</td>
                            <td className='px-6 py-3'>
                                <button 
                                    className='px-4 py-2 rounded-md text-white font-semibold bg-agro_green hover:bg-agro_green/50'
                                >
                                    Update
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

export default ManageStock