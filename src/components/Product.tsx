import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false)

    return (
        <>
            <div className="border py-2 px-4 flex flex-col mb-2">
                <img className="w-20 h-20" src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <p className="font-bold">{product.price}$</p>
                <button className="py-2 px-4 border bg-yellow-400" onClick={() => setDetails(prev => !prev)}>
                    {!details ? "Show Details" : "Hide Details"}
                </button>
                {details &&
                    <div>{product.description}
                        <span style={{ margin: '6px', fontWeight: 'bold' }}>Rate: {product.rating.rate}</span>
                    </div>}

            </div>

        </>
    )
}