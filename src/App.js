// import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./App.css";
import FilterProduct from "./components/FilterProduct";
import ProductCard from "./components/ProductCard";

function App() {
  const [productsArray, updateProductsArray] = useState([]);
  const [category, setCategory] = useState({
    "men's clothing": false,
    "women's clothing": false,
  });

  useEffect(() => {
    requestProduct();
    console.log("called");
  }, []);

  useEffect(() => {
    filterProducts(category);
    console.log("changed");
  }, [category]);

  //----- get the product ----

  async function requestProduct() {
    const res = await fetch(`http://localhost:3002/data.json`);
    const products = await res.json();
    updateProductsArray(products);
  }

  // ---- filter product on input search ----
  async function filterByWord(key = "title", filterText) {
    const res = await fetch(
      `http://localhost:3002/products?${key}=${filterText}`
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

  // ---- filter product on checkbox ----
  function filterProducts(category) {
    if (Object.values(category).includes(true)) {
      console.log(category);
      const checkedValueIndex = Object.values(category).indexOf(true);
      filterByWord("category", Object.keys(category)[checkedValueIndex]);
      console.log(checkedValueIndex);
    }
    console.log("filterProducts");
  }

  // --- render components -----
  return (
    <>
      <header>
        <div className="cart-btn-container">
          <button className="toggle-cart-btn">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
        <div className="logo">
          <img src="images/logo.png" alt="logo" />
        </div>
      </header>
      <main>
        <div className="input_search">
          <input type="search" id="filter-input"></input>
          <button className="search-btn" onClick={getFilterWord}>
            Search
          </button>
        </div>
        <div className="flex-container">
          <div className="checkbox-wrapper">
            <FilterProduct
              setCategory={setCategory}
              category={category}
              filterProducts={filterProducts}
            />
          </div>

          <div className="product-container">
            {productsArray !== undefined &&
              productsArray.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </div>
        </div>
      </main>
      <footer>
        <div className="footer">
          <p>Copyright © 2022 Sunset Vibes </p>
        </div>
      </footer>
    </>
  );
}

export default App;
