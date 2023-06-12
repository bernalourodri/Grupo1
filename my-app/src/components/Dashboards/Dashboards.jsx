import React from 'react';
import {Chart,Chart2, Chart3,Chart4, DashboardContainer, ChartContainer, Grafico} from './style';


function Dashboards() {
  return (
    
  <Grafico>
    <DashboardContainer>
      <ChartContainer>
        <Chart />
      </ChartContainer>
      <ChartContainer>
        <Chart2 />
      </ChartContainer>
      <ChartContainer>
        <Chart3 />
      </ChartContainer>
      <ChartContainer>
        <Chart4 />
      </ChartContainer>
    </DashboardContainer>
      </Grafico>
    
  );
}

export default Dashboards;
