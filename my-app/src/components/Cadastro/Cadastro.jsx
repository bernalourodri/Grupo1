import Menu from "../Menu/Menu";
import { MeuNav } from "./style";
import { Container, FormContainer, Input, ErrorMessage, Button, Title} from "./style";

function Cadastro(){
    return(
      <Container>
        <FormContainer>
          <h1>Cadastro</h1>
          <Input type="text" placeholder="Nome" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Senha" />
          <Input type="text" placeholder="Permissões do usuário" />
          <Button>Cadastro</Button>
        </FormContainer>
    </Container>
        
    )
}
export default Cadastro ;