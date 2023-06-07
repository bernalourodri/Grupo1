import { Link } from "react-router-dom";
import { MeuNav , Container} from "./style";


const Menu = () =>(
    <Container >
    <MeuNav>
        <Link to ="/sobre">Abertura de chamado</Link>
        <Link to ="/">Tela de login</Link>
        <Link to = "/cadastro">Cadastro</Link>
        <Link to = "/dashboard">Dashboards</Link>
        <Link to = "/chamados">Chamados</Link>
        <Link to = "/sobrenos">Sobre nós</Link>
        <Link to = "/suporte">Suporte</Link>
    </MeuNav>
  </Container>
)

export default Menu;