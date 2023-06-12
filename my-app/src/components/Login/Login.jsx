import { MeuNav } from "./style";
import { Link } from "react-router-dom";
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
                <Link to ="/sobre"><Button>Login</Button></Link>
        </FormContainer>
    </Container>
    </div>
    )
}
export default Login ;