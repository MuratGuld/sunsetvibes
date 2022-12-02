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
    // console.log(products);
    updateProductsArray(products);
  }

  async function filterByWord(filterText) {
    const res = await fetch(
      `https://sunsetvibes.onrender.com/products?title=${filterText}`
    );
    const products = await res.json();
    console.log(products.filteredProduct);
    updateProductsArray(products.filteredProduct);
  }

  function getFilterWord(e) {
    e.preventDefault();
    const filterInput = document.querySelector("#filter-input");
    const filterText = filterInput.value;

    filterByWord(filterText);
  }

  return (
    <>
      <header>
        <div className="logo">
          <img src="images/logo.png" alt="logo" />
        </div>
      </header>
      <main>
        <form>
          <input type="search" id="filter-input"></input>
          <button onFocusCapture={getFilterWord}>Search</button>
        </form>
        <div>
          <h4>Category</h4>
          <div>
            <a href="">Men's Clothing</a>
            <a href="">Women's Clothing</a>
            <a href="">Jewelery</a>
          </div>
        </div>
        <div className="product-container">
          {productsArray != undefined &&
            productsArray.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
