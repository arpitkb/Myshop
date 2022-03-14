import React from 'react'
import '../styles/ProductCard.css'
import { CartUpdater } from '../context/CartContext';

function ProductCard(props) {
    let {name, price, image, rating} = props.product;
    const addToCart = React.useContext(CartUpdater);
  return (
    <div className="product">
            <div className="produt_info">
                <h2>{name}</h2>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill()
                            .map(() => (
                                <p>*</p>
                            ))
                    }
                </div>
            </div>
            <img className='product_img'
                alt={name}
                src={image}
            />
            <button onClick={() => addToCart(props.product)}>Add to basket </button>
            </div>
  )
}

export default ProductCard