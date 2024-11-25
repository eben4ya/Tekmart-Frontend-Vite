/* eslint-disable react/prop-types */
const ProductDetail = ({
  closeModal = () => {},
  decrementQuantity = () => {},
  incrementQuantity = () => {},
  addToCart = () => {},
  selectedProduct,
  quantity = 0,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex flex-col items-center md:space-y-2 lg:space-y-4 xl:space-y-[18px] md:size-[300px] lg:size-[400px] xl:size-[563px] bg-white rounded-[14px] md:px-16 lg:px-[88px] xl:px-[90px] md:pt-3.5 lg:pt-3.5 xl:pt-8 md:pb-[71px] lg:pb-[73px] xl:pb-[75px] font-bold">
        <button
          type="button"
          className="absolute md:-right-5 lg:-right-6 md:-top-5 lg:-top-6 bg-yellow rounded-full md:size-10 lg:size-14 xl:size-16 md:text-2xl lg:text-3xl xl:text-[43px] cursor-pointer"
          onClick={closeModal}
        >
          <a className="leading-none" href="">
            X
          </a>
        </button>
        <img
          className="w-full"
          src={selectedProduct.image}
          alt={selectedProduct.name}
        />
        <h1 className="md:text-2xl lg:text-3xl xl:text-[40px]">
          {selectedProduct.name}
        </h1>
        <h1 className="md:text-md lg:text-lg xl:text-xl font-normal">
          {selectedProduct.price}
        </h1>
        <div className="flex items-center justify-center space-x-2.5 md:text-lg lg:text-xl xl:text-[24px]">
          <button
            className="border md:size-[29.3px] xl:size-[44px]"
            onClick={decrementQuantity}
          >
            -
          </button>
          <div className="flex items-center justify-center border md:size-[29.3px] xl:size-[44px]">
            <h1>{quantity}</h1>
          </div>
          <button
            className="border md:size-[29.3px] xl:size-[44px]"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="bg-yellow md:rounded-xl lg:rounded-2xl xl:rounded/[23px] md:px-5 lg:px-7 xl:px/[30px] md:py-2 lg:py-3.5 xl:py/[18px] md:text-lg lg:text-xl xl:text/[26px] cursor-pointer hover:bg-yellow hover:text-black active:text-white active:bg-yellow mt-4"
          onClick={() => addToCart(selectedProduct, quantity)}
        >
          Add to Orders
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
