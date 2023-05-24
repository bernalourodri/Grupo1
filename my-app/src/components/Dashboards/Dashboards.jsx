import React from 'react';
import {Chart,Chart2 } from './style';

function Dashboards() {
  return (
    <div>
      <h1>Tempo Médio de Resposta</h1>
      <Chart />
      <h1>Taxa de Solução do Primeiro Contato</h1>
      <Chart2 />
      
    </div>
  );
}

export default Dashboards;
