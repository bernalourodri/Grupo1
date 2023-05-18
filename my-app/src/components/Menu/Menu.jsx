import { Link } from "react-router-dom";
import { MeuNav } from "./style";
import React, { useState } from 'react';


const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="menu">
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon" />
          <img id= "logo_menu" src = "micrmeoq.png" width = "100px" />
        </button>
        {isOpen && (
          <MeuNav>
            <ul>
                <li><Link to ="/sobre">Abertura de chamado</Link></li>
                <li><Link to ="/">Tela de login</Link></li>
                <li><Link to = "/cadastro">Cadastro</Link></li>
                <li><Link to = "/dashboard">Dashboards</Link></li>
            </ul>
          </MeuNav>
        )}
      </div>
    );
  };

export default Menu;