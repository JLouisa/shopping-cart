import { useState, useEffect } from "react";
import Footer from "./components/Footer.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import getData from "./components/getData.jsx";
import { Outlet } from "react-router-dom";
import "./styles/App.css";
import PropTypes from "prop-types";

function App({ addProductToCart, cart, setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData().then((res) => setProducts(res));
  }, []);

  const deepCopy = (arr) => {
    const newArr = arr.map((item) => {
      return Object.assign({}, item);
    });
    return newArr;
  };

  const adjustCartItem = (prod, qt) => {
    const newCart = deepCopy(cart);
    const foundprod = newCart.find(({ id }) => id === prod.id);
    foundprod.quantity = qt;
    setCart(newCart);
  };

  return (
    <>
      <NavigationBar />
      <div className="wrapper">
        <main>
          <Outlet context={[products, addProductToCart, adjustCartItem, cart, setCart]} />
        </main>
      </div>
      <Footer />
    </>
  );
}
App.propTypes = {
  addProductToCart: PropTypes.func,
  cart: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  setCart: PropTypes.func,
};

export { App };
