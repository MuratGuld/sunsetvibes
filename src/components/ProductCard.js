import "./ProductCard.css";


const ProductCard = ({ product, cart, updateCart }) => {
  //console.log(product)
  const addProductToCart = () => {
    console.log(cart)
    updateCart ([...cart, product.id])
    alert ("Product added to the cart")
  }
  return (
    <>
      <div className="product-card">
        <div className="flip-card-inner">
          <div className="img-wrapper flip-card-front">
            <img className="product-img" src={product.image} alt="" />
            <h3>{product.title}</h3>
            <p className="price">CHF {product.price}</p>
            {/* <div className="btn-wrapper">
              <button className="add-cart-btn"> Add to Cart </button>
            </div> */}
          </div>
          <div className="flip-card-back">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="btn-wrapper">
              <button className="add-cart-btn" onClick={addProductToCart}> Add to Cart </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
