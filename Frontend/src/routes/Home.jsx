import React from 'react'
import ProductCard from '../components/ProductCard'
import data from '../data.js'
function Home() {
  return (
    <div><h1>Home Page</h1>
        {data.products.map(product => <ProductCard key={product.id} product={product}/>)}
    </div>

  )
}

export default Home