import PropTypes from "prop-types";
import Products from "./Product";

const MainSection = ({ products }) => {
  console.log(products);

  if (products.length === 0) return "Loading...";

  return (
    <main>
      <Products products={products} />
    </main>
  );
};

MainSection.propTypes = {
  products: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default MainSection;
