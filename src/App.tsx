import { Product } from './components/Product';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { useProduct } from './hooks/products';

function App() {
  const {products, errorMessage, loading} = useProduct();

  return (
    <div className='container'>
      {loading && <Loader/>}
      {errorMessage && <ErrorMessage error={errorMessage}/>}

      {products.map(el => <Product product={el} key={el.id} />)}

    </div>
  );
}

export default App;
