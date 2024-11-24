import React, { useState } from "react";
import Title from "../AllPage/Title";
import { Trash } from "lucide-react";

const OrderPage = () => {
  const [selectedPayment, setSelectedPayment] = useState("QRIS");

  const orderItems = [
    {
      id: 1,
      name: "Beng-Beng",
      variant: "Standard",
      quantity: 1,
      price: 4000.0,
    },
    {
      id: 2,
      name: "Chitat0",
      variant: "Jumbo",
      quantity: 2,
      price: 20000.0,
    },
    {
      id: 3,
      name: "Onigiri",
      variant: "Rendang",
      quantity: "1",
      price: 9500.0,
    },
  ];

  const totalPrice = orderItems.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = () => {
    console.log("Order placed with payment method:", selectedPayment);
  };
  return (
    <>
      {/* Order Title */}
      <Title
        bgSrc="/images/orderBG.svg"
        title="Order Details"
        subtitle="One last step, don’t worry!"
      />

      <div className="w-full max-h-[44vw] mx-auto px-4 py-8">
        {/* Order Summary */}
        <div className="bg-white p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-poppins font-bold">Order Summary</h2>
            <button
              style={{ color: "#FFDE4D" }}
              className="pt-4 font-poppins font-medium text-xl"
            >
              + Add More
            </button>
          </div>

          <div className="space-y-3">
            {orderItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-80 rounded pb-4 pt-4 pl-4 pr-4 outline outline-zinc outline-2"
              >
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 font-inter font-bold">
                    {item.quantity}x
                  </span>
                  <div>
                    <h3 className="font-poppins font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500 font-light">
                      {item.variant}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold font-inter">
                    IDR{item.price.toLocaleString()}
                  </span>
                  <button className="text-yellow-500">
                    <Trash className="w-6 h-6" color="#FFDE4D" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Payment Method Option */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 mx-[1vw]">
          <h2 className="text-3xl font-poppins font-bold mb-4">
            Payment Method
          </h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="debit"
                checked={selectedPayment === "debit"}
                onChange={(e) => setSelectedPayment(e.target.value)}
                className="form-radio text-yellow"
              />
              <span className="font-inter font-medium">Debit Card</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="QRIS"
                checked={selectedPayment === "QRIS"}
                onChange={(e) => setSelectedPayment(e.target.value)}
                className="form-radio text-yellow"
              />
              <span className="font-inter font-medium">QRIS</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={selectedPayment === "cash"}
                onChange={(e) => setSelectedPayment(e.target.value)}
                className="form-radio text-yellow"
              ></input>
              <span className="font-inter font-medium">Cash</span>
            </label>
          </div>
        </div>
        {/* Payment Confirmation Button */}
        <div className="bg-yellow rounded-lg p-2 mx-[1vw]">
          <div className="flex justify-between items-center p-4 ">
            <span className="font-bold font-poppins flex items-center justify-between">
              2 Items Selected
            </span>
            <button
              /* onClick={handlePlaceOrder} */
              className="font-poppins flex items-center bg-yellow text-black py-3 rounded-lg font-bold hover:bg-yellow transition-colors"
            >
              Proceed to Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
