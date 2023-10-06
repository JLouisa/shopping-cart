import PropTypes from "prop-types";
import Button from "./Button";

const ShoppingCartInfo = ({ products, adjustCartItem, cart, setCart }) => {
  console.log("cart");
  console.log(cart);

  const deleteProduct = (id) => {
    console.log("delete", id);
    const newArr = cart.filter((item) => item.id !== id);
    setCart(newArr);
  };

  const handleDecrement = (prod) => {
    let x = prod.quantity;
    x -= 1;
    if (x <= 1) x = 1;
    adjustCartItem(prod, x);
  };

  const handleIncrement = (prod) => {
    let x = prod.quantity;
    x += 1;
    adjustCartItem(prod, x);
  };

  if (cart.length === 0) return "You have no item in your shopping cart";

  return (
    <>
      {cart.map((product) => {
        const productCart = products.find(({ id }) => id === product.id);
        return (
          <div key={product.id} className="cartDiv">
            <div className="cartImg">
              <img src={productCart.image} />
            </div>
            <p>{productCart.title}</p>
            <div>
              <Button
                theType="button"
                text="<"
                theClass="delBtn"
                onClick={() => {
                  handleDecrement(product);
                }}
              />
              <span>{product.quantity}</span>
              <Button
                theType="button"
                text=">"
                theClass="delBtn"
                onClick={() => {
                  handleIncrement(product);
                }}
              />
            </div>
            <p>€ {product.quantity * product.price}</p>
            <div>
              <Button
                text="✖"
                theClass="delBtn"
                color="black"
                bgColor="red"
                onClick={() => {
                  deleteProduct(productCart.id);
                }}
              />
            </div>
          </div>
        );
      })}
      <div className="sumDiv">
        Total: €{" "}
        {cart
          .reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price * currentValue.quantity;
          }, 0)
          .toFixed(2)}
      </div>
    </>
  );
};

ShoppingCartInfo.propTypes = {
  products: PropTypes.array,
  addProductToCart: PropTypes.func,
  adjustCartItem: PropTypes.func,
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default ShoppingCartInfo;
