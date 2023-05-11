import { Link } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Chamados from "../components/Chamados/Chamados";
import Checkbox from "../components/Checkbox/Checkbox"

function app(){
    
    return(
        <div>
            <Menu />

    <Chamados />    
    <Checkbox />
        </div> 
    )
}

export default app;