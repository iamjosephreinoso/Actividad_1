import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className='navbar__item'><Link className='navbar__link' to="/">Inicio</Link></li>
        <li className='navbar__item'><Link className='navbar__link' to="/products">Productos</Link></li>
        <li className='navbar__item'><Link className='navbar__link' to="/carrito">Carrito</Link></li>
        <li className='navbar__item'><Link className='navbar__link' to="/devolucion">Devoluciones</Link></li>
        <li className='navbar__item'><Link className='navbar__link' to="*" >Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
