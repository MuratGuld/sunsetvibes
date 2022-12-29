import "./BasketPopUp.css";
// import { Link } from "react-router-dom";
import { Context } from "../CardContext";
import { useContext, useState } from "react";

const BasketPopUp = ({ allProductsArray, updateShowCart }) => {
  const [cart, updateCart] = useContext(Context);
  const [orderState, setOrderState] = useState(false);

  function handleOrder() {
    setOrderState(true);
    setTimeout(() => {
      updateShowCart(false);
      updateCart([]);
    }, 2000);
  }

  let content = null;
  if (cart.length === 0) {
    content = (
      <div className="content-empty">
        <div>
          <img src="images/empty-cart-icon.png" width="300px" alt="emptycart" />
        </div>
        <div className="text-empty">
          <p>Ooops!</p>
          <p>Your cart is empty</p>
        </div>
      </div>
    );
  } else {
    let products = cart.map((id, index) => {
      return allProductsArray.find((product) => product.id === id);
    });
    content = products.map((product, index) => (
      <div key={index} className="content-div">
        <div>
          <img src={product.image} width="50" alt="" />
          <p>{product.title}</p>
        </div>
        <p>CHF {product.price}</p>
      </div>
    ));
    content.push(
      <div className="order-container">
        <div className="order-display">
          Order Total:
          <p>
            CHF{" "}
            {products
              .map((product) => product.price)
              .reduce((num, sum) => num + sum)
              .toFixed(2)}
          </p>
        </div>
        <div>
          <button onClick={handleOrder} className="btn">
            Order
          </button>
        </div>
        {orderState ? (
          <p className="info-text">Your order has been placed!</p>
        ) : null}
      </div>
    );
  }

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span onClick={() => updateShowCart(false)} className="close">
          &times;
        </span>
        <div className="col">
          <h3>Sunset Vibes Cart</h3>
          {content}
        </div>
      </div>
    </div>
  );
};

export default BasketPopUp;
