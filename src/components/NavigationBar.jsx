import ShoppingCart from "./ShoppingCart";
import "../styles/NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <nav>
      <h1>Shopping Cart</h1>
      <div className="navListItems">
        <a href="">
          <span>Home</span>
        </a>
        <a href="">
          <span>Shop</span>
        </a>
        <ShoppingCart />
      </div>
    </nav>
  );
};

export default NavigationBar;
