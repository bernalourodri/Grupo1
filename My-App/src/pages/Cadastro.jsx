
import Cartao from "../Cartao/Cartao";
import { Link } from 'react-router-dom';
import Menu from "../Menu/Menu";


function App(){
    return(
        <body>
            <Menu />
            <p>Nome</p>
            <Cartao />
            <p>Email</p>
            <Cartao />
            <p>Senha</p>
            <Cartao />
            <p>Permições do usuário</p>
            <Cartao />
            <button><Link to ="/">Cadastrar</Link></button>
        </body>
        
    )
}
export default App;