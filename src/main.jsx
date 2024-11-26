import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { OrderProvider } from "./context/OrderContext.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
// import { PaymentContext } from "./context/PaymentContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <OrderProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </OrderProvider>
    </AuthProvider>
  </StrictMode>
);
