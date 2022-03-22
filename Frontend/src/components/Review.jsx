import React from 'react'
import '../styles/Review.css'
function Review(props) {
    const {name, rating, comment} = props.review;
  return (
    <>
        <h4>{name}</h4>
        <div className="rating">
            {
                Array(rating).fill()
                    .map((key) => (
                        <p>*</p>
                    ))
            }
        </div>
        <p>
            {comment}
        </p>
    </>
  )
}

export default Review