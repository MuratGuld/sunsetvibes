// import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./App.css";
import FilterProduct from "./components/FilterProduct";
import ProductCard from "./components/ProductCard";

function App() {
  const [productsArray, updateProductsArray] = useState([]);

  useEffect(() => {
    requestProduct();
  }, []);

  //----- get the product ----

  async function requestProduct() {
    const res = await fetch(`https://sunsetvibes.onrender.com/data.json`);
    const products = await res.json();
    updateProductsArray(products);
  }

  // ---- filter the product on input search ----
  async function filterByWord(filterText) {
    const res = await fetch(
      `https://sunsetvibes.onrender.com/products?title=${filterText}`
    );
    const products = await res.json();
    updateProductsArray(products.filteredProduct);
  }

  function getFilterWord(e) {
    e.preventDefault();
    const filterInput = document.querySelector("#filter-input");
    const filterText = filterInput.value;

    filterByWord(filterText);
  }

  
  
  // --- render -----
  return (
    <>
      <header>
        <div className="logo">
          <img src="images/logo.png" alt="logo" />
        </div>
      </header>
      <main>
        <div className="input_search">
          <input type="search" id="filter-input"></input>
          <button className="search-btn" onClick={getFilterWord}>Search</button>
        </div>
        <div>
          <h4>Category</h4>
          <div className="checkbox-wrapper">
            <FilterProduct />
          </div>
        </div>
        <div className="product-container">
          {productsArray !== undefined &&
            productsArray.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
