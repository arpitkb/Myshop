import React from "react";
import ProductCard from "../components/ProductCard";
import data from "../data.js";
import "../styles/Home.css";
import { Container } from "react-bootstrap";
function Home() {
  return (
    <Container>
      <h1 className='my-4'>Home Page</h1>

      <div className='products'>
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}

export default Home;
