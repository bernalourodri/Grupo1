import { Link } from 'react-router-dom';
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu"
import Suporte from '../components/Suporte/Suporte';


function App(){
  
    return(
        <div>
          <Header />
          <Menu />
            
            <Suporte />
          
        
        </div>
        
    )
}
export default App;