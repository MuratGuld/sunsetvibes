import "./Cart.css";


const cartModal = ({ product, cart, updateCart }) => {
  //console.log(product)
  const addProductToCart = () => {
    console.log(cart)
    updateCart ([...cart, product.id])
    alert ("Product added to the cart")
  }
}

export default cartModal