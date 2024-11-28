import Title from "../AllPage/Title";

const ErrorOrder = () => {
  return (
    <>
      <Title
        bgSrc="/images/orderBG.svg"
        title="Order Details"
        subtitle="One last step, don’t worry!"
      />
      <div className="flex flex-col justify-center items-center text-center min-h-[calc(100vh-30.1vw)] m-12 space-y-6">
        <h1 className="font-poppins font-bold text-8xl">Whoops!</h1>
        <p className="text-center font-poppins font-normal">
          Looks like you haven’t ordered anything just yet! Please click the
          <br /> button below to refer to our products. Then, you could check
          your <br /> order details here!
        </p>
        <button className="bg-black rounded-3xl text-white font-poppins font-bold w-fit text-2xl py-6 px-8">
          <a href="/products">Check Our Products Here</a>
        </button>
      </div>
    </>
  );
};

export default ErrorOrder;
