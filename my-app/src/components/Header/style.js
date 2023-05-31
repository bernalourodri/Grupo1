import styled from "styled-components";
import Header from "./Header";


const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px',
      backgroundColor: '#f0f0f0',
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
      backgroundColor: '#fff',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
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
      backgroundColor: '#000',
      margin: '2px 0',
      transition: 'transform 0.3s',
    },
  };
  
  export default Header;
  