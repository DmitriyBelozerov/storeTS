import { Product } from './components/Product';
import { products } from './data/products';

function App() {

  return (
    <div className='container'>
      <Product product={products[0]}/>
      <Product product={products[1]}/>

    </div>
  );
}

export default App;
