import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Day1', Gratitude: 4000, Meditation: 2400, Affirmation: 2400 },
  { name: 'Day2', Gratitude: 3000, Meditation: 1398, Affirmation: 2210 },
  { name: 'Day3', Gratitude: 2000, Meditation: 9800, Affirmation: 2290 },
  { name: 'Day4', Gratitude: 2780, Meditation: 3908, Affirmation: 2000 },
  { name: 'Day5', Gratitude: 1890, Meditation: 4800, Affirmation: 2181 },
  { name: 'Day6', Gratitude: 2390, Meditation: 3800, Affirmation: 2500 },
  { name: 'Day7', Gratitude: 3490, Meditation: 4300, Affirmation: 2100 },
];

const Graph23 = () => (
  <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Meditation" stroke="#8884d8" />
        <Line type="monotone" dataKey="Gratitude" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Affirmation" stroke="#2845d6" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default Graph23;
