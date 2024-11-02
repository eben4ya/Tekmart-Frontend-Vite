import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/AllPage/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="flex flex-col justify-center items-center w-screen h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* route to /about */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* route to /order */}
          {/* <Route path="/order" element={<Order />} /> */}
          {/* route to /products */}
          {/* <Route path="/products" element={<Products />} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
