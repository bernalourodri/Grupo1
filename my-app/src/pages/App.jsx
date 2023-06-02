import logo from './logo.svg';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import Login from '../components/Login/Login';
import Header from '../components/Header/Header';

function App() {
  return (
 
    <div>
      <Header />
      <Menu />
      <Login />
    </div>
    
  )
}

export default App;
