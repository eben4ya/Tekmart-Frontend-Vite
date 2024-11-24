import { createContext, useState } from "react";

export const OrderContext = createContext();

// eslint-disable-next-line react/prop-types
export const OrderProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  return (
    <OrderContext.Provider value={{ cart, setCart, showNotification, setShowNotification }}>
      {children}
    </OrderContext.Provider>
  );
};