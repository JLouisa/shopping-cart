import Products from "./Product";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useOutletContext;
  return (
    <>
      <main>
        <Products products={products} />
      </main>
    </>
  );
};

Shop.propTypes = {
  products: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Shop;
