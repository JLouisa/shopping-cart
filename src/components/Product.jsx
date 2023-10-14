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
  const productPriceFunc = (price) => {
    const newPrice = Number(price).toFixed(2);
    console.log(newPrice);
    return newPrice;
  };

  return (
    <>
      {products.map((product) => {
        return (
          <div className="productContainer" key={product.id}>
            <div className="product">
              <Link
                to="/ProductPage"
                onClick={() => {
                  onClickHandler(product);
                }}
              >
                <img src={product.image} alt="" className="pageImg"></img>
              </Link>
            </div>
            <div className="productInfo">
              <p>{productTitleLength(product.title)}</p>
              <p className="productPrice">{`€ ${productPriceFunc(product.price)}`}</p>
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
