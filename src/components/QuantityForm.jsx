import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const QuantityForm = ({ product, addProductToCart }) => {
  const [count, setCount] = useState(1);
  const [theID, setID] = useState(product.id);

  useEffect(() => {
    setID(product.id);
  }, [product]);

  const handleDecrement = () => {
    let x = count;
    x -= 1;
    if (x <= 1) x = 1;
    setCount(x);
  };

  const handleIncrement = () => {
    let x = count;
    setCount((x += 1));
  };

  const handleInputChange = (event, reset) => {
    if (reset === undefined) {
      const newValue = parseInt(event.target.value, 10); // Ensure it's a number
      if (!isNaN(newValue)) {
        setCount(newValue);
      }
    } else {
      console.log("reset");
    }
  };

  const afterSubmitForm = (e) => {
    e.preventDefault();
    const newCount = count;
    addProductToCart(product, newCount);
    setCount(1);
  };

  return (
    <>
      <div className="quantityDiv">
        <form onSubmit={afterSubmitForm} className="theForm">
          <div>
            <Button theType="button" text="<" theClass="btn3" onClick={handleDecrement} />
            <label>
              <input
                type="number"
                name="quantityNum"
                className="no-spinners"
                value={count}
                onChange={handleInputChange}
              />
            </label>
            <input type="hidden" name="id" value={theID} />
            <Button theType="button" text=">" theClass="btn3" onClick={handleIncrement} />
          </div>
          <Button theType="submit" text="Add to Cart" theClass="btn5" />
        </form>
      </div>
    </>
  );
};

QuantityForm.propTypes = {
  product: PropTypes.object,
  addProductToCart: PropTypes.func,
};

export { QuantityForm };
