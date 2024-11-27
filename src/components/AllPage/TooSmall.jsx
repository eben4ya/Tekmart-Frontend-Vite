import { AiOutlineWarning } from "react-icons/ai";

const TooSmall = () => {
  return (
    <>
      {/* Warning for devices below xl (1280px) */}
      <div className="xl:hidden w-full h-screen flex flex-col items-center justify-center bg-yellow-100 p-6">
        <AiOutlineWarning className="text-red-600 text-6xl mb-4 animate-bounce" />
        <h1 className="font-poppins font-bold text-4xl mb-4 text-red-600">
          Attention!
        </h1>
        <p className="text-center font-poppins font-medium text-lg mb-6 text-gray-700">
          Unfortunately, our website is not yet optimized for tablets or mobile
          devices.
          <br /> Please revisit us on a desktop device for the best experience.
        </p>
      </div>
    </>
  );
};

export default TooSmall;
