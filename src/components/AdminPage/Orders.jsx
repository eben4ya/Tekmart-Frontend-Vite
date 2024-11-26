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
    confirmedOrders = [],
    updateOrderStatus,
  } = useContext(OrderContext);

  return (
    <>
      <Title
        bgSrc="/images/orderBG.svg"
        title=" Orders"
        subtitle="Where admin could edit the inventory of their products"
      />
      <div className="w-full min-h-[33vw] m-4 pl-6 p-2">
        {/* Active Orders */}
        <h1 className="ml-8 font-poppins font-bold text-[2.083vw]">
          Active Orders
        </h1>
        <div className="rounded p-2 mb-4 max-h-[22vw] overflow-y-scroll">
          {pendingOrders.map((order) => (
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
                <div>
                  <button
                    onClick={() => updateOrderStatus(order._id)}
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
          ))}
        </div>

        {/* Completed Orders */}
        <h2 className="ml-8 font-poppins font-bold text-[2.083vw] max-h-[22vw] overflow-y-scroll">
          Completed Orders
        </h2>
        <div className="rounded p-2 mb-4 max-h-[22vw] overflow-y-scroll">
          {confirmedOrders.map((order) => (
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;
