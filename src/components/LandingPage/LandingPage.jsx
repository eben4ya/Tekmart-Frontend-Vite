import Hero from "./Hero";
import About from "./AboutUsCard"
import Products from "./ProductCategoriesCard";
import Order from "./HowToOrder"

const LandingPage = () => {
  return (
    <>
      {/* Hero component*/}
      <Hero />
      {/* About landing page  */}
      <About />
      {/* Products landing page */}
      <Products />
      {/* Order landing page */}
      <Order />
    </>
  );
};

export default LandingPage;
