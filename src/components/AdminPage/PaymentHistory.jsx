import Title from "../AllPage/Title";
import { useState, useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

const PaymentHistory = () => {
  const { allPayments } = useContext(OrderContext);
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

      <div className="p-4 w-full min-h-[34vw]">
        <div>
          {allPayments.map((payment) => (
            <div key={payment._id} className=" rounded mb-4 p-2">
              {/* Order Header */}
              <div className="flex items-center flex-row  justify-between bg-white outline rounded-md outline-2 outline-white2 leading-5 h-16">
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

              {/* Order Details */}
              {/* {openDropdowns.includes(order.id) && (
                <div className="mt-4 space-y-4">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="outline rounded-md outline-white2 bg-zinc  py-2 outline-2 h-16 flex justify-between items-center"
                    >
                      <div className="">
                        <p className="ml-3">
                          <a className="font-poppins font-bold">
                            {item.quantity}X
                          </a>{" "}
                          <a className="ml-5 font-poppins font-medium">
                            {item.name}
                          </a>
                        </p>
                      </div>
                      <p className="mr-8 font-poppins font-bold">
                        IDR {item.price.toLocaleString()}
                      </p>
                    </div>
                  ))}
                  <div className="items-center flex flex-row justify-between mt-2 font-bold text-right outline outline-2 rounded-md outline-yellow bg-yellow h-16">
                    <p className="ml-16 font-poppins font-bold ">Total:</p>
                    <p className="mr-8 font-poppins">
                      IDR{" "}
                      {order.items
                        .reduce(
                          (sum, item) => sum + item.price * item.quantity,
                          0
                        )
                        .toLocaleString()}
                    </p>
                  </div>
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;
