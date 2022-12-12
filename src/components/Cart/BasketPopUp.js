import "./BasketPopUp.css";
import { Link } from "react-router-dom";
import { Context } from "../CardContext";
import { useContext } from "react";

const BasketPopUp = ({ allProductsArray, updateShowCart }) => {
  const [cart] = useContext(Context);

  let content = null;
  if (cart.length === 0) {
    content = (
      <>
        <img src="images/empty-cart-icon.png" width="300px" alt="emptycart" />
        <div>
          <p>Your cart is empty</p>
        </div>
      </>
    );
  } else {
    let products = cart.map((id, index) => {
      return allProductsArray.find((product) => product.id === id);
    });
    content = products.map((product, index) => (
      <div key={index}>
        <p>{product.title}</p>
        <img src={product.image} width="20" alt="" />
      </div>
    ));
    content.push(
      <div>
        <Link to={`/checkout`}>Checkout</Link>
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
