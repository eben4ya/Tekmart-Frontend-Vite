import { v4 as uuidv4 } from "uuid";

import { createContext, useState, useEffect } from "react";

export const OrderContext = createContext();

// eslint-disable-next-line react/prop-types
export const OrderProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [orderId, setOrderId] = useState("");

  const [pendingOrders, setPendingOrders] = useState([]);
  const [confirmedOrders, setConfirmedOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/order");
        if (response.ok) {
          const orders = await response.json();
          setPendingOrders(
            orders.filter((order) => order.statusOrder === "pending")
          );
          setConfirmedOrders(
            orders.filter((order) => order.statusOrder === "Confirm")
          );
        } else {
          console.error("Failed to fetch orders");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [showNotification, setShowNotification] = useState(false);

  return (
    <OrderContext.Provider
      value={{
        cart,
        setCart,
        showNotification,
        setShowNotification,
        orderId,
        setOrderId,
        pendingOrders,
        confirmedOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
