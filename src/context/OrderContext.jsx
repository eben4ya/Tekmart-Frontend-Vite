import { v4 as uuidv4 } from "uuid";

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

  const generateOrderId = () => {
    const id = `TX-${uuidv4}`;
    return id;
  };

  return (
    <OrderContext.Provider
      value={{
        cart,
        setCart,
        showNotification,
        setShowNotification,
        generateOrderId,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
