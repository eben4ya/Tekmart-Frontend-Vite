import coffeeImage from "../../assets/landingpage.png";
import Input from "./Input";

const RegisterLogin = () => {
  return (
    <section
      className="relative flex flex-col justify-center items-center text-center h-screen w-full bg-cover bg-center "
      style={{
        backgroundImage: `url(${coffeeImage})`,
      }}
    >
      {/* dark background */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 max-w-[45.8vw] w-fit mx-auto text-white">
        <h1 className="text-[4.5vw] leading-none font-bold mb-[2.29vw] font-poppins">
          One Step Closer to <span className="text-yellow">Not Queueing!</span>
        </h1>
        <div className="flex flex-col gap-[1.458vw] items-center w-full">
          <Input type="username" />
          <Input type="password" />
        </div>
        <div className="flex gap-4 mt-6">
          <button className="bg-white font-poppins font-bold text-black py-2 px-8 rounded-full hover:bg-yellow-400 active:bg-yellow-500 active:text-white text-xl shadow-xl">
            Login
          </button>
          <button className="bg-transparent border-2 border-white font-poppins font-bold text-white py-2 px-8 rounded-full hover:bg-yellow-400 hover:text-black active:bg-yellow-500 text-xl">
            Sign Up First
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegisterLogin;