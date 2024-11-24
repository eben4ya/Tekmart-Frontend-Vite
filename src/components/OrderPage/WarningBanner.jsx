import React, { useState, useEffect } from "react";
import warningImage from "../../assets/images/Warning.png";


//// Pasang ini di tombol yang mau dipasangin banner nnti
// onClick={handleShowBanner} 


//// Pasang ini jg nnti di main function page ordernya
// const [showBanner, setShowBanner] = useState(false);
//   const handleShowBanner = () => {
//     setShowBanner(true); 
//     setTimeout(() => setShowBanner(false), 5000);
//   };

const WarningBanner = ({ duration = 5000, onDismiss }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // supaya hilang stlh 5 detik
    const timer = setTimeout(() => {
      setVisible(false);
      if (onDismiss) onDismiss(); 
    }, duration);

    return () => clearTimeout(timer); 
  }, [duration, onDismiss]);

  if (!visible) return null; 

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
        <img
          src={warningImage}
          alt="Warning Icon"
          className="h-10 w-10 object-contain"
        />
        <div className="ml-4">
          <h1 className="font-bold text-lg" style={{ fontFamily: "Poppins" }}>
            Peringatan!
          </h1>
          <p className="text-sm" style={{ fontFamily: "Poppins" }}>
            Produk Telah Diterima.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WarningBanner;
