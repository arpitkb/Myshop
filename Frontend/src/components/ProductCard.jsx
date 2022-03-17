import React from 'react'
import '../styles/ProductCard.css'
import { Link } from 'react-router-dom';
import { CartUpdater } from '../context/CartContext';

function ProductCard(props) {
    let {id, name, price, image, rating} = props.product;
    const addToCart = React.useContext(CartUpdater);
  return (
    <div className="product">
        <Link to={`/product/${id}`}>
            <img className='product_img'
                alt={name}
                src={image}
            />
            <div className="produt_info">
                
                    <h2>{name}</h2>
                
                
                <div className="product__rating">
                    {
                        Array(rating).fill()
                            .map((key) => (
                                <p className='stars'>*</p>
                            ))
                    }
                </div>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            
            </Link>
            <button onClick={() => addToCart(props.product)}>Add to basket </button>
            </div>
            
  )
}

export default ProductCard