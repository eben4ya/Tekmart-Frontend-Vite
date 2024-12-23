import { OrderContext } from "../../context/OrderContext";
import { AuthContext } from "../../context/AuthContext";

import { useContext } from "react";

const FloatingUniqueCodeIcon = () => {
  const { pendingOrders, readyOrders, setShowUniqueCodeModal } =
    useContext(OrderContext);
  const { user } = useContext(AuthContext);
  // Filter orders that are pending and belong to the current user
  const combineOrder = [...pendingOrders, ...readyOrders].filter(
    (order) => order.userId && order.userId._id === user.id
  );
  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <button
        onClick={() => setShowUniqueCodeModal(true)}
        className="relative w-[4.4vw] h-[4.4vw] bg-yellow rounded-full shadow-lg flex items-center justify-center text-black font-bold text-3xl hover:scale-110 transition-transform"
      >
        🛒
        {/* Notification Badge */}
        {combineOrder.length > 0 && (
          <span className="absolute top-0 right-0 bg-red text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">
            {combineOrder.length}
          </span>
        )}
      </button>
    </div>
  );
};

export default FloatingUniqueCodeIcon;
