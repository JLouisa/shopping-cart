import PropTypes from "prop-types";

const Products = ({ products }) => {
  return (
    <div className="productContainer">
      <img src={products.image} alt="" />
      <div>
        <p>{products.title}</p>
        <p>{`€${products.price}`}</p>
      </div>
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Products;
