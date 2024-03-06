import { useContext } from 'react';

import { Product } from '../components/Product';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { useProduct } from '../hooks/products';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';


export function ProductPage() {
    const { products, errorMessage, loading, addProduct } = useProduct();
    const { modal, open, close } = useContext(ModalContext);

    function handleCreate(product: IProduct) {
        close();
        addProduct(product)
    }

    return (
        <div className='product-list'>
            {loading && <Loader />}
            {errorMessage && <ErrorMessage error={errorMessage} />}
            <button className='product-list__button-add-new-product' onClick={open}>+</button>

            {products.map(el => <Product product={el} key={el.id} />)}
            {modal && <Modal title="Create new product" onClose={() => close()}>
                <CreateProduct onCreate={handleCreate} />
            </Modal>}
        </div>
    );
}