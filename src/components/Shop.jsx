import Products from "./Product";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const [products, addProductToCart] = useOutletContext();
  console.log(products);

  if (products.length === 0) return "loading...";
  return (
    <>
      <main>
        <Products products={products} addProductToCart={addProductToCart} />
      </main>
    </>
  );
};

Shop.propTypes = {
  products: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Shop;
