import Menu from "../Menu/Menu";


import { Container , Input} from "./style";
function Cadastro(){
    return(
        <Container> <div> 
            <h1>Cadastro
            </h1>
        <p>Nome</p>
       <Input> <input type="name"></input></Input>
            <p>Email</p>
            <input type="name"></input>
            <p>Senha</p>
            <input type="name"></input>
            <p>Permições do usuário</p>
            <input type="name"></input>
            <button>Cadastrar</button>
    </div>
    </Container>
        
    )
}
export default Cadastro ;