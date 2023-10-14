import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [shopState, setShopState] = useState({});

  return <ShopContext.Provider value={{ shopState, setShopState }}>{children}</ShopContext.Provider>;
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ShopContext, ShopContextProvider };
