import React, { useState } from 'react';
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header style={styles.header}>
      <img src="micrmeoq.png" alt="Logo" style={styles.logo} />
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`} style={styles.menu}>
        {/* Coloque aqui os itens do menu */}
      </nav>
      <div
        className={`menu-icon ${isMenuOpen ? 'open' : ''}`}
        onClick={handleMenuClick}
        style={styles.menuIcon}
      >
        <div className="bar" style={styles.bar}></div>
        <div className="bar" style={styles.bar}></div>
        <div className="bar" style={styles.bar}></div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: 'blue',
  },
  logo: {
    width: '100px',
    height: 'auto',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    position: 'absolute',
    top: '50px',
    right: '10px',
    width: '200px',
    backgroundColor: 'blue',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(41, 23, 202, 0.1)',
    transition: 'opacity 0.3s',
    opacity: '0',
    visibility: 'hidden',
  },
  menuIcon: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
  },
  bar: {
    width: '100%',
    height: '2px',
    backgroundColor: 'blue',
    margin: '2px 0',
    transition: 'transform 0.3s',
  },
};

export default Header;
