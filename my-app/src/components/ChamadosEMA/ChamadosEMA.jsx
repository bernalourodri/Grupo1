
import {Cartao1, Cartao2 } from "../Cartao/Cartao";
import {Container, FormContainer } from "./style";

function ChamadosEMA() {
    return (
      
     <div>
       <Container>
        <FormContainer>
     <h2>Chamados em aberto</h2>
     <Cartao1 />
     
     <h2>Chamados fechados</h2>
     <Cartao2 />

    </FormContainer>
     </Container>
      </div>
    );
  }
  
  export default ChamadosEMA;
  