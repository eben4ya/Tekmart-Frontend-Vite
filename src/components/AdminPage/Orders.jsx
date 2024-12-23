import { FaSpinner } from "react-icons/fa";

import { useState, useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

import Title from "../AllPage/Title";

const Orders = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const {
    pendingOrders = [],
    readyOrders = [],
    confirmedOrders = [],
    acceptOrderStatus,
    confirmOrderStatus,
    loading,
    setFailedPayment,
  } = useContext(OrderContext);

  const paymentMethodCash = async (
    orderId,
    totalPrice,
    customerDetails,
    paymentMethod
  ) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_PAYMENT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: orderId,
          totalPrice: totalPrice,
          customerDetails,
          paymentMethod: paymentMethod,
        }),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to initiate payment");
      }

      const data = await response.json();
      const { token } = data;
      console.log("Payment Token: " + token);

      setFailedPayment(false);
    } catch (error) {
      console.error("Failed to initiate cash payment", error);
      // alert("Failed to initiate payment");
      setFailedPayment(true);
    }
  };

  return (
    <>
      <Title
        bgSrc="/images/orderBG.svg"
        title=" Orders"
        subtitle="Where admin could edit the inventory of their products"
      />
      <div className="w-full min-h-[33vw] m-4 pl-6 p-2">
        {/* New Orders */}
        <h1 className="ml-8 font-poppins font-bold text-[2.083vw]">
          New Orders
        </h1>
        <div className="rounded p-2 mb-4 max-h-[22vw] overflow-y-scroll">
          {loading ? (
            <div className="w-[8.744vw] h-[9.76vw] flex justify-center items-center">
              <div className="flex flex-col justify-center items-center w-full h-[7.6536vw] rounded-[0.88vw]">
                <FaSpinner className="text-[2vw] animate-spin text-primary" />
              </div>
            </div>
          ) : (
            pendingOrders.map((order) => (
              <div key={order._id}>
                <div className="rounded bg-white flex flex-row justify-between items-center  py-2 outline outline-white2 outline-2 mr-8">
                  <div className="font-semibold flex flex-row px-2 mx-4 my-1">
                    <button
                      className="cursor-pointer"
                      onClick={() => toggleSection(order._id)}
                    >
                      {expandedSection === order._id ? "▲" : "▼"}
                    </button>
                    <div className="mx-6">
                      <p className="font-inter font-medium">
                        Order: [{order.items.length}] items
                      </p>
                      <p className="font-inter font-light">
                        User: {order.userId ? order.userId.email : "Guest"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => acceptOrderStatus(order._id)}
                      className="font-poppins font-bold bg-black text-white rounded-xl shadow-lg px-4 py-2 mx-4 hover:bg-yellow hover:text-black active:text-white active:bg-yellow text-sm"
                    >
                      Accept
                    </button>
                  </div>
                </div>
                {expandedSection === order._id && (
                  <div className="mr-8 mt-2 space-y-2">
                    {order.items.map((item) => (
                      <div
                        key={item._id}
                        className="flex-row py-2 flex justify-between items-center rounded bg-zinc outline outline-white2 outline-2"
                      >
                        <div className="font-poppins mx-6 my-4 flex flex-row space-x-4">
                          <p className="font-bold">{item.amount}x</p>
                          <p>{item.productId.name}</p>
                        </div>
                        <p className="mx-4 font-poppins font-bold">
                          IDR{item.price.toLocaleString()}
                        </p>
                      </div>
                    ))}
                    <div className="flex flex-row justify-between my-4 px-4 py-5 font-bold text-right bg-yellow rounded outline outline-yellow">
                      <p className="px-10 font-poppins font-medium">Total</p>
                      <p className="font-poppins">
                        IDR
                        {order.items
                          .reduce(
                            (sum, item) => sum + item.price * item.amount,
                            0
                          )
                          .toLocaleString()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Orders Ready */}
        <h1 className="ml-8 font-poppins font-bold text-[2.083vw]">
          Orders Ready
        </h1>
        <div className="rounded p-2 mb-4 max-h-[22vw] overflow-y-scroll">
          {loading ? (
            <div className="w-[8.744vw] h-[9.76vw] flex justify-center items-center">
              <div className="flex flex-col justify-center items-center w-full h-[7.6536vw] rounded-[0.88vw]">
                <FaSpinner className="text-[2vw] animate-spin text-primary" />
              </div>
            </div>
          ) : (
            readyOrders.map((order) => (
              <div key={order._id}>
                <div className="rounded bg-white flex flex-row justify-between items-center  py-2 outline outline-white2 outline-2 mr-8">
                  <div className="font-semibold flex flex-row px-2 mx-4 my-1">
                    <button
                      className="cursor-pointer"
                      onClick={() => toggleSection(order._id)}
                    >
                      {expandedSection === order._id ? "▲" : "▼"}
                    </button>
                    <div className="mx-6">
                      <p className="font-inter font-medium">
                        Order: [{order.items.length}] items
                      </p>
                      <p className="font-inter font-light">
                        User: {order.userId ? order.userId.email : "Guest"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        confirmOrderStatus(order._id);
                        if (order.paymentMethod === "Cash") {
                          paymentMethodCash(
                            order._id,
                            order.items.reduce(
                              (sum, item) => sum + item.price * item.amount,
                              0
                            ),
                            order.userId,
                            order.paymentMethod
                          );
                        }
                      }}
                      className="font-poppins font-bold bg-black text-white rounded-xl shadow-lg px-4 py-2 mx-4 hover:bg-yellow hover:text-black active:text-white active:bg-yellow text-sm"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
                {expandedSection === order._id && (
                  <div className="mr-8 mt-2 space-y-2">
                    {order.items.map((item) => (
                      <div
                        key={item._id}
                        className="flex-row py-2 flex justify-between items-center rounded bg-zinc outline outline-white2 outline-2"
                      >
                        <div className="font-poppins mx-6 my-4 flex flex-row space-x-4">
                          <p className="font-bold">{item.amount}x</p>
                          <p>{item.productId.name}</p>
                        </div>
                        <p className="mx-4 font-poppins font-bold">
                          IDR{item.price.toLocaleString()}
                        </p>
                      </div>
                    ))}
                    <div className="flex flex-row justify-between my-4 px-4 py-5 font-bold text-right bg-yellow rounded outline outline-yellow">
                      <p className="px-10 font-poppins font-medium">Total</p>
                      <p className="font-poppins">
                        IDR
                        {order.items
                          .reduce(
                            (sum, item) => sum + item.price * item.amount,
                            0
                          )
                          .toLocaleString()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Completed Orders */}
        <h2 className="ml-8 font-poppins font-bold text-[2.083vw] max-h-[22vw] overflow-y-scroll">
          Completed Orders
        </h2>
        <div className="rounded p-2 mb-4 max-h-[22vw] overflow-y-scroll">
          {loading ? (
            <div className="w-[8.744vw] h-[9.76vw] flex justify-center items-center">
              <div className="flex flex-col justify-center items-center w-full h-[7.6536vw] rounded-[0.88vw]">
                <FaSpinner className="text-[2vw] animate-spin text-primary" />
              </div>
            </div>
          ) : (
            confirmedOrders.map((order) => (
              <div key={order._id}>
                <div
                  className="rounded bg-white flex flex-row justify-between items-center cursor-pointer py-2 outline outline-white2 outline-2 mr-8"
                  onClick={() => toggleSection(order._id)}
                >
                  <div className="font-semibold flex flex-row px-2 mx-4 my-1">
                    <button className="">
                      {expandedSection === order._id ? "▲" : "▼"}
                    </button>
                    <div className="mx-6">
                      <p className="font-inter font-medium">
                        Order: [{order.items.length}] items
                      </p>
                      <p className="font-inter font-light">
                        User: {order.userId ? order.userId.email : "Guest"}
                      </p>
                    </div>
                  </div>
                </div>
                {expandedSection === order._id && (
                  <div className="mr-8 mt-2 space-y-2">
                    {order.items.map((item) => (
                      <div
                        key={item._id}
                        className="flex-row py-2 flex justify-between items-center rounded bg-zinc outline outline-white2 outline-2"
                      >
                        <div className="font-poppins mx-6 my-4 flex flex-row space-x-4">
                          <p className="font-bold">{item.amount}x</p>
                          <p>{item.productId.name}</p>
                        </div>
                        <p className="mx-4 font-poppins font-bold">
                          IDR{item.price.toLocaleString()}
                        </p>
                      </div>
                    ))}
                    <div className="flex flex-row justify-between my-4 px-4 py-5 font-bold text-right bg-yellow rounded outline outline-yellow">
                      <p className="px-10 font-poppins font-medium">Total</p>
                      <p className="font-poppins">
                        IDR
                        {order.items
                          .reduce(
                            (sum, item) => sum + item.price * item.amount,
                            0
                          )
                          .toLocaleString()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Orders;
