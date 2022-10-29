import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'
import { LoginContext, LogoutContext } from '../context/UserContext'
import data from '../data'
function UserButton() {
  const products = React.useContext(CartContext);
  const user = React.useContext(UserContext);
  const login = React.useContext(LoginContext);
  const logout = React.useContext(LogoutContext);

  // console.log(user);
  // console.log(data.users.filter(u=>u.id === user.id));
  return (
    <div>
        <p>{data.users.filter(u => u.id === user?.id)[0]?.username}</p>
        {user ? <button onClick={()=>logout()}>Logout</button> : <Link to='/login'><button onClick={()=>login(user)}>Login</button></Link>}
        <Link to='/cart'><button>Cart</button></Link>
        <p>{products.length}</p>
    </div>
  )
}

export default UserButton