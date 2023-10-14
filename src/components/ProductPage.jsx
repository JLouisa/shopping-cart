import PropTypes from "prop-types";

const ProductPage = (product) => {
  return (
    <>
      <p>This is the product page</p>
      <div>{product.title}</div>
      <div>{product.price}</div>
    </>
  );
};

ProductPage.propTypes = {
  product: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default ProductPage;
