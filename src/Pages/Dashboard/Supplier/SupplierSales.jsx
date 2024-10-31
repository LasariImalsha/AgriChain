import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function SupplierSales() {
    const data = [
        { "name": "Jan", "uv": 4000, "pv": 2400, "amt": 2400 },
        { "name": "Feb", "uv": 3000, "pv": 1398, "amt": 2210 },
        { "name": "Mar", "uv": 2000, "pv": 9800, "amt": 2290 },
        { "name": "Apr", "uv": 2780, "pv": 3908, "amt": 2000 },
        { "name": "May", "uv": 1890, "pv": 4800, "amt": 2181 },
        { "name": "Jun", "uv": 2390, "pv": 3800, "amt": 2500 },
        { "name": "Jul", "uv": 3490, "pv": 4300, "amt": 2100 },
        { "name": "Aug", "uv": 4000, "pv": 2400, "amt": 2400 },
        { "name": "Sep", "uv": 3000, "pv": 1398, "amt": 2210 },
        { "name": "Oct", "uv": 2000, "pv": 9800, "amt": 2290 },
        { "name": "Nov", "uv": 2780, "pv": 3908, "amt": 2000 },
        { "name": "Dec", "uv": 1890, "pv": 4800, "amt": 2181 }
    ];

    return (
        <div className='border rounded-md p-4 flex flex-col gap-3 w-full'>
            <h1>SALES</h1>
            <div className=''>
                <ResponsiveContainer width="100%" height={250} >
                    <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid stroke="#ccc" />
                        <XAxis 
                            dataKey="name" 
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis 
                            tick={{ fontSize: 12 }} 
                        />
                        <Tooltip 
                            wrapperStyle={{
                            fontSize: "12px"
                        }}
                        />
                        <Line type="monotone" dataKey="pv" stroke="#008922" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default SupplierSales;
