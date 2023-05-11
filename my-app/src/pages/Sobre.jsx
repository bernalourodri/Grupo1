import { Link } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Chamados from "../components/Chamados/Chamados";
import Checkbox from "../components/Checkbox/Checkbox"

function App(){
    
    return(
        <div>
            <Menu />

    <Chamados />    
   
        </div> 
    )
}

export default App;