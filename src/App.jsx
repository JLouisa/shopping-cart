import { useState, useEffect } from "react";
import Footer from "./components/Footer.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import getData from "./components/getData.jsx";
import { Outlet } from "react-router-dom";
import "./styles/App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log("cart");
  console.log(cart);

  useEffect(() => {
    getData().then((res) => setProducts(res));
  }, []);

  class CartItem {
    constructor(id, quantity, price) {
      this.id = id;
      this.quantity = quantity;
      this.price = price;
      this.sum = this.price * quantity;
    }
  }

  const createCartItem = (arr, item) => {
    const findItem = arr.find(({ id }) => id === item.id);
    if (findItem === undefined || arr.length === 0) {
      const newItem = new CartItem(item.id, 1, item.price);
      setCart([...arr, newItem]);
      return;
    }
    if (findItem !== undefined) {
      findItem.quantity += 1;
      setCart(arr);
    }
  };

  const addProductToCart = (item) => {
    const newCart = JSON.parse(JSON.stringify(cart));
    const theItem = Object.assign({}, item);
    createCartItem(newCart, theItem);
  };

  return (
    <>
      <NavigationBar />
      <Outlet context={[products, addProductToCart]} />
      <Footer />
    </>
  );
}

export { App };
