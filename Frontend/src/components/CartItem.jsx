import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { CartRemover } from "../context/CartContext";
function CartItem(props) {
  const { name, price, image, rating, quantity } = props.product;
  const removeFromCart = React.useContext(CartRemover);
  return quantity > 0 ? (
    <>
      <Card style={{ width: "45rem" }} className='rounded shadow border-0 my-5'>
        <Card.Body>
          <Row>
            <Col md={6}>
              <div className='produt_info'>
                <h2>{name}</h2>
                <p className='product__price'>
                  <small>$</small>
                  <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                  {Array(rating)
                    .fill()
                    .map(() => (
                      <i className='fas fa-star'></i>
                    ))}
                </div>
                <p>Quantity: {quantity}</p>
              </div>
              <div className='d-grid'>
                <Button
                  className='btn-danger'
                  onClick={() => removeFromCart(props.product)}
                >
                  Remove from cart{" "}
                </Button>
              </div>
            </Col>
            <Col md={6} className='d-flex'>
              <img className='ms-auto' src={image} alt={name} />
              {/* <Card.Img
                className='m-4'
                variant='down'
                src={image}
                alt={name}
              ></Card.Img> */}
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* <div className='product'>
        <div className='produt_info'>
          <h2>{name}</h2>
          <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='product__rating'>
            {Array(rating)
              .fill()
              .map(() => (
                <p>*</p>
              ))}
          </div>
          <p>Quantity: {quantity}</p>
        </div>
        <img className='product_img' alt={name} src={image} />
        <button onClick={() => removeFromCart(props.product)}>
          Remove from cart{" "}
        </button>
      </div> */}
    </>
  ) : null;
}

export default CartItem;
