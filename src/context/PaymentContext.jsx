// ! this payment context is not used in the project, still using fetch payment in order context

import { createContext, useState, useEffect } from "react";

export const PaymentContext = createContext();

// eslint-disable-next-line react/prop-types
export const PaymentProvider = ({ children }) => {
  const [allPayments, setAllPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_PAYMENT}`);
        if (response.ok) {
          const payments = await response.json();
          setAllPayments(payments);
          alert(JSON.stringify(payments));
        } else {
          console.error("Failed to fetch payments");
        }
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };
    fetchPayments();
  }, []);

  return (
    <PaymentContext.Provider
      value={{
        allPayments,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
