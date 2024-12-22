import { OrderContext } from "../../context/OrderContext";
import { AuthContext } from "../../context/AuthContext";

import { useContext } from "react";

const FloatingUniqueCodeIcon = () => {
  const { pendingOrders, setShowModal } = useContext(OrderContext);
  const { user } = useContext(AuthContext);
  // Filter orders that are pending and belong to the current user
  const userPendingOrders = pendingOrders.filter(
    (order) => order.userId && order.userId === user.id
  );
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={() => setShowModal(true)}
        className="relative w-16 h-16 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center text-black font-bold text-2xl hover:scale-110 transition-transform"
      >
        🛒
        {/* Notification Badge */}
        {userPendingOrders.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">
            {userPendingOrders.length}
          </span>
        )}
      </button>
    </div>
  );
};

export default FloatingUniqueCodeIcon;
