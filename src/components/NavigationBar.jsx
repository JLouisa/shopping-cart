import ShoppingCartIMG from "./ShoppingCartIMG";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav>
      <div className="navWrapper">
        <h1>The Shopping Center</h1>
        <div className="navListItems">
          <Link to="/home">
            <span>Home</span>
          </Link>
          <Link to="/shop">
            <span>Shop</span>
          </Link>
          <Link to="shopping-cart">
            <ShoppingCartIMG />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
