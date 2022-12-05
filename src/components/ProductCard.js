import "./ProductCard.css"

const ProductCard = ({product}) => {
    //console.log(product)
    return (
        <div className="product-card">
          <h3>{product.title}</h3>
          <img src={product.image} alt=""/>
          <p className="price">CHF {product.price}</p>
          <p><button> Add to Cart </button></p>
        </div>
    )
}


export default ProductCard;
