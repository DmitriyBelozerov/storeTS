import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from './components/Product';
import { IProduct } from './models';

function App() {
  const [products, setProducts] = useState<IProduct[]>([])

  async function fetchProducts() {
    const response = axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
    setProducts((await response).data)
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div className='container'>
      {products.map(el => <Product product={el} key={el.id} />)}

    </div>
  );
}

export default App;
