import { useOutletContext } from "react-router-dom";

const Checkout = () => {
  const [products, addProductToCart, adjustCartItem, cart, setCart] = useOutletContext();

  return (
    <>
      <img src="https://media.giphy.com/media/dZdadd8KqjgsJGjMVp/giphy.gif" />
      <p className="checkoutTotal">
        Total: €{" "}
        {cart
          .reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price * currentValue.quantity;
          }, 0)
          .toFixed(2)}
      </p>
    </>
  );
};

export default Checkout;
