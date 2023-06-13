import React from 'react';
import {BarChart,Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend ,PieChart, Pie, Cell} from 'recharts';
import styled from 'styled-components';

const Grafico = styled.div`
  @media screen and (max-width:768px){
    display: grid;
    flex-direction: column;
    grid-template-columns:1fr;
   }

`

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
        <div><h2>Taxa de Solução no primeiro contato</h2></div>
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
  function Chart4(){
    const data = [
      { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
      { name: 'Fev', uv: 3000, pv: 1398, amt: 2210 },
      { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
      { name: 'Abr', uv: 2780, pv: 3908, amt: 2000 },
      { name: 'Mai', uv: 1890, pv: 4800, amt: 2181 },
      { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
      { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
    ];
    
   
      return (
        <ChartContainer>
       <ChartTitle>
          <div><h2>Tempo médio de solução</h2></div>
        </ChartTitle>
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#8884d8" />
          <Bar dataKey="pv" fill="#82ca9d" />
          <Bar dataKey="amt" fill="#ffc658" />
        </BarChart>
        </ChartContainer>
      );
  };

  

export  {Chart,Chart2,Chart3,Chart4,DashboardContainer, ChartContainer,Grafico};

  