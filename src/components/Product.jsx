import PropTypes from "prop-types";
import { QuantityForm } from "./QuantityForm";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "./ShopContextProvider.jsx";

const Products = ({ products, addProductToCart }) => {
  const { setShopState } = useContext(ShopContext);

  const productTitleLength = (title) => {
    let newTitle = title;
    if (newTitle.length > 30) {
      return newTitle.substring(0, 30) + "...";
    }
    return newTitle;
  };
  const onClickHandler = (item) => {
    setShopState(item);
  };

  return (
    <>
      {products.map((product) => {
        return (
          <div className="productContainer" key={product.id}>
            <Link
              to="/ProductPage"
              onClick={() => {
                onClickHandler(product);
              }}
            >
              <div className="product">
                <img src={product.image} alt="" />
              </div>
            </Link>
            <div className="productInfo">
              <p>{productTitleLength(product.title)}</p>
              <p className="productPrice">{`€${product.price}`}</p>
              <div>
                <QuantityForm product={product} addProductToCart={addProductToCart} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

Products.propTypes = {
  products: PropTypes.array,
  addProductToCart: PropTypes.func,
};

export default Products;
