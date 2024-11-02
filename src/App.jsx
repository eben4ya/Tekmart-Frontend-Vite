
import './App.css'
import Hero from './components/LandingPage/Hero'
import Navbar from './components/LandingPage/Navbar'
import OrderHeading from './components/OrderPage/OrderHeading.jsx';
import Footer from './components/OrderPage/Footer';

function App() {

  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen">
     
     <Navbar />
     <OrderHeading />
     <Hero />
     <Footer />
    </main>
  )
}

export default App
