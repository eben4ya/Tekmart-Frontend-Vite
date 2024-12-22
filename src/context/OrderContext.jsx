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
  const [readyOrders, setReadyOrders] = useState([]);
  const [confirmedOrders, setConfirmedOrders] = useState([]);

  // TODO: moved fetch payment function from  OrderContext.jsx to PaymentContext.jsx
  // temporary solution to fetch payments
  const [allPayments, setAllPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_PAYMENT}`);
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
        const response = await fetch(`${import.meta.env.VITE_API_ORDER}`);
        if (response.ok) {
          const orders = await response.json();
          setPendingOrders(
            orders.filter((order) => order.statusOrder === "Pending")
          );
          setReadyOrders(
            orders.filter((order) => order.statusOrder === "Ready to be Taken")
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
    const uniqueCode = prompt("Enter unique code to confirm order");
    if (!uniqueCode) {
      alert("Please enter unique code to confirm order");
      return;
    }
    if (
      uniqueCode.trim() ===
      pendingOrders.find((order) => order._id === orderId).uniqueCode
    ) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_ORDER}/${orderId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ statusOrder: "Confirm" }),
            credentials: "include",
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
    } else {
      alert("Invalid unique code");
    }
  };

  const [showUniqueCodeModal, setShowUniqueCodeModal] = useState(false);

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
        readyOrders,
        confirmedOrders,
        updateOrderStatus,
        allPayments,
        showUniqueCodeModal,
        setShowUniqueCodeModal,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
