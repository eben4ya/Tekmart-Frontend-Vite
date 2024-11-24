import bengBengUrl from "../../assets/Beng-Beng.png";
import OrderButton from "./OrderButton";
import ProductDetail from "./ProductDetail";
import NotificationBanner from "../AllPage/NotificationBanner";

import { useState, useEffect, useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

const dummyFoods = [
  { id: 1, image: bengBengUrl, name: "Beng-Beng", price: "IDR4.000,00" },

  { id: 2, image: bengBengUrl, name: "Chitato", price: "IDR12.000,00" },
  { id: 3, image: bengBengUrl, name: "Oreo", price: "IDR8.000,00" },

  { id: 4, image: bengBengUrl, name: "Sari Roti", price: "IDR10.000,00" },

  { id: 5, image: bengBengUrl, name: "SilverQueen", price: "IDR15.000,00" },
  { id: 6, image: bengBengUrl, name: "Indomie", price: "IDR2.500,00" },
];

const dummyDrinks = [
  { id: 7, image: bengBengUrl, name: "Coca-Cola", price: "IDR7.000,00" },
  { id: 8, image: bengBengUrl, name: "Pepsi", price: "IDR6.500,00" },
  { id: 9, image: bengBengUrl, name: "Fanta", price: "IDR6.000,00" },
  { id: 10, image: bengBengUrl, name: "Sprite", price: "IDR6.000,00" },
  { id: 11, image: bengBengUrl, name: "Milo", price: "IDR5.000,00" },
  { id: 12, image: bengBengUrl, name: "Cimory", price: "IDR7.000,00" },
  { id: 13, image: bengBengUrl, name: "Nutrisari", price: "IDR1.500,00" },
];

const dummyMedicines = [
  { id: 14, image: bengBengUrl, name: "Paracetamol", price: "IDR5.000,00" },
  { id: 15, image: bengBengUrl, name: "Bodrex", price: "IDR4.500,00" },
  { id: 16, image: bengBengUrl, name: "Mixagrip", price: "IDR6.000,00" },
];

const dummyStationeries = [
  { id: 17, image: bengBengUrl, name: "Pensil", price: "IDR2.000,00" },
  { id: 18, image: bengBengUrl, name: "Penghapus", price: "IDR1.000,00" },
  { id: 19, image: bengBengUrl, name: "Buku Tulis", price: "IDR5.000,00" },
];

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const { cart, setCart, showNotification, setShowNotification } =
    useContext(OrderContext);

  useEffect(() => {
    if (selectedProduct) {
      const productInCart = cart.find((item) => item.id === selectedProduct.id);
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
      (item) => item.id === product.id
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
            key={product.id}
            className={`flex flex-col border rounded-xl items-center md:text-md lg:text-lg xl:text-xl p-5 cursor-pointer min-w-[210px] ${
              cart.some((item) => item.id === product.id) ? "bg-yellow" : ""
            }`}
            onClick={() => handleCardClick(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-contain"
            />
            <h1 className="font-bold text-lg">{product.name}</h1>
            <h1 className="text-md">{product.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full h-full px-[1.56vw] mt-[6.61vw] mb-[2.92vw]">
      {/* Foods Product */}
      {renderProducts("Foods", dummyFoods)}

      {/* Drinks Product */}
      {renderProducts("Drinks", dummyDrinks)}

      {/* Medicines Product */}
      {renderProducts("Medicines", dummyMedicines)}

      {/* Stationeries Product */}
      {renderProducts("Stationeries", dummyStationeries)}

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
