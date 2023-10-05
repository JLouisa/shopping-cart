import { useState } from "react";
import { Form } from "react-router-dom";

import Button from "./Button";

const QuantityForm = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    let x = count;
    x -= 1;
    if (x <= 0) x = 0;
    setCount(x);
  };

  const handleIncrement = () => {
    let x = count;
    setCount((x += 1));
  };

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value, 10); // Ensure it's a number
    if (!isNaN(newValue)) {
      setCount(newValue);
    }
  };
  return (
    <>
      <div className="quantityDiv">
        <Button text="<" theClass="btn3" onClick={handleDecrement} />
        <Form method="post" action="">
          <label>
            <input
              type="number"
              name="quantityNum"
              className="no-spinners"
              value={count}
              onChange={handleInputChange}
            />
          </label>
        </Form>
        <Button text=">" theClass="btn3" onClick={handleIncrement} />
      </div>
    </>
  );
};

export default QuantityForm;
