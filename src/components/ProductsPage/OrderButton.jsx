// eslint-disable-next-line react/prop-types
const OrderButton = ({onClick = () => {}, amount = 0}) => {
  return (
    <div className="bg-yellow rounded-lg p-2 mx-[1vw]">
      <div className="flex justify-between items-center p-4 ">
        <span className="font-bold font-poppins flex items-center justify-between">
          {amount} Items Selected
        </span>
        <button
          onClick={onClick}
          className="font-poppins flex items-center bg-yellow text-black py-3 rounded-lg font-bold hover:bg-yellow transition-colors"
        >
          Proceed to Order
        </button>
      </div>
    </div>
  );
};

export default OrderButton;
