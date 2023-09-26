import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: '11-20', TotalCases: 20, Severe: 2 },
  { name: '21-30', TotalCases: 35, Severe: 31.5 },
  { name: '31-40', TotalCases: 24, Severe: 17 },
  { name: '41-50', TotalCases: 26, Severe: 19 },
  { name: '51+', TotalCases: 10, Severe: 2 },
];

const Area23 = () => (
  <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="TotalCases" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
      <Area type="monotone" dataKey="Severe" stackId="1" stroke="#8884d8" fill="#8884d8" />
      
    </AreaChart>
  </div>
);

export default Area23;
