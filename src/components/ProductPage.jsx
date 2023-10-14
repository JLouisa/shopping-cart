import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "./ShopContextProvider.jsx";
import { QuantityForm } from "./QuantityForm";
import { Link } from "react-router-dom";
import Button from "./Button";

const ProductPage = ({ addProductToCart }) => {
  const { shopState } = useContext(ShopContext);
  console.log(shopState);

  const capitalLetter = (word) => {
    const capital = word[0].toUpperCase();
    return capital + word.slice(1);
  };
  return (
    <>
      <div className="pageContainer">
        <div className="pageWrapper">
          <div className="pageImgDiv">
            <img src={shopState.image} alt="product image" className="pageImg" />
          </div>
          <div className="pageInfo">
            <p className="productPrice">{shopState.title}</p>
            <p>Category: {capitalLetter(shopState.category)}</p>
            <p>{capitalLetter(shopState.description)}</p>
            <p className="productPrice">€ {shopState.price}</p>
            <QuantityForm product={shopState} addProductToCart={addProductToCart} />
          </div>
        </div>
      </div>
      <div className="returnBtn">
        <Link to="/shop">
          <Button text="Continue Shopping" />
        </Link>
        <Link to="/shopping-cart">
          <Button text="Shopping Cart" />
        </Link>
      </div>
    </>
  );
};

ProductPage.propTypes = {
  addProductToCart: PropTypes.func,
};

export default ProductPage;
