import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "../App";
import Shop from "./Shop.jsx";
import Home from "./Home.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import quantityAction from "./quantityAction.js";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/shop", element: <Shop />, action: quantityAction },
        { path: "/shopping-cart", element: <ShoppingCart /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export { Router };
