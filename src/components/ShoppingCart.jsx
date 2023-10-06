import Button from "./Button";
import ShoppingCartInfo from "./ShoppingCartInfo";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const [products, addProductToCart, adjustCartItem, cart, setCart] = useOutletContext();

  if (cart.length === 0) return "You have no item in your shopping cart";

  return (
    <>
      <section className="cartInfo">
        <ShoppingCartInfo products={products} adjustCartItem={adjustCartItem} cart={cart} setCart={setCart} />
        <Link to="/shop">
          <Button text="Continue Shopping" />
        </Link>
        <Link to="/checkout">
          <Button text="Checkout" />
        </Link>
      </section>
    </>
  );
};

export default ShoppingCart;
