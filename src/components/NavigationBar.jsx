import ShoppingCart from "./ShoppingCart";

const NavigationBar = () => {
  return (
    <nav>
      <div>
        <h1>Shopping Cart</h1>
        <a href="">
          <span>Home</span>
        </a>
        <a href="">
          <span>Shop</span>
        </a>
      </div>
      <ShoppingCart />
    </nav>
  );
};

export default NavigationBar;
