import ProductContext from "../../context/ProductContext";

import { useState, useContext } from "react";

const EditProductModal = ({ closeModal }) => {
  const { productDetail, handleChangeEditedProduct, clickedProductId } =
    useContext(ProductContext);

  const handleSaveProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("name", productDetail.name);
      formData.append("description", productDetail.description);
      formData.append("price", productDetail.price);
      formData.append("stock", productDetail.stock);
      formData.append("category", productDetail.category);
      if (productDetail.picture) {
        formData.append("imageUrl", productDetail.picture);
      }

      const response = await fetch(
        `https://tekmart-backend-kholil-as-projects.vercel.app/api/product/${clickedProductId}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Product updated successfully:", data);

      // Close modal after successful save
      closeModal();
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product. Please try again.");
    }
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
          Edit Product
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
                value={productDetail.imageUrl || ""}
                onChange={(e) => handleChangeEditedProduct(e, "picture")}
              />
            </div>
          </div>

          {/* Product Category */}
          <div>
            <label className="block text-lg font-poppins font-bold mb-2">
              Product Category
            </label>
            <div className="flex items-center border border-gray rounded-lg px-6 py-3 w-full">
              <input
                type="text"
                className="font-poppins font-normal flex-grow border-none focus:outline-none"
                placeholder="Add A Category Here"
                value={productDetail.category || ""}
                onChange={(e) => handleChangeEditedProduct(e, "category")}
              />
            </div>
          </div>

          {/* Product Name */}
          <div>
            <label className="block text-lg font-poppins font-bold mb-2">
              Product Name
            </label>
            <div className="flex items-center border border-gray rounded-lg px-6 py-3 w-full">
              <input
                type="text"
                className="font-poppins font-normal flex-grow border-none focus:outline-none"
                placeholder="Add A Name Here"
                value={productDetail.name || ""}
                onChange={(e) => handleChangeEditedProduct(e, "name")}
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
                value={productDetail.description || ""}
                onChange={(e) => handleChangeEditedProduct(e, "description")}
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
                value={productDetail.stock || ""}
                onChange={(e) => handleChangeEditedProduct(e, "stock")}
              />
            </div>
          </div>

          {/* Product Price */}
          <div>
            <label className="block text-lg font-poppins font-bold mb-2">
              Product Price
            </label>
            <div className="flex items-center border border-gray rounded-lg px-6 py-3 w-full">
              <input
                type="number"
                className="font-poppins font-normal flex-grow border-none focus:outline-none"
                placeholder="Add A Price Here"
                value={productDetail.price || ""}
                onChange={(e) => handleChangeEditedProduct(e, "price")}
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

export default EditProductModal;
