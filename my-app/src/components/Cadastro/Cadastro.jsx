import Menu from "../Menu/Menu";
import { MeuNav } from "./style";
import { Container, FormContainer, Input, ErrorMessage, Button, Title, Drop} from "./style";

function Cadastro(){
    return(
      <Container>
        <FormContainer>
          <h1>Cadastro</h1>
          <Input type="text" placeholder="Nome" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Senha" />
          <label for = "permissoes">Selecione o nivel de permissão</label>
          <select name ="permissoes" id ="permissoes">          
              <option value="opcao1">Nivel 1</option>
              <option value="opcao2">Nivel 2</option>
              <option value="opcao3">Nivel 3</option>
          </select>
          <Button>Cadastro</Button>
        </FormContainer>
    </Container>
        
    )
}
export default Cadastro ;