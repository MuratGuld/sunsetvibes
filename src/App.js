// import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  const [productsArray, updateProductsArray] = useState([]);

  useEffect(() => {
    requestProduct();
  }, []);

  async function requestProduct() {
    const res = await fetch(`https://sunsetvibes.onrender.com/data.json`);
    const products = await res.json();
    console.log(products);
    updateProductsArray(products);
  }
  return (
    <>
      <header>
        <div className="logo">
          <img src="images/logo.png" alt="logo" />
        </div>
      </header>
      <div className="product-container">
        {productsArray.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default App;
