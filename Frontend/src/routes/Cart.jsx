import React from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
function Cart() {
  const products = React.useContext(CartContext);
  return products.length > 0 ? (
    <Container>
      <h1 className='my-4'>Cart </h1>
      {/* add remove from cart button */}
      {/* store the cart in cookies/cache */}
      {products.map((product) => (
        <CartItem product={product} />
      ))}
    </Container>
  ) : (
    <Container>
      <h1 className='my-4'>Cart </h1>
      <h2> Your Cart is Empty </h2>
      {/*add a button to Send them back to home page */}
      <Link to={"/"}>
        <Button className='btn-primary'>Back to home</Button>
      </Link>
    </Container>
  );
}

export default Cart;
