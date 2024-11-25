import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/AllPage/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutPage from "./components/AboutPage/AboutPage";
import OrderPage from "./components/OrderPage/OrderPage";
import ProductPage from "./components/ProductPage/ProductPage";
import Footer from './components/OrderPage/Footer';
import RegisterLogin from "./components/RegisterLogin/RegisterLogin";
import ErrorOrder from "./components/OrderPage/ErrorOrder";
import ErrorLogin from "./components/OrderPage/ErrorLogin";
import Dashboard from "./components/AdminPage/Dashboard";

// Used for testing
import Test from "./test/Test"; 
import Orders from "./components/AdminPage/Orders";
import PaymentHistory from "./components/AdminPage/PaymentHistory";





function App() {
  return (
    <Router>
      <Navbar />
      <main className="flex flex-col items-center w-screen h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
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
          {/* route to admin Dashboard */}
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          {/* route to admin orders */}
          <Route path='/admin/orders' element={<Orders/>}/>
          {/* route to admin payment history */}
          <Route path="/admin/paymenthistory" element={<PaymentHistory/>}/>
          {/* testing route */}
          <Route path="/test" element={<Test />} />
          {/* route to error bcoz no item ordered yet*/}
          <Route path="/order/errorNoItem" element={<ErrorOrder/>}/>
          {/* route to error bcoz not logged in yet */}
          <Route path="/order/errorNotLoggedInYet" element={<ErrorLogin/>}/>
          
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App
