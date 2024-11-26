import React, { useState } from 'react';

const EditProductModal = ({ closeModal }) => {
  const [productDetails, setProductDetails] = useState({
    picture: '',
    category: '',
    name: '',
    price: '',
  });

  const handleChange = (e, field) => {
    setProductDetails({
      ...productDetails,
      [field]: e.target.value,
    });
  }; //blm kepake karna blm ada produknya (?)

  const handleSaveProduct = () => {
    // Logic to save the product (e.g., making an API call)
    console.log('Product details saved:', productDetails);
    closeModal(); 
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

        <h2 className="text-3xl font-poppins font-bold mb-6 text-center">Edit Product</h2>

        <div className="space-y-8 max-w-[700px] mx-auto">
          {/* Product Picture */}
          <div>
            <label className="block text-lg font-poppins font-bold mb-2">Product Picture</label>
            <div className="flex items-center border border-gray rounded-lg px-6 py-3 w-full">
              <span className="font-poppins font-normal flex-grow">{productDetails.picture || 'Add A Picture Here'}</span>
              <button
                className="bg-yellow text-black py-2 px-4 rounded-[13px] font-poppins font-bold shadow-[5px_7px_7px_rgba(0,0,0,0.3)]"
                onClick={() => alert('Edit picture')}
              >
                Edit
              </button>
            </div>
          </div>

          {/* Product Category */}
          <div>
            <label className="block text-lg font-poppins font-bold mb-2">Product Category</label>
            <div className="flex items-center border border-gray rounded-lg px-6 py-3 w-full">
              <span className="font-poppins font-normal flex-grow">{productDetails.category || 'Add A Category Here'}</span>
              <button
                className="bg-yellow text-black py-2 px-4 rounded-[13px] font-poppins font-bold shadow-[5px_7px_7px_rgba(0,0,0,0.3)]"
                onClick={() => alert('Edit category')}
              >
                Edit
              </button>
            </div>
          </div>

          {/* Product Name */}
          <div>
            <label className="block text-lg font-poppins font-bold mb-2">Product Name</label>
            <div className="flex items-center border border-gray rounded-lg px-6 py-3 w-full">
              <span className="font-poppins font-normal flex-grow">{productDetails.name || 'Add A Name Here'}</span>
              <button
                className="bg-yellow text-black py-2 px-4 rounded-[13px] font-poppins font-bold shadow-[5px_7px_7px_rgba(0,0,0,0.3)]"
                onClick={() => alert('Edit name')}
              >
                Edit
              </button>
            </div>
          </div>

          {/* Product Price */}
          <div>
            <label className="block text-lg font-poppins font-bold mb-2">Product Price</label>
            <div className="flex items-center border border-gray rounded-lg px-6 py-3 w-full">
              <span className="font-poppins font-normal flex-grow">{productDetails.price || 'Add A Price Here'}</span>
              <button
                className="bg-yellow text-black py-2 px-4 rounded-[13px] font-poppins font-bold shadow-[5px_7px_7px_rgba(0,0,0,0.3)]"
                onClick={() => alert('Edit price')}
              >
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <button
            className="bg-yellow text-black py-4 px-8 rounded-[13px] font-poppins font-bold"
            onClick={handleSaveProduct}
          >
            Edit Product
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