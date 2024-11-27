import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TooSmall from "./components/AllPage/TooSmall.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { OrderProvider } from "./context/OrderContext.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
// import { PaymentContext } from "./context/PaymentContext.jsx";

const RootComponent = () => {
  const [isLaptopSize, setIsLaptopSize] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptopSize(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StrictMode>
      <AuthProvider>
        <OrderProvider>
          <ProductProvider>
            {isLaptopSize ? <App /> : <TooSmall />}
          </ProductProvider>
        </OrderProvider>
      </AuthProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<RootComponent />);
