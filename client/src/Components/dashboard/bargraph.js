import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: '11-20', TotalCases: 20, Severe: 10 },
  { name: '21-30', TotalCases: 35, Severe: 90 },
  { name: '31-40', TotalCases: 24, Severe: 68 },
  { name: '41-50', TotalCases: 26, Severe: 65 },
  { name: '51-60', TotalCases: 8, Severe: 12 },
  { name: '61-70', TotalCases: 2, Severe: 4 },
];

const Bar23 = () => (
  <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
    <BarChart
      width={500}
      height={400}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="TotalCases" fill="#82ca9d" />
      <Bar dataKey="Severe" fill="#8884d8" />
    </BarChart>
  </div>
);

export default Bar23;
