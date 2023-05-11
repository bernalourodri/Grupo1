import { Link } from "react-router-dom";
import { MeuNav } from "./style";

const Menu = () =>(
    <MeuNav>
        <Link to ="sobre">Abertura de chamado</Link>
        <Link to ="/">Tela de login</Link>
        <Link to = "cadastro">Cadastro</Link>
        <Link to = "dashboard">Dashboards</Link>
    </MeuNav>
)

export default Menu;