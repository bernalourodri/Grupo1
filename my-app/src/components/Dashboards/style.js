import React from 'react';
import {BarChart,Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend ,PieChart, Pie, Cell} from 'recharts';
import styled from 'styled-components';

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


function Chart2() {
  const data = [
    { name: 'A', value: 10 },
    { name: 'B', value: 20 },
    { name: 'C', value: 15 },
    
  ];

  return (
    <BarChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
}

function Chart3(){
  const data = [
    { name: 'Muito Satisfeito', value: 12 },
    { name: 'Satisfeito', value: 40},
    { name: 'Não Satisfeito', value: 4},
  ];
  
  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56'];
  
 
    return (
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    );
  };

  const Container = styled.div`
  display: flex;
`;



export  {Chart,Chart2,Chart3,Container};

  