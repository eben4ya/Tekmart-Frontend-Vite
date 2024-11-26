import { useState } from "react";

import Title from "../AllPage/Title";
const orderInfo = [
  {
    id: 1,
    username: "Jhon",
    orderNum: 43432423,
  },
];
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
    price: 10000.0,
  },
  {
    id: 3,
    name: "Onigiri",
    variant: "Rendang",
    quantity: "1",
    price: 9500.0,
  },
];
const Orders = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
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
        <div className=" rounded p-2 mb-4 max-h-[22vw] overflow-y-scroll">
          <div
            className="rounded bg-white flex flex-row justify-between items-center cursor-pointer py-2 outline outline-white2 outline-2 mr-8"
            onClick={() => toggleSection("activeOrders")}
          >
            {orderInfo.map((item) => (
              <div
                key={item.id}
                className="font-semibold flex flex-row px-2 mx-4 my-1"
              >
                <button className="">
                  {expandedSection === "activeOrders" ? "▲" : "▼"}
                </button>
                <div className="mx-6">
                  <p className="font-inter font-medium">
                    Order [{item.orderNum}]
                  </p>
                  <p className="font-inter font-light">User: {item.username}</p>
                </div>
              </div>
            ))}
            <div>
              <button className="font-poppins font-bold bg-black text-white rounded-xl shadow-lg px-4 py-2 mx-4 hover:bg-yellow hover:text-black active:text-white active:bg-yellow text-sm">
                Accept
              </button>
            </div>
          </div>
          {expandedSection === "activeOrders" && (
            <div className="mr-8 mt-2 space-y-2">
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-row py-2 flex justify-between items-center rounded bg-zinc outline outline-white2 outline-2"
                >
                  <div className="font-poppins mx-6 my-4 flex flex-row space-x-4">
                    <p className="font-bold">{item.quantity}x</p>
                    <p>
                      {item.name} ({item.variant})
                    </p>
                  </div>
                  <p className="mx-4 font-poppins font-bold">
                    IDR{item.price.toLocaleString()}
                  </p>
                </div>
              ))}
              <div className="flex flex-row justify-between my-4 px-4 py-5 font-bold text-right bg-yellow rounded outline outline-yellow">
                <p className="px-10 font-poppins font-medium">Total</p>
                <p className="font-poppins">
                  IDR{""}
                  {orderItems
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toLocaleString()}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Completed Orders */}
        <h2 className="ml-8 font-poppins font-bold text-[2.083vw] max-h-[22vw] overflow-y-scroll">
          {" "}
          Completed Orders
        </h2>
        <div className="rounded mb-4 p-2">
          <div
            className="rounded bg-white flex flex-row justify-between items-center cursor-pointer py-2 outline outline-white2 outline-2 mr-8"
            onClick={() => toggleSection("completedOrders")}
          >
            {orderInfo.map((item) => (
              <div
                key={item.id}
                className="font-semibold flex flex-row px-2 mx-4 my-1"
              >
                <button className="">
                  {expandedSection === "activeOrders" ? "▲" : "▼"}
                </button>
                <div className="mx-6">
                  <p className="font-inter font-medium">
                    Order [{item.orderNum}]
                  </p>
                  <p className="font-inter font-light">User: {item.username}</p>
                </div>
              </div>
            ))}
            <div>
              <button className=" font-poppins font-bold bg-black text-white rounded-xl shadow-lg px-4 py-2 mx-4 hover:bg-yellow hover:text-black active:text-white active:bg-yellow  text-sm">
                Order Done
              </button>
            </div>
          </div>
          {expandedSection === "completedOrders" && (
            <div className="mt-2">
              <p>All completed orders are archived here.</p>
              <button className="mt-2 bg-gray-500 text-white px-4 py-2 rounded">
                Order Done
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Orders;
