import Title from "../AllPage/Title"
import React, {useState} from "react";

const orders = [
    {
      id: 1,
      orderId: 24583,
      user: "John Doe",
      items: [
        { name: "Product A", quantity: 1, price: 5000 },
        { name: "Product B", quantity: 1, price: 10000 },
        { name: "Product C", quantity: 1, price: 12000 },
      ],
      paymentMethod: "GOPAY",
      paymentStatus: "Paid",
    },
    {
      id: 2,
      orderId: 24584,
      user: "Jane Doe",
      items: [
        { name: "Product D", quantity: 2, price: 15000 },
        { name: "Product E", quantity: 1, price: 20000 },
      ],
      paymentMethod: "GOPAY",
      paymentStatus: "Not Paid",
    },
  ];

const PaymentHistory = () => {
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
      subtitle="Where admin could edit the inventory of their products."/>
      
      <div className="p-4 w-full">
      <h1 className="text-2xl font-bold mb-4">Payment History</h1>
      <div>
        {orders.map((order) => (
          <div key={order.id} className="border rounded mb-4 p-2">
            {/* Order Header */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown(order.id)}
            >
              <div className="flex flex-row justify-between">
                <div>
                    <button className="ml-4">
                  {openDropdowns.includes(order.id) ? "▲" : "▼"}
                </button>
                <p className="font-semibold">
                  Order {order.orderId} - User: {order.user}
                </p>
                </div>
                
                <p>
                  {order.paymentMethod} - IDR{" "}
                  {order.items
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toLocaleString()}
                </p>
              </div>
              <div className="w-20">
                <span
                  className={`px-2 py-1 rounded-md shadow-xl w-20  ${
                    order.paymentStatus === "Paid"
                      ? "bg-yellow text-white"
                      : "bg-yellow text-white"
                  }`}
                >
                  {order.paymentStatus}
                </span>
                
              </div>
            </div>

            {/* Order Details */}
            {openDropdowns.includes(order.id) && (
              <div className="mt-2">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="border-b py-2 flex justify-between items-center"
                  >
                    <div>
                      <p>
                        {item.quantity}x {item.name}
                      </p>
                    </div>
                    <p>IDR {item.price.toLocaleString()}</p>
                  </div>
                ))}
                <div className="mt-2 font-bold text-right">
                  Total: IDR{" "}
                  {order.items
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toLocaleString()}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  
    </>
  );
}

export default PaymentHistory
