import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/AllPage/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutPage from "./components/AboutUsPage/AboutPage";
import OrderPage from "./components/OrderPage/OrderPage";
import ProductPage from "./components/ProductsPage/ProductPage";
import Footer from "./components/AllPage/Footer";
import RegisterLogin from "./components/RegisterLogin/RegisterLogin";
import FloatingUniqueCodeIcon from "./components/AllPage/FloatingUniqueCodeIcon";

// Used for testing
// import Test from "./test/Test";
import Orders from "./components/AdminPage/Orders";
import PaymentHistory from "./components/AdminPage/PaymentHistory";
import Dashboard from "./components/AdminPage/Dashboard";
import ErrorOrder from "./components/OrderPage/ErrorOrder";
import ErrorLogin from "./components/OrderPage/ErrorLogin";
import Products from "./components/AdminPage/Products";

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Navbar />
      <main className="flex flex-col items-center w-screen h-full">
        <Routes>
          <Route
            path="/"
            element={user.isAdmin ? <Dashboard /> : <LandingPage />}
          />
          {/* route to /about */}
          <Route path="/about" element={<AboutPage />} />
          {/* route to /order */}
          <Route path="/order" element={<OrderPage />} />
          {/* route to /products */}
          <Route path="/products" element={<ProductPage />} />
          {/* route to /login */}
          <Route path="/login" element={<RegisterLogin type="login" />} />
          {/* route to /register */}
          <Route path="/register" element={<RegisterLogin type="register" />} />
          {/* route to admin orders */}
          <Route path="/admin/orders" element={<Orders />} />
          {/* route to admin products */}
          <Route path="/admin/products" element={<Products />} />
          {/* route to admin payment history */}
          <Route path="/admin/paymenthistory" element={<PaymentHistory />} />
          {/* testing route */}
          {/* <Route path="/test" element={<Test />} /> */}
          {/* route to error bcoz no item ordered yet*/}
          <Route path="/order/errorNoItem" element={<ErrorOrder />} />
          {/* route to error bcoz not logged in yet */}
          <Route path="/order/errorNotLoggedInYet" element={<ErrorLogin />} />
        </Routes>
      </main>
      {user.isAdmin === false && <FloatingUniqueCodeIcon />}
      <Footer />
    </Router>
  );
}

export default App;
