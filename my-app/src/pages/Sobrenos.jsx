import { Link } from 'react-router-dom';
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu"
import Cartao from '../components/Cartao/Cartao';
import Sobrenos from '../components/Sobrenos/Sobrenos';


function App(){
  
    return(
        <div>
          <Header />
          <Menu />
            <Sobrenos />
            
          
        
        </div>
        
    )
}
export default App;