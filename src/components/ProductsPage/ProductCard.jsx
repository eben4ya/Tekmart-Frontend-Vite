import { useState, useEffect } from "react";
import bengBengUrl from "../../assets/Beng-Beng.png";
import OrderButton from "./OrderButton";
import ProductDetail from "./ProductDetail";

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

const ProductCard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);

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
    closeModal();
  };

  // renderProducts function
  const renderProducts = (title, products) => (
    <div className="flex flex-wrap w-screen md:px-6 lg:px-7 xl:px-8 font-poppins">
      <h1>{title}</h1>
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex flex-col border rounded-xl items-center md:text-md lg:text-lg xl:text-xl md:w-[210px] lg:w-[211px] xl:w-[213px] md:py-5 lg:py-6 xl:py-7 cursor-pointer m-2 ${
            cart.some((item) => item.id === product.id) ? "bg-yellow" : ""
          }`}
          onClick={() => handleCardClick(product)}
        >
          <img src={product.image} alt={product.name} />
          <h1 className="font-bold">{product.name}</h1>
          <h1>{product.price}</h1>
        </div>
      ))}
    </div>
  );

  return (
    <div className="">
      {/* Foods Product */}
      {renderProducts("Foods", dummyFoods)}

      {/* Drinks Product */}
      {renderProducts("Drinks", dummyDrinks)}

      {/* Medicines Product */}
      {renderProducts("Medicines", dummyMedicines)}

      {/* Stationeries Product */}
      {renderProducts("Stationeries", dummyStationeries)}

      <OrderButton onClick={() => console.log(cart)} />

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
    </div>
  );
};

export default ProductCard;
