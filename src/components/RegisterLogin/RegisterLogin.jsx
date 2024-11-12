import coffeeImage from "../../assets/landingpage.png";
import Input from "./Input";

// eslint-disable-next-line react/prop-types
const RegisterLogin = ({ type = "" }) => {
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
        <div className="flex flex-row gap-[0.958vw] w-fit placeholder-black text-[1.4vw] focus:outline-none mx-auto mt-[1.458vw]">
          {type === "login" && (
            <button className="bg-white font-poppins font-bold text-black px-[1.5625vw] py-[0.833vw] rounded-full hover:bg-yellow active:bg-yellow active:text-white shadow-xl">
              Login
            </button>
          )}
          <button className="bg-black font-poppins font-bold text-white px-[1.5625vw] py-[0.833vw] rounded-full hover:bg-yellow hover:text-black active:bg-yellow active:text-white">
           {type === "login" ? "Sign Up First" : "Register Now!"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegisterLogin;
