import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, LabelList } from 'recharts';


function SupplierIncome() {
    const data = [
        { name: "Jan", value: 9 },
        { name: "Feb", value: 2 },
        { name: "Mar", value: 2 },
        { name: "Apr", value: 2 },
        { name: "May", value: 7 },
        { name: "Jun", value: 7 },
        { name: "Jul", value: 7 },
        { name: "Sep", value: 7 },
        { name: "Oct", value: 7 },
        { name: "Nov", value: 7 },
        { name: "Dec", value: 0 },
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF4081", "#9C27B0", "#3F51B5", "#FF5722", "#4CAF50", "#795548", "#FFC107", "#607D8B"];

    return (
        <div className='border rounded-md p-4 flex flex-col gap-3'>
            <h1>MONTHLY INCOME</h1>
            <PieChart width={500} height={250}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    // fill="#8884d8"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}

                    {/* Using LabelList to show values above each slice */}
                    <LabelList
                        dataKey="value"
                        position="outside"
                        offset={20} 
                        style={{
                            fontSize: '15px',
                            fontWeight: 'bold',
                            fill: '#333',
                        }}
                    />
                </Pie>
                <Tooltip 
                    wrapperStyle={{
                        fontSize: "12px"
                    }}
                />
                <Legend 
                    layout="vertical" 
                    align="right" 
                    verticalAlign="middle"
                    wrapperStyle={{
                        fontSize: '12px', 
                        lineHeight: '24px' 
                    }}
                />
            </PieChart>
        </div>
    );
}

export default SupplierIncome;
