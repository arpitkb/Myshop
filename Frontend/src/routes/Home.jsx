import React from "react";
import ProductCard from "../components/ProductCard";
import data from "../data.js";
import '../styles/Home.css';
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="products">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
