import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";
import { OrderContext } from "../../context/OrderContext";

const Navbar = () => {
  const { isLoggedIn, handleLogout, user } = useContext(AuthContext);
  const {cart} = useContext(OrderContext);
  const location = useLocation();

  return (
    <nav className="absolute top-0 left-0 w-full z-10 p-4 md:px-10 md:py-6">
      <div className="flex item-center justify-between">
        <ul className="flex-1 md:flex md:text-l text-white font-poppins">
          <li
            className={`self-center cursor-pointer ${
              location.pathname === "/products" ||
              location.pathname === "/admin/products"
                ? "text-black"
                : ""
            }`}
          >
            <a href="/">Home</a>
          </li>
          <li
            className={`self-center md:ms-9 cursor-pointer ${
              location.pathname === "/products" ||
              location.pathname === "/admin/products"
                ? "text-black"
                : ""
            }`}
          >
            <a href={user.isAdmin ? "/admin/products" : "/about"}>
              {user.isAdmin ? "Products" : "About"}
            </a>
          </li>
          <li
            className={`self-center md:ms-9 cursor-pointer ${
              location.pathname === "/products" ||
              location.pathname === "/admin/products"
                ? "text-black"
                : ""
            }`}
          >
            <a href={user.isAdmin ? "/admin/orders" : "/products"}>
              {user.isAdmin ? "Order" : "Product"}
            </a>
          </li>
          <li
            className={`self-center md:ms-9 cursor-pointer ${
              location.pathname === "/products" ||
              location.pathname === "/admin/products"
                ? "text-black"
                : ""
            }`}
          >
             <a href={user.isAdmin ? "/admin/paymenthistory" : cart.length  === 0 ? "/order/errorNoItem" : "/order"}>
              {user.isAdmin ? "Payment History" : "Order"}
            </a>
          </li>
        </ul>
        <div className="flex item-center justify-center md:text-4xl font-vinque pb-2">
          <h1 className="text-yellow">Teknik</h1>
          <h1
            className={`${
              location.pathname === "/products" ||
              location.pathname === "/admin/products"
                ? "text-black"
                : "text-white"
            } ms-5`}
          >
            Mart
          </h1>
        </div>
        <div className="flex-1 flex item-center justify-end">
          <button
            type="button"
            className={`${
              location.pathname === "/products"
                ? "bg-yellow outline-white hover:bg-[#E3D531] active:bg-[#FFEE2A] "
                : "bg-white outline-white hover:bg-yellow active:bg-yellow "
            } self-center  md:rounded-xl md:px-7 md:py-2.5 md:text-sm font-poppins font-bold cursor-pointer`}
          >
            {isLoggedIn ? (
              <a href="/" onClick={handleLogout}>
                Logout
              </a>
            ) : (
              <a href="/login">Login</a>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
