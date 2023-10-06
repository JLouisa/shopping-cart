import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { App } from "../App";
import Shop from "./Shop.jsx";
import Home from "./Home.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import quantityAction from "./quantityAction.js";
import Checkout from "./Checkout";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <Navigate to="/home" /> },
        { path: "/home", element: <Home /> },
        { path: "/shop", element: <Shop />, action: quantityAction },
        { path: "/shopping-cart", element: <ShoppingCart /> },
        { path: "/checkout", element: <Checkout /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export { Router };
