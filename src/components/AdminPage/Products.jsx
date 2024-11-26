import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";

import { useState } from "react";

const dummyFoods = [
  { id: 1, name: "Beng Beng", price: "IDR4.000,00" },
  { id: 2, name: "Risol", price: "IDR3.000,00" },
];

const dummyDrinks = [
  { id: 3, name: "Sprite Zero", price: "IDR4.000,00" },
  { id: 4, name: "Coca-Cola", price: "IDR3.000,00" },
];

const dummyMedicines = [
  { id: 5, name: "Band-aid", price: "IDR4.000,00" },
  { id: 6, name: "Tolak Angin", price: "IDR3.000,00" },
];

const dummyStationeries = [
  { id: 7, name: "Pencil", price: "IDR4.000,00" },
  { id: 8, name: "Eraser", price: "IDR3.000,00" },
];

const Products = () => {
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false); // State for Edit Product Modal

  // Function to open the Add Product Modal
  const openAddProductModal = () => {
    setIsAddProductModalOpen(true);
  };

  // Function to close the Add Product Modal
  const closeAddProductModal = () => {
    setIsAddProductModalOpen(false);
  };

  // Function to open the Edit Product Modal
  const openEditProductModal = () => {
    setIsEditProductModalOpen(true);
  };

  // Function to close the Edit Product Modal
  const closeEditProductModal = () => {
    setIsEditProductModalOpen(false);
  };
  const renderProducts = (title, products) => {
    return (
      <div className="flex flex-col w-full md:px-6 lg:px-7 xl:px-[1vw] font-poppins mb-[2.5vw]">
        <h1 className="text-[2.08vw] font-bold mb-[1.67vw]">{title}</h1>
        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-row justify-between items-center border rounded-2xl ps-6 pe-10 py-5"
            >
              <div className="text-xl">
                <h1 className="font-bold">{product.name}</h1>
                <h1>{product.price}</h1>
              </div>
              <button
                type="button"
                onClick={openEditProductModal}
                className="bg-yellow md:rounded-xl md:px-14 md:py-0.5 lg:py-1 xl:py-2.5 md:text-xs lg:text-sm xl:text-base font-bold cursor-pointer hover:bg-yellow hover:text-black active:text-white active:bg-yellow"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full flex flex-col items-center px-[1.56vw] mt-[6.61vw] mb-[2.92vw]">
      {renderProducts("Foods", dummyFoods)}
      {renderProducts("Drinks", dummyDrinks)}
      {renderProducts("Medicines", dummyMedicines)}
      {renderProducts("Stationeries", dummyStationeries)}

      {/* Add Product Modal */}
      {isAddProductModalOpen && (
        <AddProductModal closeModal={closeAddProductModal} />
      )}

      {/* Edit Product Modal */}
      {isEditProductModalOpen && (
        <EditProductModal closeModal={closeEditProductModal} />
      )}
      {/* Floating Button for Adding Product */}
      <button
        onClick={openAddProductModal}
        className="bg-yellow font-bold text-black text-[1.51vw] w-[28.75vw] aspect-[552/88] px-[1vw] rounded-[1.77vw] shadow-lg "
      >
        Click Here to Add More Items
      </button>
    </div>
  );
};

export default Products;
