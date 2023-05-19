import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Chart() {
  const data = [
    { name: 'Janeiro', value: 2 },
    { name: 'Fevereiro', value: 3 },
    { name: 'Março', value: 5 },
    { name: 'Abril', value: 2 },
    { name: 'Maio', value: 6 },
  ];

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis label={{ value: 'Dias', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
}

export default Chart;

  