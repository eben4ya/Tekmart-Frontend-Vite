const ProductPage = () => {
  return (
    <>
      <div className="w-full max-h-4 mx-auto px-4 py-8">
      {/* Food Card */}

      {/* Food Drinks */}

      {/* Food Medicines */}

      {/* Food Stationaries */}

      {/* Selected Items Configuration */}
      <div className='bg-yellow rounded-lg p-2 '> 
            <div className='flex justify-between items-center p-4 '>
              <span className="font-bold font-poppins flex items-center justify-between">2 Items Selected
              </span>
              <button
              /* onClick={handlePlaceOrder} */
              className='font-poppins flex items-center bg-yellow text-black py-3 rounded-lg font-bold hover:bg-yellow transition-colors'>
                Proceed to Order
            </button>
            </div> 
            
            
          </div>
      </div>
    </>
  );
};

export default ProductPage;
