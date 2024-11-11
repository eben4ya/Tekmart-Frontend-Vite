import coffeeImage from "../../assets/landingpage.png";

const RegisterLogin = () => {
  return (
    <section
      className="relative flex flex-col justify-center items-center text-center h-screen w-full bg-cover bg-center "
      style={{
        backgroundImage: `url(${coffeeImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 max-w-lg mx-auto text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">
          One Step Closer to <span className="text-yellow-400">Not Queueing!</span>
        </h1>
        <div className="flex flex-col gap-4 items-center w-full">
          <div className="flex items-center w-full bg-white rounded-full px-4 py-3 text-black">
            <span className="mr-3 text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12A4 4 0 118 12a4 4 0 018 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v6m4-3H8" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Insert Phone Number or Email Here"
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex items-center w-full bg-white rounded-full px-4 py-3 text-black">
            <span className="mr-3 text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zm0 2c-3.31 0-6 2.69-6 6v1h12v-1c0-3.31-2.69-6-6-6z" />
              </svg>
            </span>
            <input
              type="password"
              placeholder="Insert Password Here"
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
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
