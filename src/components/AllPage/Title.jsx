/* eslint-disable react/prop-types */
const Title = ({ bgSrc = "", title = "", subtitle = "" }) => {
  const [title1, title2] = title.split(" ", 2);

  return (
    <div
      style={{
        backgroundImage: `url(${bgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="bg-black font-poppins flex flex-col justify-center items-center gap-[1.25vw] w-full h-[16.14vw]"
    >
      <h1 className="font-bold text-[5vw] ">
        <span className="text-yellow"> {title1}</span>
        <span className="text-white"> {title2}</span>
      </h1>
      <p className="text-white text-[1.04vw]">{subtitle}</p>
    </div>
  );
};

export default Title;
