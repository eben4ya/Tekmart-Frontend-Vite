import Title from "../AllPage/Title";
import ProductsUrl from "/images/dashboard1.png";
import OrderUrl from "/images/dashboard2.png";
import PaymentUrl from "/images/dashboard3.png";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();

  const handleClick = (target) => {
    // Navigate to different routes based on the target argument
    if (target === 'products') {
      navigate('/admin/products');
    } else if (target === 'order') {
      navigate('/admin/orders');
    } else if (target === 'paymentHistory') {
      navigate('/admin/paymenthistory');
    }
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
          onClick={() => handleClick('products')}  
          className="relative group flex justify-center items-center w-1/3 aspect-[11/11.5] bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url(${ProductsUrl})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 rounded-xl"></div>
          <h1 className="text-white z-10">Products</h1>
        </div>
        <div
          onClick={() => handleClick('order')} 
          className="relative group flex justify-center items-center w-1/3 md:mx-4 lg:mx-5 xl:mx-6 aspect-[11/11.5] bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url(${OrderUrl})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 rounded-xl"></div>
          <h1 className="ms-2.5 text-white z-10">Order</h1>
        </div>
        <div
          onClick={() => handleClick('paymentHistory')} 
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
    </>
  );
};

export default Dashboard;
