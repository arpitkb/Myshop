import React from 'react'
import UserButton from './UserButton'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header() {
  const [search, setSearch] = React.useState('')
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className='navbar'>
        <Link to='/'>
            <h2 className='name'>MyShop</h2>
        </Link>
        <div className="search">
            <input type="text" placeholder='Search for products' className='search_input' onChange={handleChange}/>
            <Link to={`/search/${search}`}><button className='search_button'><i className="fa fa-search" aria-hidden="true"></i></button></Link>
        </div>
        <UserButton/>
    </div>
  )
}

export default Header