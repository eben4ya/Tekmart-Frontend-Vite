import React, { useState, useEffect } from "react";
import bengBengUrl from "../../assets/Beng-Beng.png";

const dummyProducts = [
    { id: 1, image: bengBengUrl, name: "Beng-Beng", price: "IDR4.000,00" },
    { id: 2, image: bengBengUrl, name: "Sprite", price: "IDR6.000,00" },
    { id: 3, image: bengBengUrl, name: "Chitato", price: "IDR12.000,00" },
    { id: 4, image: bengBengUrl, name: "Oreo", price: "IDR8.000,00" },
    { id: 5, image: bengBengUrl, name: "Milo", price: "IDR5.000,00" },
    { id: 6, image: bengBengUrl, name: "Sari Roti", price: "IDR10.000,00" },
    { id: 7, image: bengBengUrl, name: "Cimory", price: "IDR7.000,00" },
    { id: 8, image: bengBengUrl, name: "SilverQueen", price: "IDR15.000,00" },
    { id: 9, image: bengBengUrl, name: "Indomie", price: "IDR2.500,00" },
    { id: 10, image: bengBengUrl, name: "Nutrisari", price: "IDR1.500,00" }
];

const ProductCard = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (selectedProduct) {
            const productInCart = cart.find(item => item.id === selectedProduct.id);
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
        const productIndex = updatedCart.findIndex(item => item.id === product.id);

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

    return (
        <div>
            <div className="flex flex-wrap w-screen md:px-6 lg:px-7 xl:px-8 font-poppins">
                {dummyProducts.map((product) => (
                    <div
                        key={product.id}
                        className={`flex flex-col border rounded-xl items-center md:text-md lg:text-lg xl:text-xl md:w-[210px] lg:w-[211px] xl:w-[213px] md:py-5 lg:py-6 xl:py-7 cursor-pointer m-2 ${
                            cart.some(item => item.id === product.id) ? 'bg-yellow' : ''
                        }`}
                        onClick={() => handleCardClick(product)}
                    >
                        <img src={product.image} alt={product.name} />
                        <h1 className="font-bold">{product.name}</h1>
                        <h1>{product.price}</h1>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative flex flex-col items-center md:space-y-2 lg:space-y-4 xl:space-y-[18px] md:size-[300px] lg:size-[400px] xl:size-[563px] bg-white rounded-[14px] md:px-16 lg:px-[88px] xl:px-[90px] md:pt-3.5 lg:pt-3.5 xl:pt-8 md:pb-[71px] lg:pb-[73px] xl:pb-[75px] font-bold">
                        <button type="button" className="absolute md:-right-5 lg:-right-6 md:-top-5 lg:-top-6 bg-yellow rounded-full md:size-10 lg:size-14 xl:size-16 md:text-2xl lg:text-3xl xl:text-[43px] cursor-pointer" onClick={closeModal}>
                            <a className="leading-none" href="">X</a>
                        </button>
                        <img className="w-full" src={selectedProduct.image} alt={selectedProduct.name} />
                        <h1 className="md:text-2xl lg:text-3xl xl:text-[40px]">{selectedProduct.name}</h1>
                        <h1 className="md:text-md lg:text-lg xl:text-xl font-normal">{selectedProduct.price}</h1>
                        <div className="flex items-center justify-center space-x-2.5 md:text-lg lg:text-xl xl:text-[24px]">
                            <button className="border md:size-[29.3px] xl:size-[44px]" onClick={decrementQuantity}>-</button>
                            <div className="flex items-center justify-center border md:size-[29.3px] xl:size-[44px]">
                                <h1>{quantity}</h1>
                            </div>
                            <button className="border md:size-[29.3px] xl:size-[44px]" onClick={incrementQuantity}>+</button>
                        </div>
                        <button type="button" className="bg-yellow md:rounded-xl lg:rounded-2xl xl:rounded/[23px] md:px-5 lg:px-7 xl:px/[30px] md:py-2 lg:py-3.5 xl:py/[18px] md:text-lg lg:text-xl xl:text/[26px] cursor-pointer hover:bg-yellow hover:text-black active:text-white active:bg-yellow mt-4" onClick={() => addToCart(selectedProduct, quantity)}>
                            Add to Orders
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCard;