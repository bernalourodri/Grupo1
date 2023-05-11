import { MeuNav } from "./style";
import {Container, FormContainer, Input, Button} from "./style";


function Login(){
    return(
        <div>
        <Container>
            <FormContainer>
                <h1>Login</h1>
                <Input type="text" placeholder="Usuário" />
                <Input type="password" placeholder="Senha" />
                <Button>Login</Button>
        </FormContainer>
    </Container>
    </div>
    )
}
export default Login ;