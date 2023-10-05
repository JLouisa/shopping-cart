import ShoppingCart from "./ShoppingCart";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav>
      <h1>Shopping Cart</h1>
      <div className="navListItems">
        <Link to="home">
          <span>Home</span>
        </Link>
        <Link to="shop">
          <span>Shop</span>
        </Link>
        <ShoppingCart />
      </div>
    </nav>
  );
};

export default NavigationBar;
