import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "./ShopContextProvider.jsx";

const ProductPage = () => {
  const { shopState } = useContext(ShopContext);
  console.log(shopState);
  return (
    <>
      <p>This is the product page</p>
      <div>{shopState.title}</div>
      <div>{shopState.price}</div>
    </>
  );
};

ProductPage.propTypes = {
  product: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default ProductPage;
