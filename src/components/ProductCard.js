import "./ProductCard.css"

const ProductCard = ({product}) => {
    console.log(product)
    return (
        <div className="product-card">
          <h3>{product.title}</h3>
          <img src={product.image} alt=""/>
          <p>CHF {product.price}</p>
          <button> Buy </button>
        </div>
    )
}


export default ProductCard;
