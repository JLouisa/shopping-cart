import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { App } from "../App";
import Shop from "./Shop.jsx";
import Home from "./Home.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import quantityAction from "./quantityAction.js";
import Checkout from "./Checkout.jsx";
import ProductPage from "./ProductPage.jsx";
import { ShopContextProvider } from "./ShopContextProvider.jsx";
import { useState } from "react";

const Router = () => {
  const [cart, setCart] = useState([]);

  class CartItem {
    constructor(id, quantity, price) {
      this.id = id;
      this.quantity = quantity;
      this.price = price;
    }
  }

  const createCartItem = (arr, item, qt) => {
    const findItem = arr.find(({ id }) => id === item.id);
    if (findItem === undefined || arr.length === 0) {
      const newItem = new CartItem(item.id, qt === undefined ? 1 : qt, item.price.toFixed(2));
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ShopContextProvider>
          <App addProductToCart={addProductToCart} cart={cart} setCart={setCart} />
        </ShopContextProvider>
      ),
      children: [
        { path: "", element: <Navigate to="/home" /> },
        { path: "/home", element: <Home /> },
        { path: "/shop", element: <Shop />, action: quantityAction },
        { path: "/shopping-cart", element: <ShoppingCart /> },
        { path: "/checkout", element: <Checkout /> },
        { path: "/productpage", element: <ProductPage addProductToCart={addProductToCart} /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export { Router };
