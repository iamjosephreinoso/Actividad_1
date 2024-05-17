import React from 'react';
import AdidasLogo from "../images/adidas-logo.png";
import '../styles/styles.css';


function Header() {
  return (
    <header className="header">
        <img src={AdidasLogo} alt="adidas" className="header__logo-img"/>
    </header>
  );
}

export default Header;
