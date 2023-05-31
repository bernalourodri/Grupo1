
import Cartao from "../components/Cartao/Cartao";
import { Link } from 'react-router-dom';
import Menu from "../components/Menu/Menu";
import background from "../FotoHtml/fotoHtml.jpg"
import Cadastro from "../components/Cadastro/Cadastro";
import Header from "../components/Header/Header";
function App(){
  
    return(
        <body>
          
           
            <Header />
            <Menu />

            <Cadastro />
            
          
        
        </body>
        
    )
}
export default App;