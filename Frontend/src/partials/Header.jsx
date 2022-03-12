import React from 'react'
import UserButton from './UserButton'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
function Header() {
  return (
    <div className='navbar'>
        <Link to='/'>
            <h2>MyShop</h2>
        </Link>
        <div className="search">
            <input type="text" placeholder='Search for products'/>
            <button>Search</button>
        </div>
        <UserButton/>
    </div>
  )
}

export default Header