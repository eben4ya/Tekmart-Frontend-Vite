import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/AllPage/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutPage from "./components/AboutPage/AboutPage";
import OrderPage from "./components/OrderPage/OrderPage";
import Footer from './components/OrderPage/Footer';

// Used for testing
import Test from "./test/Test"; 
import RegisterLogin from "./components/RegisterLogin/RegisterLogin";

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
          {/* <Route path="/products" element={<Products />} /> */}
          {/* route to /login */}
          <Route path="/login" element={<RegisterLogin type="login" />} />
          {/* route to /register */}
          <Route path="/register" element={<RegisterLogin type="register" />} />
          {/* testing route */}
          <Route path="/test" element={<Test />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App
