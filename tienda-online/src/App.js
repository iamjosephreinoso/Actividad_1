import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import ReturnOrder from './components/ReturnOrder';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/Notfound.js';
import './styles/styles.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetail />}/>
          <Route path="/products" element={<ProductList />} />
          <Route path="/carrito" element={<ShoppingCart />} />
          <Route path="/devolucion" element={<ReturnOrder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

