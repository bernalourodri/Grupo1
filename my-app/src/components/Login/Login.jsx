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
                <input type="checkbox" id = "lembrardemim" name = "lembrardemim" value = "lembrardemim" />
                <label for = "lembrardemim">Lembrar de mim</label>
                <Button>Login</Button>
        </FormContainer>
    </Container>
    </div>
    )
}
export default Login ;