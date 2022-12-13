import { Link } from "react-router-dom";
import { Context } from "./CardContext";
import { useContext } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [cart] = useContext(Context);
  

  return (
    <div className="bg-body">
      <header>
        <div className="logo">
          <img src="images/logo.png" alt="logo" />
        </div>
      </header>
      <ul>
        {cart.map((id) => (
          <li>{id}</li>
        ))}
      </ul>
      <Link to={`/`}>Return to Main Page</Link>
    </div>
  );
};
export default Checkout;
