import React from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
function Cart() {
  const products = React.useContext(CartContext);
  return (products.length > 0 ) ? (
    <div>
      <h1>Cart </h1>
      {/* add remove from cart button */}
      {/* store the cart in cookies/cache */}
      {products.map(product => (<CartItem product={product}/>))}
    </div>
  ) :(
    <div>
      <h1>Cart</h1>
      <h2> Your Cart is Empty </h2>
      {/*add a button to Send them back to home page */}
      <Link to={'/'}><button>Back to Home</button></Link>
    </div>
  )
}

export default Cart