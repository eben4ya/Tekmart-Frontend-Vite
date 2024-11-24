import queuedrUrl from "../../assets/images/Queued.png";
import usingBrowserrUrl from "../../assets/images/Using-Browser.png";

const AboutUsContent = () => {
  return (
    <div className="flex flex-col w-screen font-poppins">
      <div className="flex md:flex-row md:px-7 lg:px-8 xl:ps-9 xl:pe-36">
        <img src={queuedrUrl} alt="Order" className="md:w-2/5 object-cover" />
        <div className="flex flex-col md:mt-10 lg:mt-20 xl:mt-32 md:ms-3 lg:ms-4 xl:ms-5 font-bold">
          <div className="flex flex-row md:text-2xl lg:text-3xl xl:text-4xl">
            <h1>Why did&nbsp;</h1>
            <h1 className="text-yellow">we create&nbsp;</h1>
            <h1>this?</h1>
          </div>
          <p className="md:mt-1 lg:mt-2 xl:mt-3 md:text-sm lg:text-md xl:text-xl font-normal text-justify">
            At Teknik Mart, we’re all about making your shopping experience
            faster and more convenient. Our goal is to eliminate long queues and
            give customers the flexibility to shop on their terms. We combine
            online shopping with an in-store pickup option, so you can place
            orders from anywhere and pick them up whenever it’s convenient.
          </p>
          <button
            type="button"
            className="self-start bg-black md:rounded-xl lg:rounded-2xl xl:rounded-3xl md:mt-1 lg:mt-2 xl:mt-3 md:px-5 lg:px-6 xl:px-7 md:py-2 lg:py-3 xl:py-4 md:text-sm xl:text-2xl text-white cursor-pointer hover:bg-yellow hover:text-black active:text-white active:bg-yellow"
          >
            <a href="">Get Started Now</a>
          </button>
        </div>
      </div>

      <div className="flex md:flex-row-reverse mt-8 md:px-7 lg:px-8 xl:ps-9">
        <img
          src={usingBrowserrUrl}
          alt="Order"
          className="md:w-2/5 object-cover"
        />
        <div className="flex flex-col md:mt-10 lg:mt-20 xl:mt-32 md:me-3 lg:me-4 xl:me-5 font-bold">
          <div className="flex flex-row justify-end md:text-2xl lg:text-3xl xl:text-4xl">
            <h1>How&nbsp;</h1>
            <h1 className="text-yellow">to use?</h1>
          </div>
          <p className="md:mt-1 lg:mt-2 xl:mt-3 md:text-sm lg:text-md xl:text-xl font-normal text-justify">
            Browse our products online, add items to your cart, and place an
            order for in-store pickup. Once your order is ready, simply come to
            Teknik Mart, skip the queues, and pick it up. We keep you updated
            every step of the way, so you’ll know exactly when your order is
            ready.
          </p>
          <button
            type="button"
            className="self-end bg-black md:rounded-xl lg:rounded-2xl xl:rounded-3xl md:mt-1 lg:mt-2 xl:mt-3 md:px-5 lg:px-6 xl:px-7 md:py-2 lg:py-3 xl:py-4 md:text-sm xl:text-2xl text-white cursor-pointer hover:bg-yellow hover:text-black active:text-white active:bg-yellow"
          >
            <a href="">See Our List of Products</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;
