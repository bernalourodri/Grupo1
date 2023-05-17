import Menu from "../Menu/Menu";
import { MeuNav } from "./style";
import Checkbox from "../Checkbox/Checkbox";
import {Container, FormContainer, Input, Button, tamTablet} from "./style";

function Chamados(){
    return(
      <Container>
        <FormContainer>
          <h1>Abertura de Chamado</h1>
          <Input type="text" placeholder="Título" />
          <Input type="text" placeholder="Usuário" />
          <Input type="text" placeholder="Pessoa Responsável" />
          <Input type="checkbox" placeholder="Departamento enviado"/> 
          <Checkbox />
          <Button>Cadastro</Button>
      </FormContainer>
  </Container>
    )
}
export default Chamados ;