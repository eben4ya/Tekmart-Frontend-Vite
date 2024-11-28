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

  // temporary solution to fetch payments
  const [allPayments, setAllPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch("https://tekmart-backend-kholil-as-projects.vercel.app/api/payment");
        if (response.ok) {
          const payments = await response.json();
          setAllPayments(payments);
          // alert(JSON.stringify(payments));  
        } else {
          console.error("Failed to fetch payments");
        }
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };
    fetchPayments();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("https://tekmart-backend-kholil-as-projects.vercel.app/api/order");
        if (response.ok) {
          const orders = await response.json();
          setPendingOrders(
            orders.filter((order) => order.statusOrder === "Pending")
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

  const updateOrderStatus = async (orderId) => {
    try {
      const response = await fetch(
        `https://tekmart-backend-kholil-as-projects.vercel.app/api/order/${orderId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ statusOrder: "Confirm" }),
        }
      );

      if (response.ok) {
        setPendingOrders((prev) =>
          prev.filter((order) => order._id !== orderId)
        );
        const updatedOrder = await response.json();
        setConfirmedOrders((prev) => [...prev, updatedOrder]);
      } else {
        console.error("Failed to update order status");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

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
        updateOrderStatus,
        allPayments,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
