import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';

const App: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="App">
      <h1>Продукты</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
