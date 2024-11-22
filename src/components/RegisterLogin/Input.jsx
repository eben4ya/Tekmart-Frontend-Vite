import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Input = ({ type = "", value = "", onChange = () => {} }) => {
  return (
    <div className="flex flex-row justify-center items-center w-full gap-[2.396vw] text-black">
      {type === "email" ? (
        <FaUser className="text-yellow w-[3.385vw] h-[3.385vw]" />
      ) : (
        <RiLockPasswordFill className="text-white w-[3.385vw] h-[3.385vw]" />
      )}
      <input
        type={type === "email" ? "email" : "password"}
        name={type}
        value={value}
        onChange={onChange}
        placeholder={
          type === "email" ? "Insert Email Here" : "Insert Password Here"
        }
        className={`${
          type === "email" ? "bg-yellow" : "bg-white"
        } w-[35.3vw] placeholder-black placeholder-opacity-60 text-[1.4vw] rounded-full px-[1.354vw] py-[0.729vw] focus:outline-none`}
      />
    </div>
  );
};

export default Input;
