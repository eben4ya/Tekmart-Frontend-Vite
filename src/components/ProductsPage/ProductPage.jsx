import bengBengUrl from "../../assets/Beng-Beng.png";
import OrderButton from "./OrderButton";
import ProductDetail from "./ProductDetail";
import NotificationBanner from "../AllPage/NotificationBanner";

import { useState, useEffect, useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

const dummyFoods = [
  { id: 1, image: bengBengUrl, name: "Beng-Beng", price: 4000 },

  { id: 2, image: bengBengUrl, name: "Chitato", price: 12000 },
  { id: 3, image: bengBengUrl, name: "Oreo", price: 8000 },

  { id: 4, image: bengBengUrl, name: "Sari Roti", price: 10000 },

  { id: 5, image: bengBengUrl, name: "SilverQueen", price: 15000 },
  { id: 6, image: bengBengUrl, name: "Indomie", price: 6000 },
];

const dummyDrinks = [
  { id: 7, image: bengBengUrl, name: "Coca-Cola", price: 7000 },
  { id: 8, image: bengBengUrl, name: "Pepsi", price: 6500 },
  { id: 9, image: bengBengUrl, name: "Fanta", price: 6000 },
  { id: 10, image: bengBengUrl, name: "Sprite", price: 6000 },
  { id: 11, image: bengBengUrl, name: "Milo", price: 5000 },
  { id: 12, image: bengBengUrl, name: "Cimory", price: 7000 },
  { id: 13, image: bengBengUrl, name: "Nutrisari", price: 15000 },
];

const dummyMedicines = [
  { id: 14, image: bengBengUrl, name: "Paracetamol", price: 5000 },
  { id: 15, image: bengBengUrl, name: "Bodrex", price: 4500 },
  { id: 16, image: bengBengUrl, name: "Mixagrip", price: 6000 },
];

const dummyStationeries = [
  { id: 17, image: bengBengUrl, name: "Pensil", price: 2000 },
  { id: 18, image: bengBengUrl, name: "Penghapus", price: 1000 },
  { id: 19, image: bengBengUrl, name: "Buku Tulis", price: 5000 },
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
            <h1 className="text-md">IDR{product.price},00</h1>
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
