import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../models";

export function useProduct() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    function addProduct (product: IProduct) {
        setProducts(prev => [...prev, product])
    }

    async function fetchProducts() {
        try {
            setErrorMessage('');
            setLoading(true);
            const response = axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
            setProducts((await response).data);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            const error = e as AxiosError
            setErrorMessage(error.message);
        }

    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return { products, errorMessage, loading, addProduct }
}