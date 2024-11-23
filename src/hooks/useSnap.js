import { useEffect, useState } from "react";

const useSnap = () => {
  const [snap, setSnap] = useState(null);
  useEffect(() => {
    const midtransClientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", midtransClientKey);
    script.onload = () => {
      setSnap(window.snap);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const snapEmbed = (snap_token, embedId, action) => {
    if (snap) {
      snap.embed(snap_token, {
        embedId,
        onSuccess: function (result) {
          console.log("Payment Success:", result);
          action.onSuccess(result);
        },
        onPending: function (result) {
          console.log("Payment Pending:", result);
          action.onPending(result);
        },
        onError: function (result) {
          console.error("Payment Failed:", result);
          action.onError(result);
        },
        onClose: function () {
          console.log("Payment popup closed");
          action.onClose();
        },
      });
    }
  };

  return { snapEmbed };
};

export default useSnap;
