
import Cartao from "../components/Cartao/Cartao";
import { Link } from 'react-router-dom';
import Menu from "../components/Menu/Menu";

import Cadastro from "../components/Cadastro/Cadastro";
import Header from "../components/Header/Header";
function App(){
  
    return(
        <div>
          
           
            <Header />
            <Menu />

            <Cadastro />
            
          
        
        </div>
        
    )
}
export default App;