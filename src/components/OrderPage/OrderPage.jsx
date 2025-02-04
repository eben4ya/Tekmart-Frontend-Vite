// TODO
// 1. craete post order endpoint (save order to database)
// 2. called it when user click `proceed to order` button
// 3. Check why backend not receive cookie

import Title from "../AllPage/Title";
import { Trash } from "lucide-react";
import NotificationBanner from "../AllPage/NotificationBanner";

import { useState, useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import { AuthContext } from "../../context/AuthContext";
import useSnap from "../../hooks/useSnap";
import { redirect } from "react-router-dom";

const OrderPage = () => {
  const { snapEmbed } = useSnap();
  const {
    cart,
    setCart,
    showNotification,
    setShowNotification,
    orderId,
    setOrderId,
    failedPayment,
    setFailedPayment,
  } = useContext(OrderContext);
  const { isLoggedIn, user } = useContext(AuthContext);

  const [customerDetails, setCustomerDetails] = useState({
    first_name: user.email || "Benaya",
    email: user.email || "benayaimanuela25@mail.ugm.ac.id",
    phone: "-",
  });

  const [snapShow, setSnapShow] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [notifMessage, setNotifMessage] = useState({ type: "", message: "" });

  const totalPrice = cart.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handlePlaceOrder = async () => {
    if (cart.length === 0) {
      setShowNotification(true);
      setNotifMessage({
        type: "warning",
        message: "No items in the cart, go to page product",
      });
      return;
    }
    if (selectedPayment === null) {
      setShowNotification(true);
      setNotifMessage({
        type: "warning",
        message: "Please select payment method",
      });
      return;
    }
    // if user not logged in, redirect to login page
    if (!isLoggedIn) {
      setShowNotification(true);
      setNotifMessage({
        type: "warning",
        message: "Please login to place order",
      });
      window.location.href = "/login";
      return;
    } else {
      if (selectedPayment === "Cash") {
        // Generate order items
        const orderItems = cart.map((item) => ({
          productId: item._id,
          amount: item.quantity,
          price: parseFloat(item.price),
        }));

        // Create order in the database
        // if payment failed but order created, don't create order again
        if (failedPayment === false) {
          try {
            const response = await fetch(`${import.meta.env.VITE_API_ORDER}`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include", // Include credentials to send cookies automatically
              body: JSON.stringify({
                userId: user.id,
                items: orderItems,
                totalPrice: totalPrice,
                paymentMethod: selectedPayment,
              }),
            });

            if (!response.ok) {
              throw new Error("Failed to create order");
            } else {
              const data = await response.json();
              setOrderId(data._id);
            }
          } catch (error) {
            console.error("Failed to create order", error);
            alert("Failed to create order");
            return;
          }
        }

        // setShowNotification(true);
        // setNotifMessage({
        //   type: "info",
        //   message: `Order placed successfully, please wait & check the order status in basket icon`,
        // });
        alert(
          "Order placed successfully, please wait & check the order status in basket icon"
        );
        setCart([]);
        localStorage.setItem("cart", JSON.stringify([]));
        // reload page
        window.location.reload();
      } else {
        // !production
        setShowNotification(true);
        setNotifMessage({
          type: "info",
          message: "Midtrans payment is not available for production",
        });
        // setCart([]);
        // localStorage.setItem("cart", JSON.stringify([]));
        // redirect to list order page
        // window.location.href = `/order/${orderId}`;

        // !development

        // Generate order items
        // const orderItems = cart.map((item) => ({
        //   productId: item._id,
        //   amount: item.quantity,
        //   price: parseFloat(item.price),
        // }));

        // Create order in the database
        // if payment failed but order created, don't create order again
        // if (failedPayment === false) {
        //   try {
        //     const response = await fetch(`${import.meta.env.VITE_API_ORDER}`, {
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       credentials: "include", // Include credentials to send cookies automatically
        //       body: JSON.stringify({
        //         userId: user.id,
        //         items: orderItems,
        //         totalPrice: totalPrice,
        //         paymentMethod: selectedPayment,
        //       }),
        //     });

        //     if (!response.ok) {
        //       throw new Error("Failed to create order");
        //     } else {
        //       const data = await response.json();
        //       setOrderId(data._id);
        //     }
        //   } catch (error) {
        //     console.error("Failed to create order", error);
        //     alert("Failed to create order");
        //     return;
        //   }
        // }

        // try {
        //   const response = await fetch(`${import.meta.env.VITE_API_PAYMENT}`, {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       orderId: orderId,
        //       totalPrice: totalPrice,
        //       customerDetails,
        //       paymentMethod: selectedPayment,
        //     }),
        //     credentials: "include",
        //   });

        //   if (!response.ok) {
        //     throw new Error("Failed to initiate payment");
        //   }

        //   const data = await response.json();
        //   const { token, redirect_url } = data;
        //   console.log("Payment Token: " + token);

        //   // !DONT FORGET
        //   setSnapShow(true);

        //   snapEmbed(token, "snap-container", {
        //     onSuccess: (result) => {
        //       alert("Payment Success: " + JSON.stringify(result));
        //       // give navigation to the next page
        //       setSnapShow(false);
        //       redirect(redirect_url);
        //     },
        //     onPending: (result) => {
        //       alert("Payment Pending: " + JSON.stringify(result));
        //       setSnapShow(false);
        //     },
        //     onError: (result) => {
        //       alert("Payment Failed: " + JSON.stringify(result));
        //       setSnapShow(false);
        //     },
        //     onClose: () => {
        //       alert("Payment popup closed");
        //       setSnapShow(false);
        //     },
        //   });

        //   setCart([]);
        //   setFailedPayment(false);
        //   localStorage.setItem("cart", JSON.stringify([]));
        // } catch (error) {
        //   console.error("Failed to initiate payment", error);
        //   // alert("Failed to initiate payment");
        //   setFailedPayment(true);
        // }
      }
    }
  };

  return (
    <>
      {/* Order Title */}
      <Title
        bgSrc="/images/orderBG.svg"
        title="Order Details"
        subtitle="One last step, don’t worry!"
      />
      {!snapShow && (
        <div className="w-full min-h-[32vw] mx-auto px-4 py-8">
          {/* Order Summary */}
          <div className="bg-white p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-poppins font-bold">Order Summary</h2>
              <button
                style={{ color: "#FFDE4D" }}
                className="pt-4 font-poppins font-medium text-xl"
                onClick={() => {
                  window.location.href = "/products";
                }}
              >
                + Add More
              </button>
            </div>

            <div className="space-y-3">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between items-center bg-gray-80 rounded pb-4 pt-4 pl-4 pr-4 outline outline-zinc outline-2"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600 font-inter font-bold">
                        {item.quantity}x
                      </span>
                      <div>
                        <h3 className="font-poppins font-medium">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 font-light">
                          {item.variant}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold font-inter">
                        IDR{item.price.toLocaleString()}
                      </span>
                      <button className="text-yellow-500">
                        <Trash
                          className="w-6 h-6"
                          color="#FFDE4D"
                          onClick={() => handleRemoveItem(item._id)}
                        />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center text-gray-500 font-inter font-medium text-[1vw] h-[7.2vw]">
                  <p>
                    {" "}
                    No items in the cart, go to page product{" "}
                    <a href="/products" className="text-[#29b5fb]">
                      here
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* Payment Method Option */}
          <h2 className="text-3xl font-poppins font-bold ml-6">
            Payment Method
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 mx-[1vw]">
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="E-Wallet"
                  checked={selectedPayment === "E-Wallet"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="form-radio text-yellow"
                />
                <span className="font-inter font-medium">E-Wallet</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="Cash"
                  checked={selectedPayment === "Cash"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="form-radio text-yellow"
                ></input>
                <span className="font-inter font-medium">Cash</span>
              </label>
            </div>
          </div>
          {/* Payment Confirmation Button */}
          <div className="bg-yellow rounded-lg p-2 mx-[1vw]">
            <div className="flex justify-between items-center p-4 ">
              <span className="font-bold font-poppins flex items-center justify-between">
                Total Price: IDR{totalPrice.toLocaleString()}
              </span>
              <button
                onClick={handlePlaceOrder}
                className="font-poppins flex items-center bg-yellow text-black py-3 rounded-lg font-bold hover:bg-yellow transition-colors"
              >
                Proceed to Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Snap Container */}
      <div id="snap-container"></div>
      {/* in order to better UI payment when fullscreen */}
      {snapShow && <span className="mb-[2vw]"></span>}
      {/* Notification */}
      {showNotification && (
        <NotificationBanner
          type={notifMessage.type}
          message={notifMessage.message}
        />
      )}
    </>
  );
};

export default OrderPage;
