import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { App } from "../App";
import Shop from "./Shop.jsx";
import Home from "./Home.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import quantityAction from "./quantityAction.js";
import Checkout from "./Checkout.jsx";
import ProductPage from "./ProductPage.jsx";
import { ShopContextProvider } from "./ShopContextProvider.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ShopContextProvider>
          <App />
        </ShopContextProvider>
      ),
      children: [
        { path: "", element: <Navigate to="/home" /> },
        { path: "/home", element: <Home /> },
        { path: "/shop", element: <Shop />, action: quantityAction },
        { path: "/shopping-cart", element: <ShoppingCart /> },
        { path: "/checkout", element: <Checkout /> },
        { path: "/productpage", element: <ProductPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export { Router };
