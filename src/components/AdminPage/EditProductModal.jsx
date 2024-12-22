import ProductContext from "../../context/ProductContext";

import { useContext } from "react";

const EditProductModal = ({ closeModal }) => {
  const {
    productDetailGlobal,
    handleChangeEditedProduct,
    clickedProductId,
    setProductDetailGlobal,
    editProduct,
  } = useContext(ProductContext);

  const handleSaveEditedProduct = async () => {
    await editProduct(clickedProductId, productDetailGlobal);

    // Close modal after successful save
    closeModal();

    setProductDetailGlobal({
      id: "",
      description: "",
      name: "",
      price: 0,
      stock: 0,
      imageUrl: "",
      category: "",
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
                value={productDetailGlobal.imageUrl || ""}
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
                value={productDetailGlobal.category || ""}
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
                value={productDetailGlobal.name || ""}
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
                value={productDetailGlobal.description || ""}
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
                value={productDetailGlobal.stock || ""}
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
                value={productDetailGlobal.price || ""}
                onChange={(e) => handleChangeEditedProduct(e, "price")}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <button
            className="bg-yellow text-black py-4 px-8 rounded-[13px] font-poppins font-bold"
            onClick={handleSaveEditedProduct}
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
