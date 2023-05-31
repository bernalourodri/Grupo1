import React from 'react';
import {Chart,Chart2, Chart3, Container } from './style';


function Dashboards() {
  return (
    
   <div>
      < Container>
      <h1>Tempo Médio de Resposta</h1>
      <Chart />
    
      <h1>Taxa de Solução do Primeiro Contato</h1>
      <Chart2 />
      
      </Container>
     
      <h1>Satisfação do cliente</h1>
  
        <Chart3 />
        
        
      
    </div>
  );
}

export default Dashboards;
