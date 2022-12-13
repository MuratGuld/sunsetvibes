// import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./App.css";
import FilterProduct from "./components/FilterProduct";
import ProductCard from "./components/ProductCard";
import BasketPopUp from "./components/Cart/BasketPopUp";

// 1 function that fetches the data, and updates the state. Called once at page load
// and once when you search, with search query.
// 1 function that filters that list just before displaying the articls. It doesn
// need to change the state.

function App() {
  const [productsArray, updateProductsArray] = useState([]);
  const [allProductsArray, updateAllProductsArray] = useState([]);
  const [category, setCategory] = useState({
    "men's clothing": false,
    "women's clothing": false,
    jewelery: false,
    electonics: false,
  });

  const [showCart, updateShowCart] = useState(false);

  useEffect(() => {
    console.log("useefect at linke 20 wascalled");
    requestProduct();
  }, []);

  useEffect(() => {
    console.log("useEfffect at line 25 was called");
    filterProducts(category);
  });

  //----- get the product ----

  async function requestProduct() {
    let domain;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      domain = "http://localhost:3002";
    } else {
      domain = "https://sunsetvibes.onrender.com";
    }

    const res = await fetch(`${domain}/data.json`);
    const products = await res.json();
    updateProductsArray(products);
    updateAllProductsArray(products);
  }

  // ---- filter product on input search ----
  async function filterByWord(filterText) {
    const res = await fetch(
      `https://sunsetvibes.onrender.com/products?title=${filterText}`
    );
    const products = await res.json();
    updateProductsArray(products.filteredProduct);
    console.log("after fetch for search: ", products.filteredProduct);
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
      const checkedValueIndexes = [];
      Object.values(category).forEach((result, index) => {
        if (result) {
          checkedValueIndexes.push(index);
        }
      });

      const checkedCategories = checkedValueIndexes.map(
        (index) => Object.keys(category)[index]
      );
      console.log("2 update products array called from filter products", allProductsArray);
      updateProductsArray(
        allProductsArray.filter((product) =>
          checkedCategories.includes(product.category)
        )
      );
    } else {
      console.log("update products array called from filter products")
      updateProductsArray(allProductsArray);
    }
  }

  // --- render components -----
  return (
    <>
      <header>
        <div className="cart-btn-container">
          <button
            className="toggle-cart-btn"
            onClick={() => {
              console.log(showCart);
              updateShowCart(true);
            }}
          >
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
        <div className="logo">
          <img src="images/logo.png" alt="logo" />
        </div>
      </header>
      <main>
        {showCart ? (
          <BasketPopUp
            allProductsArray={allProductsArray}
            updateShowCart={updateShowCart}
          />
        ) : null}
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
