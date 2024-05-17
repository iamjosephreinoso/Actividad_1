import React from 'react';
import '../styles/styles.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Buscar Producto" className="search-bar__input"/>
      <button className="search-bar__button">Buscar</button>
    </div>
  );
};

export default SearchBar;
