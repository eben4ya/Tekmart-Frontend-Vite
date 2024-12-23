import { OrderContext } from "../../context/OrderContext";
import { AuthContext } from "../../context/AuthContext";

import { useState, useContext } from "react";

const UniqueCodeModal = () => {
  const { pendingOrders, readyOrders, setShowUniqueCodeModal } =
    useContext(OrderContext);
  const { user } = useContext(AuthContext);

  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const toggleOrderDetails = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  // Filter orders that are pending or ready to be taken and belong to the current user
  const avalilabeOrders = [...pendingOrders, ...readyOrders].filter(
    (order) => order.userId && order.userId._id === user.id
  );

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-3xl p-6 relative max-h-[60vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => setShowUniqueCodeModal(false)}
          className="absolute top-4 right-4 text-white p-2 rounded-full"
        >
          ✖
        </button>
        <h2 className="text-[1.4vw] font-bold text-center mb-[2vw]">
          Your Orders
        </h2>

        {/* Unique Code Orders */}
        {avalilabeOrders.length > 0 ? (
          <ul className="mb-4">
            {avalilabeOrders.map((order) => (
              <li key={order._id} className="mb-[1.6vw]">
                <button className="w-full flex justify-between items-center bg-yellow-200 p-3 rounded-lg shadow-md hover:bg-yellow-300 transition">
                  <span className="font-semibold">Order ID: {order._id}</span>
                  <span
                    className="font-bold"
                    onClick={() => toggleOrderDetails(order._id)}
                  >
                    {expandedOrderId === order._id ? "▲" : "▼"}
                  </span>
                </button>

                {/* Order Details */}
                {expandedOrderId === order._id && (
                  <div className="flex flex-col gap-[0.25vw] mt-3 p-4 bg-yellow-50 rounded-lg shadow-inner">
                    <p>
                      <strong>Status:</strong> {order.statusOrder}
                    </p>
                    <div>
                      <strong>Items:</strong>
                      <ul className="list-disc pl-5 mt-2">
                        {order.items.map((item) => (
                          <li key={item._id} className="mb-1">
                            {item.amount}x {item.productId.name} - IDR{" "}
                            {(item.price * item.amount).toLocaleString()}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p>
                      <strong>Total Price:</strong> IDR{" "}
                      {order.totalPrice.toLocaleString()}
                    </p>

                    {/* Unique Code */}
                    {order.statusOrder === "Ready to be Taken" && (
                      <p>
                        <strong>Unique Code:</strong>{" "}
                        <span className="bg-yellow p-1 font-semibold">
                          {order.uniqueCode}
                        </span>
                      </p>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-700">
            No orders. Click{" "}
            <a href="/products" className="text-blue-link underline">
              here
            </a>{" "}
            to shop!
          </p>
        )}
      </div>
    </div>
  );
};

export default UniqueCodeModal;
