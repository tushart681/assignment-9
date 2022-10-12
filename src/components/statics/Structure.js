import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Structure = ({ data }) => {

    return (
        <div className='w-11/12 mx-auto'>
            <p>Statistic</p>
            <LineChart width={500} height={300} data={data}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Structure;