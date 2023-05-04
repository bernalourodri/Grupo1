import logo from './logo.svg';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Checkbox from "../Checkbox/Checkbox"

function App() {
  return (
 
    <body>
      <Menu />
    <h1>Tela de login</h1>
   <div>login</div>
   <input type = "name"></input>
   <div>senha</div>
   <input type = "name" ></input>

   <button><Link to ="sobre">login</Link></button>
   <div style={{display: 'flex'}}>
    <p>Lembre de mim</p>
    <Checkbox/>
    </div>
    </body>
    
  )
}

export default App;
