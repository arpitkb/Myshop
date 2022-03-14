import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
function UserButton() {
  const products = React.useContext(CartContext);
  return (
    <div>
        <p>User</p>
        <Link to='/cart'><button>Cart</button></Link>
        <p>{products.length}</p>
    </div>
  )
}

export default UserButton