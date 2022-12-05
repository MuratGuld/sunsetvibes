import "./ProductCard.css"

const ProductCard = ({product}) => {
    //console.log(product)
    return (
        <div className="product-card">
          <h3>{product.title}</h3>
          <div className="img-wrapper"><img src={product.image} alt=""/></div>
          <p className="price">CHF {product.price}</p>
          <p className="cart-btn"><button> Add to Cart </button></p>
        </div>
    )
}


export default ProductCard;
