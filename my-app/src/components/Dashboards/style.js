import React from 'react';
import {BarChart,Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend ,PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';
import styled from 'styled-components';


const DashboardContainer = styled.div`
  background-color: #264D70;
  padding: 20px;
  margin: auto;
  color: #264D70;
  display: grid;
  column-gap: 20px;
  grid-template-columns: 1fr 1fr;
  gap: 20px;


`;

const ChartTitle = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  justify-content: center;
  align-items: center;
  margin: auto;
  
`;

const ChartContainer = styled.div`
  @media (max-width: 768px) {
    height: 200px;
  }
  width: 95%;
  height: 400px;
  padding: 20px;
  background-color: white;
  flex-direction: column;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
   
`;

function Chart() {
  const data = [
    { name: 'Janeiro', value: 2 },
    { name: 'Fevereiro', value: 3 },
    { name: 'Março', value: 5 },
    { name: 'Abril', value: 2 },
    { name: 'Maio', value: 6 },
  ];

  return (
    < ChartContainer>
    <ChartTitle>
      <div><h2>Tempo médio de resposta</h2></div>
    </ChartTitle>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'Dias', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
     
    </ ChartContainer> 
  );
}


function Chart2() {
  const data = [
    { name: 'A', value: 10 },
    { name: 'B', value: 20 },
    { name: 'C', value: 15 },
    
  ];

  return (
    <ChartContainer>
      <ChartTitle>
        <div><h2>Taxa de Solução no primeiro</h2></div>
      </ChartTitle>
        <BarChart width={400} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ ChartContainer>
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
      <ChartContainer>
        <ChartTitle>
          <div><h2>Taxa de satisfação do cliente</h2></div>
        </ChartTitle>
        <PieChart width={400} height={300}>
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
        </ ChartContainer>
    );
  };

  

export  {Chart,Chart2,Chart3,DashboardContainer, ChartContainer};

  