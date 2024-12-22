import { OrderContext } from "../../context/OrderContext";
import { AuthContext } from "../../context/AuthContext";

import { useContext } from "react";

const UniqueCodeModal = () => {
  const { pendingOrders, setShowUniqueCodeModal } = useContext(OrderContext);
  const { user } = useContext(AuthContext);

  // Filter orders that are pending and belong to the current user
  const userPendingOrders = pendingOrders.filter(
    (order) => order.userId && order.userId === user.id
  );

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-3xl p-6 relative max-h-[50vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => setShowUniqueCodeModal(false)}
          className="absolute top-4 right-4 text-white p-2 rounded-full"
        >
          ✖
        </button>
        <h2 className="text-[1.4vw] font-bold text-center mb-[2vw]">Your Orders</h2>

        {/* Unique Code Orders */}
        {userPendingOrders.length > 0 ? (
          <ul className="mb-4">
            {userPendingOrders.map((order) => (
              <li
                key={order._id}
                className="flex justify-between bg-yellow p-3 rounded-lg mb-2"
              >
                <span>Order: {order.items.length} items</span>
                <span>Total: IDR {order.totalPrice.toLocaleString()}</span>
                <span>Unique Code: {order.uniqueCode}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black mb-4 text-center">
            No orders. Click{" "}
            <a className="text-blue-link" href="/products">
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
