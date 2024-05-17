import React  from 'react';
import { useParams } from 'react-router-dom';
import '../styles/styles.css';
import { products } from '../data/productsData';
import useCarrito from './Cart';

function ProductDetail() {
  const { agregarAlCarrito } = useCarrito();
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));

  const agregar = () => {
    agregarAlCarrito(product);
    alert(`${product.name} ha sido agregado al carrito exitosamente.`);
  };

  return (
    <div className="product-detail">
      <img className='product-detail__image' src={product.image} alt={product.name} />
      <h2 className='product-detail__title'>{product.name}</h2>
      <p className='product-detail__description'>{product.description}</p>
      <p className='product-detail__description'>Precio: $ {product.price}</p>
      <button className="button" onClick={() => agregar()}>
        Agregar al Carrito
      </button>
    </div>
  );
}

export default ProductDetail;
