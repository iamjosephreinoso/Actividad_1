import { useState, useEffect } from 'react';

  const useCarrito = () => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCarrito(cart);
  }, []);

  const agregarAlCarrito = (producto) => {
    const nuevoCarrito = [...carrito, producto];
    setCarrito(nuevoCarrito);
    localStorage.setItem('cart', JSON.stringify(nuevoCarrito));
  };

  const limpiarCarrito = () => {
	const carrito = localStorage.getItem('cart');
    if (carrito) {
      localStorage.setItem('devolucion', carrito);
    }
    setCarrito([]);
    localStorage.removeItem('cart');
  };

  const eliminarDelCarrito = (indexEliminar) => {
    const nuevoCarrito = carrito.filter((_, index) => index !== indexEliminar);
    setCarrito(nuevoCarrito);
    localStorage.setItem('cart', JSON.stringify(nuevoCarrito));
  };

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.price, 0).toFixed(2);
  };

  const getDevolucion = () => {
    const devolucion = JSON.parse(localStorage.getItem('devolucion'));
    return devolucion ? devolucion : [];
  };

  const limpiarDevolucion = () => {
    localStorage.removeItem('devolucion');
  };

  const obtenerDatosCarrito = () => {
    return carrito;
  };

  return { carrito, agregarAlCarrito, limpiarCarrito, eliminarDelCarrito, calcularTotal, getDevolucion, obtenerDatosCarrito , limpiarDevolucion};
};

export default useCarrito;
