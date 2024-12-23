import { FaSpinner } from "react-icons/fa";

import Title from "../AllPage/Title";
import NotExistListPayment from "./NotExistListPayment";

import { useState, useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

const PaymentHistory = () => {
  const { allPayments, loading } = useContext(OrderContext);
  const [openDropdowns, setOpenDropdowns] = useState([]);

  const toggleDropdown = (id) => {
    if (openDropdowns.includes(id)) {
      setOpenDropdowns(openDropdowns.filter((openId) => openId !== id));
    } else {
      setOpenDropdowns([...openDropdowns, id]);
    }
  };

  return (
    <>
      <Title
        bgSrc="/images/paymenthistory.png"
        title="Payment History"
        subtitle="Where admin could edit the inventory of their products."
      />

      <div className="p-4 w-full min-h-[34vw] flex justify-center ">
        {loading ? (
          <div className="flex justify-center items-center w-full h-full">
            <FaSpinner className="text-[2vw] animate-spin text-primary" />
          </div>
        ) : (
          <div className="w-full">
            {allPayments.length > 0 ? (
              allPayments.map((payment) => (
                <div key={payment._id} className="rounded mb-4 p-2">
                  {/* Order Header */}
                  <div className="flex items-center flex-row justify-between bg-white outline rounded-md outline-2 outline-white2 leading-5 h-16">
                    <div className="flex flex-row items-center">
                      <button
                        className="ml-4 cursor-pointer"
                        onClick={() => toggleDropdown(payment._id)}
                      >
                        {openDropdowns.includes(payment._id) ? "▲" : "▼"}
                      </button>
                      <div className="ml-5">
                        <p className="font-semibold">
                          <a className="font-poppins font-medium">
                            Order {payment.orderId}
                          </a>{" "}
                          <br />{" "}
                          {/* <a className="font-poppins font-light">
                          User: {order.user}
                        </a> */}
                        </p>
                      </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-row items-center space-x-4 mr-6">
                      {/* Payment Method and Total */}
                      <p className="text-right">
                        <a className="font-poppins font-light">
                          {payment.paymentMethod}
                        </a>
                        <br />
                        {/* <a className="font-poppins font-bold">
                        IDR{" "}
                        {order.items
                          .reduce(
                            (sum, item) => sum + item.price * item.quantity,
                            0
                          )
                          .toLocaleString()}
                      </a> */}
                      </p>
                      {/* Payment Status */}
                      <div className="">
                        <span
                          className={`font-poppins font-bold px-2 py-1 rounded-md shadow-xl w-full justify-center  ${
                            payment.status === "Pending"
                              ? "bg-yellow text-black"
                              : "bg-black text-white"
                          }`}
                        >
                          {payment.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Payments Details */}
                  {openDropdowns.includes(payment._id) && (
                    <div className="mt-2">
                      <div className="flex-row py-2 flex justify-between items-center rounded bg-zinc outline outline-white2 outline-2">
                        {/* email user*/}
                        <div className="mx-6 my-4 flex flex-row space-x-4">
                          <p className="font-bold">Customer Email: </p>
                          <p>
                            {payment.customerDetails.email != undefined
                              ? payment.customerDetails.email
                              : ""}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-row justify-between my-4 px-4 py-5 font-bold text-right bg-yellow rounded outline outline-yellow">
                        <p className="px-10 font-poppins font-medium">Total</p>
                        <p className="font-poppins">IDR{payment.totalPrice}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <NotExistListPayment />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default PaymentHistory;
