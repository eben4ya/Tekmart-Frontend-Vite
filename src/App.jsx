import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/AllPage/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutPage from "./components/AboutPage/AboutPage";
import OrderPage from "./components/OrderPage/OrderPage";
import ProductPage from "./components/ProductPage/ProductPage";
import Footer from './components/OrderPage/Footer';
import RegisterLogin from "./components/RegisterLogin/RegisterLogin";
import WarningBanner from "./components/OrderPage/WarningBanner"; 
import AddButton from "./components/OrderPage/AddButton";

// Used for testing
import Test from "./test/Test"; 



function App() {
  const handleFloatingButtonClick = () => {
    alert("Oke!"); 
    // next stepnya 
  };
  const [showBanner, setShowBanner] = useState(false);
  const handleShowBanner = () => {
    setShowBanner(!showBanner);
  };
  return (
    <Router>
      <Navbar />
      {/* {showBanner && <WarningBanner />}  */}
      {/* uncomment kalau mau coba banner (gatau buatnya gmn lbh modular) */}
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
          {/* testing route */}
          <Route path="/test" element={<Test />} />
        </Routes>
      </main>
      <Footer />
      <AddButton onClick={handleFloatingButtonClick} label="Add More Items" /> 
    </Router>
  );
}

export default App
