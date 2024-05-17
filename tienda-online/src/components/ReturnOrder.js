import React from 'react';
import '../styles/styles.css';
import useCarrito from './Cart';

function ReturnOrder() {
  const { getDevolucion, limpiarDevolucion } = useCarrito();
  const devolucion = getDevolucion();

  return (
    <div className="shopping-cart">
      <h1>Carrito de compras</h1>
      <ul>
        {devolucion.map((product, index) => (
          <li key={index}>
            <img src={product.image} alt={product.name}/>
            <h2>{product.name}</h2>
            <h3>Precio: ${product.price}</h3>
          </li>
        ))}
      </ul>
      <div>
        <button className="button" onClick={() => limpiarDevolucion()}> Devolver Pedido </button>
      </div>
    </div>
  );
}

export default ReturnOrder;
