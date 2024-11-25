import Title from "../AllPage/Title";
import ProductsUrl from "/images/dashboard1.png";
import OrderUrl from "/images/dashboard2.png";
import PaymentUrl from "/images/dashboard3.png";
import AddProductModal from './AddProductModal'; 
import EditProductModal from "./EditProductModal";

const Dashboard = () => {
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);  // State for Edit Product Modal

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

  return (
    <>
      <Title
        bgSrc="/images/AdminDashboard.png"
        title="Admin Dashboard"
        subtitle="Where admin could edit the inventory of their products."
      />
      <div className="flex md:flex-row w-screen md:px-6 lg:px-7 xl:px-8 md:text-2xl lg:text-[32px] xl:text-[38px] font-bold font-poppins mx-4 my-10">
        <div
          className="relative group flex justify-center items-center w-1/3 aspect-[11/11.5] bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url(${ProductsUrl})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 rounded-xl"></div>
          <h1 className="text-white z-10">Products</h1>
        </div>
        <div
          className="relative group flex justify-center items-center w-1/3 md:mx-4 lg:mx-5 xl:mx-6 aspect-[11/11.5] bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url(${OrderUrl})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 rounded-xl"></div>
          <h1 className="ms-2.5 text-white z-10">Order</h1>
        </div>
        <div
          className="relative group flex justify-center items-center w-1/3 aspect-[11/11.5] bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url(${PaymentUrl})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 rounded-xl"></div>
          <h1 className="text-white z-10 text-center">
            Payment
            <br /> History
          </h1>
        </div>
      </div>

      
      {/* Floating Button for Adding Product */}
      <button
        onClick={openAddProductModal}
        className="absolute bg-yellow text-black py-4 px-8 rounded-full shadow-lg z-50"
        style={{
          top: '500px', // Fixed vertical position
          left: '500px', // Fixed horizontal position
        }}
      >
        Add Product
      </button>

      {/* Floating Button for Editing Product */}
      <button
        onClick={openEditProductModal}
        className="absolute bg-yellow text-black py-4 px-8 rounded-full shadow-lg z-50"
        style={{
          top: '600px', // Slightly below the Add Product button
          left: '500px', // Fixed horizontal position
        }}
      >
        Edit Product
      </button>

      {/* Add Product Modal */}
      {isAddProductModalOpen && <AddProductModal closeModal={closeAddProductModal} />}

      {/* Edit Product Modal */}
      {isEditProductModalOpen && <EditProductModal closeModal={closeEditProductModal} />}
    </>
  );
};

export default Dashboard;
