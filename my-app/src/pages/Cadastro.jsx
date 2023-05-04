
import Cartao from "../Cartao/Cartao";
import { Link } from 'react-router-dom';
import Menu from "../Menu/Menu";
import background from "../FotoHtml/fotoHtml.jpg"

function App(){
    return(
        <body>
            <div style={{ backgroundImage: `url(${background})` }}>
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
            </div>
        
        </body>
        
    )
}
export default App;