import React, { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 43,
        count: 20
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct)=> void
}

export function CreateProduct({onCreate}:CreateProductProps) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('')


    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError('');
        if(value.trim().length === 0) {
            setError('Please enter value title');
            setValue('')
            return
        }
        productData.title = value
        const res = await axios.post('https://fakestoreapi.com/products', productData)
        onCreate(res.data)
        setValue('')
    }

    const handleChangeValue = (e: any) => {

        setValue(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="flex column row">
            <input className="border py-2 px-4 mb-2" placeholder="Enter your product ..." type="text"
                value={value}
                onChange={handleChangeValue}
            />
                
            <button className="border py-2 px-4 bg-yellow-400 outline-0 hover:bg-yellow-600" type='submit' >Create</button>
            {error && <ErrorMessage error={error}/>}
        </form>
    )
}