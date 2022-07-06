import React, { useState } from "react";
import { createContext } from "react";

export const ShopCart = createContext();

const Context = ({ children }) => {
  const [scart, setScart] = useState([]);
  console.log(scart)

  return (
    <ShopCart.Provider value={{ scart, setScart }}>
      {children}
    </ShopCart.Provider>
  );
};

export default Context;
