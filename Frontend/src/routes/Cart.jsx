import React from 'react'
import { CartContext } from '../context/CartContext'
function Cart() {
  const products = React.useContext(CartContext);
  console.log(products)
  return (
    <div>
      <h1>Cart </h1>
      {products.map(product => (<h2> {product.name}</h2>))}
    </div>
  )
}

export default Cart