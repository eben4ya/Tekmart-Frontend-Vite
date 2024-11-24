import { createContext, useState, useEffect } from "react";

export const OrderContext = createContext();

// eslint-disable-next-line react/prop-types
export const OrderProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  const [showNotification, setShowNotification] = useState(false);

  return (
    <OrderContext.Provider
      value={{ cart, setCart, showNotification, setShowNotification }}
    >
      {children}
    </OrderContext.Provider>
  );
};
