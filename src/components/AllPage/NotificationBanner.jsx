
import warningImage from "../../assets/images/Warning.png";
import { BsInfoCircleFill } from "react-icons/bs";

import { useEffect, useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

//// Pasang ini di tombol yang mau dipasangin banner nnti
// onClick={handleShowBanner}

//// Pasang ini jg nnti di main function page ordernya
// const [showBanner, setShowBanner] = useState(false);
//   const handleShowBanner = () => {
//     setShowBanner(true);
//     setTimeout(() => setShowBanner(false), 5000);
//   };

/* eslint-disable react/prop-types */
const NotificationBanner = ({
  duration = 5000,
  onDismiss,
  type = "info",
  message = "",
}) => {
  const { showNotification, setShowNotification } = useContext(OrderContext);

  useEffect(() => {
    // supaya hilang stlh 5 detik
    const timer = setTimeout(() => {
      setShowNotification(false);
      if (onDismiss) onDismiss();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onDismiss, setShowNotification]);

  if (!showNotification) return null;

  return (
    <div
      className="fixed top-10 left-1/2 -translate-x-1/2 bg-yellow text-black shadow-lg rounded-lg z-50 transition-all duration-300 ease-in-out"
      style={{
        padding: "1.5rem",
        width: "max-content",
        maxWidth: "80%",
        textAlign: "center",
        willChange: "transform",
      }}
    >
      <div className="flex items-center">
        {type === "info" ? (
          <BsInfoCircleFill className="w-10 h-10 text-black" />
        ) : (
          <img src={warningImage} alt="warning" className="w-10 h-10" />
        )}
        <div className="ml-4">
          <h1 className="font-bold text-lg" style={{ fontFamily: "Poppins" }}>
            {type === "info" ? "Info" : "Warning!"}
          </h1>
          <p className="text-sm" style={{ fontFamily: "Poppins" }}>
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationBanner;
