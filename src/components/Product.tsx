import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false)

    const productButtonClass = details ? "product__button-details product__button-details_hide" : "product__button-details";
    const productButtonName = !details ? "Show Details" : "Hide Details";

    return (
        <>
            <div className="product">
                <img className="product__image" src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <p className="product__price">{product.price}$</p>
                <button className={productButtonClass} onClick={() => setDetails(prev => !prev)}>
                    {productButtonName}
                </button>
                {details &&
                    <div>{product.description}
                        <span className="product__rate">Rate: {product?.rating?.rate}</span>
                    </div>}

            </div>

        </>
    )
}