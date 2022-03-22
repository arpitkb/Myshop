import React from "react";
import "../styles/ProductCard.css";
import { Link } from "react-router-dom";
import { CartUpdater } from "../context/CartContext";
import { Button, Card } from "react-bootstrap";

function ProductCard(props) {
  let { id, name, price, image, rating } = props.product;
  const addToCart = React.useContext(CartUpdater);
  return (
    <>
      <Card style={{ width: "18rem" }} className='rounded shadow border-0'>
        <Card.Img variant='top' src={image} alt={name}></Card.Img>
        <Card.Body>
          <Link style={{ textDecoration: "none" }} to={`/product/${id}`}>
            <div className='produt_info'>
              <h2>{name}</h2>

              <div>
                {Array(rating)
                  .fill()
                  .map((key) => (
                    <i className='fas fa-star'></i>
                  ))}
              </div>
              <p>
                <small>$</small>
                <strong>{price}</strong>
              </p>
            </div>
          </Link>
          <div className='d-grid'>
            <Button onClick={() => addToCart(props.product)}>
              Add to basket{" "}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;
