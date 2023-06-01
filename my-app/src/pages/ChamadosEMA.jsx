import { Link } from 'react-router-dom';
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu"
import Cartao from '../components/Cartao/Cartao';
import ChamadosEMA from '../components/ChamadosEMA/ChamadosEMA';

function App(){
  
    return(
        <div>
          <Header />
          <Menu />
            <ChamadosEMA />
            
          
        
        </div>
        
    )
}
export default App;