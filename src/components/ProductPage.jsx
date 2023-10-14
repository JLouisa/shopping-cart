import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "./ShopContextProvider.jsx";
import { QuantityForm } from "./QuantityForm";

const ProductPage = ({ addProductToCart }) => {
  const { shopState } = useContext(ShopContext);
  console.log(shopState);
  return (
    <>
      <p>This is the product page</p>
      <div>{shopState.title}</div>
      <div>{shopState.price}</div>
      <QuantityForm product={shopState} addProductToCart={addProductToCart} />
    </>
  );
};

ProductPage.propTypes = {
  addProductToCart: PropTypes.func,
};

export default ProductPage;
