import mailImage from "../../assets/images/Mail.png";
import lineImage from "../../assets/images/Line.png";
import twitterImage from "../../assets/images/Twitter.png";
import instagramImage from "../../assets/images/Instagram.png";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { OrderContext } from "../../context/OrderContext";

const Footer = () => {
  const { user } = useContext(AuthContext);
  const { cart } = useContext(OrderContext);
  return (
    <footer className="relative bg-black text-white p-6 bottom-0 left-0 w-full font-poppins z-50">
      <div className="flex justify-between">
        <div>
          <h2 className="text-yellow text-3xl font-semibold mb-4">
            Reach Us Out
          </h2>
          <div className="pt-4">
            <div className="flex space-x-4">
              <div className="flex items-center justify-center bg-yellow rounded-full h-10 w-10">
                <img src={mailImage} className="h-5 w-7" />
              </div>
              <div className="flex items-center justify-center bg-yellow rounded-full h-10 w-10">
                <img src={lineImage} className="h-6 w-6" />
              </div>
              <div className="flex items-center justify-center bg-yellow rounded-full h-10 w-10">
                <a
                  href="https://www.instagram.com/teknikugm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagramImage} className="h-6 w-6" />
                </a>
              </div>
              <div className="flex items-center justify-center bg-yellow rounded-full h-10 w-10">
                <img src={twitterImage} className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-yellow text-3xl font-semibold mb-8">Navigate</h2>
          <div className="flex justify-between w-full">
            <ul className="space-y-2 pr-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href={user.isAdmin ? "/admin/products" : "/about"}>
                  {" "}
                  {user.isAdmin ? "Products" : "About"}
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a href={user.isAdmin ? "/admin/orders" : "/products"}>
                  {user.isAdmin ? "Order" : "Product"}
                </a>
              </li>
              <li>
                <a
                  href={
                    user.isAdmin
                      ? "/admin/paymenthistory"
                      : cart.length === 0
                      ? "/order/errorNoItem"
                      : "/order"
                  }
                >
                  {user.isAdmin ? "Payment History" : "Order"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="font-vinque text-3xl mt-6">
          <span className="text-yellow">Teknik</span>
          <span className="text-white"> Mart</span>
        </div>
      </div>

      <div
        className="bg-white"
        style={{
          position: "absolute",
          top: "42%",
          height: "3px",
          width: "75%",
        }}
      ></div>
    </footer>
  );
};

export default Footer;
