import coffeeImage from "../../assets/landingpage.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const { isLoggedIn, handleLogout, user } = useContext(AuthContext);
  const location = useLocation();
  return (
    <section
      className="relative flex flex-col justify-center items-center text-center h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${coffeeImage})`,
      }}
    >
      <div className=" inset-0 bg-black opacity-5"></div>
      <div className="relative z-10 max-w-max mx-auto text-white">
        <h1 className="text-8xl md:text-8xl font-bold mb-4 font-poppins">
          Tired of <span className="text-yellow "> Queues?</span> <br /> We sure
          are!
        </h1>
        <p className="text-lg md:text-xl mb-6 font-inter leading-3 font-medium">
          That is the exact reason we are doing this! See for yourself,
          <br /> experience, interact, and explore the goodness of the time you{" "}
          <br /> just saved by ordering with this website.
        </p>
        <button 
          // onClick={handleShowBanner} //nyoba2
          className="bg-white font-poppins font-bold text-black py-4 px-5 rounded-2xl hover:bg-yellow active:bg-yellow active:text-white text-2xl shadow-2xl stroke-zinc-200 stroke-2">
          {isLoggedIn ? (
              <a href="/products" >
                Get Started Now
              </a>
            ) : (
              <a href="/login">Get Started Now</a>
            )}
        </button>
      </div>
    </section>
  );
};

export default Hero;
