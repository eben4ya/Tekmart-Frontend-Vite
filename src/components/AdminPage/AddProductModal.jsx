import ProductContext from "../../context/ProductContext";

import { useState, useContext } from "react";

const AddProductModal = ({ closeModal }) => {
  const { addProduct } = useContext(ProductContext);
  const [productDetailLocal, setProductDetailLocal] = useState({
    picture: "",
    category: "",
    name: "",
    description: "",
    stock: 0,
    price: 0,
  });

  const handleChange = (e, field) => {
    // uncomment this line if you want to handle file upload
    // const value = field === "picture" ? e.target.files[0] : e.target.value;
    const value = e.target.value;
    setProductDetailLocal({
      ...productDetailLocal,
      [field]: value,
    });
  };

  const handleSaveProduct = async () => {
    await addProduct(productDetailLocal);
    // Close modal after successful save
    closeModal();

    setProductDetailLocal({
      picture: "",
      category: "",
      name: "",
      description: "",
      stock: 0,
      price: 0,
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg p-8 w-full max-w-[900px]">
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-[-20px] right-[-20px] bg-yellow rounded-full w-12 h-12 flex items-center justify-center text-black font-bold text-[30px]"
          onClick={closeModal}
        >
          X
        </button>

        <h2 className="text-3xl font-poppins font-bold mb-6 text-center">
          Add Product
        </h2>

        <div className="space-y-8 max-w-[700px] mx-auto">
          {/* Product Picture */}
          <div>
            <label className="block text-lg font-poppins font-bold mb-2">
              Product Picture
            </label>
            <div className="flex items-center border border-gray rounded-lg px-6 py-3 w-full">
              <input
                // type="file"
                type="text"
                // accept="image/*"
                // className="font-poppins font-normal flex-grow"
                className="font-poppins font-normal flex-grow border-none focus:outline-none"
                placeholder="Add A Hosting URL Here"
                value={productDetailLocal.picture || ""}
                onChange={(e) => handleChange(e, "picture")}
              />
            </div>
          </div>

          {/* Product Category */}
          <div>
            <label className="block text-lg font-poppins font-bold mb-2">
              Product Category
            </label>
            <div className="flex items-center border border-gray rounded-lg px-6 py-3 w-full text-black">
              <input
                type="text"
                className="font-poppins font-normal flex-grow border-none focus:outline-none"
                placeholder="Add A Category Here"
                value={productDetailLocal.category || ""}
                onChange={(e) => handleChange(e, "category")}
              />
            </div>
          </div>

          {/* Product Name */}
          <div>
            <label className="block text-lg font-poppins font-bold mb-2">
              Product Name
            </label>
            <div className="flex items-center border border-gray rounded-lg px-6 py-3 w-full text-black">
              <input
                type="text"
                className="font-poppins font-normal flex-grow border-none focus:outline-none"
                placeholder="Add A Name Here"
                value={productDetailLocal.name || ""}
                onChange={(e) => handleChange(e, "name")}
              />
            </div>
          </div>

          {/* Product Description */}
          <div>
            <label className="block text-lg font-poppins font-bold mb-2">
              Product Description
            </label>
            <div className="flex items-center border border-gray rounded-lg px-6 py-3 w-full text-black">
              <input
                type="text"
                className="font-poppins font-normal flex-grow border-none focus:outline-none"
                placeholder="Add A Description Here"
                value={productDetailLocal.description || ""}
                onChange={(e) => handleChange(e, "description")}
              />
            </div>
          </div>

          {/* Product Stock */}
          <div>
            <label className="block text-lg font-poppins font-bold mb-2">
              Product Stock
            </label>
            <div className="flex items-center border border-gray rounded-lg px-6 py-3 w-full text-black">
              <input
                type="number"
                className="font-poppins font-normal flex-grow border-none focus:outline-none"
                placeholder="Add A Stock Here"
                value={productDetailLocal.stock || ""}
                onChange={(e) => handleChange(e, "stock")}
              />
            </div>
          </div>

          {/* Product Price */}
          <div>
            <label className="block text-lg font-poppins font-bold mb-2">
              Product Price
            </label>
            <div className="flex items-center border border-gray rounded-lg px-6 py-3 w-full text-black">
              <input
                type="number"
                className="font-poppins font-normal flex-grow border-none focus:outline-none"
                placeholder="Add A Price Here"
                value={productDetailLocal.price || ""}
                onChange={(e) => handleChange(e, "price")}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <button
            className="bg-yellow text-black py-4 px-8 rounded-[13px] font-poppins font-bold"
            onClick={handleSaveProduct}
          >
            Save Product
          </button>
          <button
            className="bg-black text-white py-4 px-8 rounded-[13px] font-poppins font-bold"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
