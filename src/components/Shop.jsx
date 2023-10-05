import Products from "./Product";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const [products, addProductToCart] = useOutletContext();

  if (products.length === 0) return "loading...";
  return (
    <>
      <section className="shopSection">
        <Products products={products} addProductToCart={addProductToCart} />
      </section>
    </>
  );
};

Shop.propTypes = {
  products: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Shop;
