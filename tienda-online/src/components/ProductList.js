import React from 'react';
import '../styles/styles.css';
import { products } from '../data/productsData';
import { NavLink } from 'react-router-dom';
import SearchBar from './Search';

function ProductList() {
  return (
    <div className="product-list">
      <h1>Productos</h1>
      <SearchBar />
      <ul>
        {products.map(product => (
          <li className="product-list__item" key={product.id}>
            <img className='product-list__image' src={product.image} alt={product.name}/>
            <div className="roduct-list__details">
              <h2>{product.name}</h2>
              <h3>Precio: $ {product.price}</h3>
              <NavLink className="button" to={`/products/${product.id}`}> Detalle del Producto </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

