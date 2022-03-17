import React from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import data from '../data'
function Search() {
    const {ProductId} = useParams();
    console.log( "This is the id:" , ProductId);
    // const products = data.products.filter(product => product.name.toLowerCase().includes(SearchQuery.toLowerCase()))
  return ProductId ? (
    <div>
        <h1>Search results for: {ProductId}</h1>
        {
            // products.map(product => (
            //     <ProductCard key={product.id} product={product} />
            // ))
        }

    </div>
  ) : (
    <div>
        <h1>Search something to find something</h1>
    </div>
    )
}

export default Search