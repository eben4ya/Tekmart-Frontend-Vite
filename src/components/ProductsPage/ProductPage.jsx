import { FaSpinner } from "react-icons/fa";

import OrderButton from "./OrderButton";
import ProductDetail from "./ProductDetail";
import NotificationBanner from "../AllPage/NotificationBanner";
import ProductContext from "../../context/ProductContext";

import { useState, useEffect, useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const { cart, setCart, showNotification, setShowNotification } =
    useContext(OrderContext);
  const { products, loading } = useContext(ProductContext);

  const categorizedProducts = products.reduce((acc, product) => {
    if (acc[product.category]) {
      acc[product.category].push(product);
    } else {
      acc[product.category] = [product];
    }
    return acc;
  }, {});

  useEffect(() => {
    if (selectedProduct) {
      const productInCart = cart.find((item) => item._id === selectedProduct._id);
      setQuantity(productInCart ? productInCart.quantity : 0);
    }
  }, [selectedProduct, cart]);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = (product, quantity) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (item) => item._id === product._id
    );

    if (quantity === 0) {
      if (productIndex > -1) {
        updatedCart.splice(productIndex, 1);
      }
    } else {
      if (productIndex > -1) {
        updatedCart[productIndex].quantity = quantity;
      } else {
        updatedCart.push({ ...product, quantity });
      }
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    closeModal();
    if (quantity > 0) setShowNotification(true);
  };

  // renderProducts function
  const renderProducts = (title, products) => (
    <div className="flex flex-col w-full md:px-6 lg:px-7 xl:px-[1vw] font-poppins mb-[2.5vw]">
      <h1 className="text-[2.08vw] font-bold mb-[1.67vw]">{title}</h1>
      <div className="flex overflow-x-auto space-x-[1.67vw]">
        {products.map((product) => (
          <div
            key={product._id}
            className={`flex flex-col border rounded-xl items-center md:text-md lg:text-lg xl:text-xl p-5 cursor-pointer min-w-[210px] ${
              cart.some((item) => item._id === product._id) ? "bg-yellow" : ""
            }`}
            onClick={() => handleCardClick(product)}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-32 h-32 object-contain"
            />
            <h1 className="font-bold text-lg">{product.name}</h1>
            <h1 className="text-md">IDR{product.price},00</h1>
          </div>
        ))}
        {loading && (
          <div className='w-[8.744vw] h-[9.76vw] flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center w-full h-[7.6536vw] rounded-[0.88vw]'>
              <FaSpinner className='text-[2vw] animate-spin text-primary' />
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full h-full px-[1.56vw] mt-[6.61vw] mb-[2.92vw]">
      {/* Foods Product */}
      {renderProducts("Foods", categorizedProducts.Foods || [])}

      {/* Drinks Product */}
      {renderProducts("Drinks", categorizedProducts.Drinks || [])}

      {/* Medicines Product */}
      {renderProducts("Medicines", categorizedProducts.Medicines || [])}

      {/* Stationeries Product */}
      {renderProducts("Stationeries", categorizedProducts.Stationaries || [])}

      {cart.length > 0 && (
        <OrderButton
          onClick={() => {
            window.location.href = "/order";
            console.log(cart);
          }}
          amount={cart.length}
        />
      )}

      {/* Selected Items Configuration */}
      {selectedProduct && (
        <ProductDetail
          closeModal={closeModal}
          decrementQuantity={decrementQuantity}
          incrementQuantity={incrementQuantity}
          addToCart={addToCart}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          quantity={quantity}
        />
      )}

      {showNotification && (
        <NotificationBanner type="info" message="Product added to cart below" />
      )}
    </div>
  );
};

export default ProductPage;
