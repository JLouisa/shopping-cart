import ShoppingCartInfo from "./ShoppingCartInfo";
// import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

const ShoppingCart = () => {
  const [products, addProductToCart, adjustCartItem, cart, setCart] = useOutletContext();

  return (
    <>
      <section className="cartInofo">
        <ShoppingCartInfo products={products} adjustCartItem={adjustCartItem} cart={cart} setCart={setCart} />
      </section>
    </>
  );
};

// ShoppingCart.propTypes = {
//   products: PropTypes.object,
// };

export default ShoppingCart;
