import React from 'react';
import '../styles/styles.css';
//import { getCarrito, total, eliminarItem, limpiarCarrito} from './Cart';
import useCarrito from './Cart';

function ShoppingCart() {
  const { limpiarCarrito, eliminarDelCarrito, calcularTotal, obtenerDatosCarrito} = useCarrito();

  return (
    <div className="shopping-cart">
      <h1 >Carrito de compras</h1>
      <ul >
        {obtenerDatosCarrito().map((product, index) => (
          <li className='shopping-cart__item' key={index}>
            <img className='shopping-cart__image' src={product.image} alt={product.name}/>
            <h2>{product.name}</h2>
            <h3>Precio: ${product.price}</h3>
            <button className="button" onClick={() => eliminarDelCarrito(index)}>Eliminar Producto</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Total a pagar: ${calcularTotal()}</h2>
        <button className="button" onClick={() => limpiarCarrito()}>Pagar Orden</button>
      </div>
    </div>
  );
}

export default ShoppingCart;


