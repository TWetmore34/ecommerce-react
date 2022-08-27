import React from 'react';
import Header from './components/Header';
import 'react-bootstrap'
import Featured from './components/Featured.js';
import './style.css'
import ProductList from './components/ProductList';
function App() {
  return (
    <div>
      <Header />
      <Featured />
      <ProductList />
    </div>
  );
}

export default App;
