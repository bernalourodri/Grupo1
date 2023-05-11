import Menu from "../Menu/Menu";
import { MeuNav } from "./style";
import { Container, FormContainer, Label, Input, ErrorMessage, SubmitButton, Title} from "./style";

function Cadastro(){
    return(
        <Container>
      <FormContainer>
        <Title>Cadastro</Title>
        <Label>Nome:</Label>
        <Input type="text" />
        <Label>Email:</Label>
        <Input type="email" />
        <Label>Senha:</Label>
        <Input type="password" />
        <SubmitButton>Cadastrar</SubmitButton>
      </FormContainer>
    </Container>
        
    )
}
export default Cadastro ;