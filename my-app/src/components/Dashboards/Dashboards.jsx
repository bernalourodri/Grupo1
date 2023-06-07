import React from 'react';
import {Chart,Chart2, Chart3, DashboardContainer, ChartContainer} from './style';


function Dashboards() {
  return (
    
   <div>
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
    </DashboardContainer>
      
    </div>
  );
}

export default Dashboards;
