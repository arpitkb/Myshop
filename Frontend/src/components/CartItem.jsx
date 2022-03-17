import React from 'react'
import { CartRemover } from '../context/CartContext';
function CartItem(props) {
    const {  name, price, image, rating, quantity } = props.product;
    const  removeFromCart  = React.useContext(CartRemover);
  return (
    quantity > 0 ? (
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
            <p>Quantity: {quantity}</p>
        </div>
        <img className='product_img'
            alt={name}
            src={image}
        />
        <button onClick={() => removeFromCart(props.product)}>Remove from cart </button>
    </div>
    ) : null
  )
}

export default CartItem