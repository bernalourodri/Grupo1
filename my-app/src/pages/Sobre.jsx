import { Link } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Chamados from "../components/Chamados/Chamados";
import Header from "../components/Header/Header";

function App(){
    
    return(
        <div>
           <Header />
            <Menu />

         <Chamados />    
   
        </div> 
    )
}

export default App;