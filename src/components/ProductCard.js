import "./ProductCard.css";

const ProductCard = ({ product }) => {
  //console.log(product)
  return (
    <>
      <div className="product-card">
        <div className="img-wrapper">
          <img className="product-img" src={product.image} alt="" />
        </div>
        <h3>{product.title}</h3>
        <p className="price">CHF {product.price}</p>
        <div className="btn-wrapper">
          <button className="add-cart-btn"> Add to Cart </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
