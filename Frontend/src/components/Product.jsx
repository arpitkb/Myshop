import React from 'react'
import {useParams} from 'react-router-dom'
import Review from './Review';
import data from '../data';
import { useContext } from 'react';
import { CartUpdater } from '../context/CartContext';
function Product() {
  let {ProductId} = useParams();
  const addToCart = useContext(CartUpdater);  
  let allItem = data.products;
  // eslint-disable-next-line eqeqeq
  let currentItem = allItem.find(item => item.id == ProductId);
  return (currentItem) ? (
    <div>
      <h1>{currentItem.name}</h1>
      
      <img src={currentItem.image} alt="" srcset="" />
      <p className="product__price">
          <small>$</small>
          <strong>{currentItem.price}</strong>
      </p>
      <button onClick={() => {addToCart(currentItem)}}> Add to Basket</button>
      <p>{currentItem.description}</p>

      {currentItem.reviews.map(rev => {
        return <Review review={rev} />
      })}
    </div>
  ) : (
    <div>
      <h1>Product not found</h1>
    </div>
  )

  }

export default Product