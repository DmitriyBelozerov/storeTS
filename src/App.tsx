import { Product } from './components/Product';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { useProduct } from './hooks/products';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';
import { useContext} from 'react';
import { IProduct } from './models';
import { ModalContext } from './context/ModalContext';

function App() {
  const { products, errorMessage, loading, addProduct } = useProduct();
  const { modal, open, close } = useContext(ModalContext);

  function handleCreate(product: IProduct) {
    close();
    addProduct(product)
  }

  return (
    <div className='container'>
      {loading && <Loader />}
      {errorMessage && <ErrorMessage error={errorMessage} />}
      <button className='fixed top-5 right-5 rounded-full bg-red-700 text-white w-20' onClick={open}>+</button>

      {products.map(el => <Product product={el} key={el.id} />)}
      {modal && <Modal title="Create new product" onClose={() => close()}>
        <CreateProduct onCreate={handleCreate} />
      </Modal>}
    </div>
  );
}

export default App;
