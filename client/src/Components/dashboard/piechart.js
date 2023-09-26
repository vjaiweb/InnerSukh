import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Anxiety', value: 36 },
  { name: 'Addiction', value: 20 },
  { name: 'Depression', value: 34 },
  { name: 'Youth Mental', value: 28 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChart23 = () => (
  <div style={{ width: '400px', height: '400px', overflow: 'hidden' }}>
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={100}
        cy={100}
        innerRadius={30}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend layout="vertical" align="right" verticalAlign="middle" />
      <Tooltip />
    </PieChart>
  </div>
);

export default PieChart23;
