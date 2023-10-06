import PropTypes from "prop-types";
import { QuantityForm } from "./QuantityForm";

const Products = ({ products, addProductToCart }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <div className="productContainer" key={product.id}>
            <img src={product.image} alt="" />
            <div>
              <p>{product.title}</p>
              <p>{`€${product.price}`}</p>
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
  products: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  addProductToCart: PropTypes.func,
};

export default Products;
