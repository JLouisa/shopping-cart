import { useState, useEffect } from "react";
import Footer from "./components/Footer.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import getData from "./components/getData.jsx";
import { Outlet } from "react-router-dom";
import "./styles/App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getData().then((res) => setProducts(res));
  }, []);

  class CartItem {
    constructor(id, quantity, price) {
      this.id = id;
      this.quantity = quantity;
      this.price = price;
    }
  }

  const deepCopy = (arr) => {
    const newArr = arr.map((item) => {
      return Object.assign({}, item);
    });
    console.log("deep Copy");
    console.log(newArr);
    return newArr;
  };

  const createCartItem = (arr, item, qt) => {
    const findItem = arr.find(({ id }) => id === item.id);
    if (findItem === undefined || arr.length === 0) {
      const newItem = new CartItem(item.id, qt === undefined ? 1 : qt, item.price);
      setCart([...arr, newItem]);
      return;
    }
    if (findItem !== undefined) {
      findItem.quantity += qt === undefined ? 1 : qt;
      setCart(arr);
    }
  };

  const addProductToCart = (item, qt) => {
    const newCart = JSON.parse(JSON.stringify(cart));
    const theItem = Object.assign({}, item);
    createCartItem(newCart, theItem, qt);
  };

  const adjustCartItem = (prod) => {
    console.log("prod");
    console.log(prod);
    const newCart = [...cart];
  };

  return (
    <>
      <NavigationBar />
      <main>
        <Outlet context={[products, addProductToCart, adjustCartItem, cart, setCart]} />
      </main>
      <Footer />
    </>
  );
}

export { App };
