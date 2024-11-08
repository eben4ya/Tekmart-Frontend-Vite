// How to use 
// <TitleLandingPage title="Title" desc="Description" useButton={false} />

import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TitleLandingPage = ({ title = "", desc = "", useButton = false }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between w-full aspect-[1920/97] px-[1.82vw] font-poppins text-black">
      <h1 className="font-bold text-[4.79vw]">{title}</h1>
      <div className="flex flex-col gap-[0.5vw] w-[33vw] h-fit">
        <p className="font-medium text-right text-[1.199vw]">{desc}</p>
        {useButton && (
          <button
            onClick={() => navigate("/about")}
            className="bg-black text-white w-[6.6vw] aspect-[121/50] ml-auto px-[0.896vw] py-[0.448vw] rounded-[0.67vw]"
          >
            Learn More
          </button>
        )}
      </div>
    </div>
  );
};

export default TitleLandingPage;
