import { createContext, useState } from "react";

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [shopState, setShopState] = useState({});

  return <ShopContext.Provider value={{ shopState, setShopState }}>{children}</ShopContext.Provider>;
};

export { ShopContext, ShopContextProvider };
