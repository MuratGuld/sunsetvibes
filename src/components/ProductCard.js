import "./ProductCard.css";

const ProductCard = ({ product }) => {
  //console.log(product)
  return (
    <>
      <div className="product-card">
        <div class="flip-card-inner">
          <div className="img-wrapper flip-card-front">
            <img className="product-img" src={product.image} alt="" />
            <h3>{product.title}</h3>
            <p className="price">CHF {product.price}</p>
            <div className="btn-wrapper">
              <button className="add-cart-btn"> Add to Cart </button>
            </div>
          </div>
          <div class="flip-card-back">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
