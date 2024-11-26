import foodsUrl from "../../assets/images/Foods.png";
import drinksUrl from "../../assets/images/Drinks.png";
import medicinesUrl from "../../assets/images/Medicines.png";
import stationeriesUrl from "../../assets/images/Stationaries.png";

const ProductCategoriesCard = () => {
    return (
        <div className="flex md:flex-col font-bold font-poppins">
            <div className="flex flex-row justify-between w-screen md:px-6 lg:px-7 xl:px-8 md:mt-8 lg:mt-9 xl:mt-10 md:mb-7 lg:mb-8 xl:mb-9">
                <h1 className="text-8xl">Products</h1>
                <div className="flex flex-col items-end">
                    <p className="md:text-md lg:text-lg xl:text-xl text-right font-semibold">In case you are wondering what kind of things</p>
                    <p className="md:text-md lg:text-lg xl:text-xl text-right font-semibold"> that we have!</p>
                </div>
            </div>
            <div className="flex md:flex-row w-screen md:px-6 lg:px-7 xl:px-8 md:text-xl lg:text-2xl xl:text-3xl">
                <div className="relative group flex justify-center items-center w-1/4 aspect-[11/15.5] bg-cover bg-center rounded-xl me-5" style={{ backgroundImage: `url(${foodsUrl})` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 rounded-xl"></div>
                    <h1 className="text-white z-10">Foods</h1>
                </div>
                <div className="relative group flex justify-center items-center w-1/4 aspect-[11/15.5] bg-cover bg-center rounded-xl mx-2.5" style={{ backgroundImage: `url(${drinksUrl})` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 rounded-xl"></div>
                    <h1 className="text-white z-10">Drinks</h1>
                </div>
                <div className="relative group flex justify-center items-center w-1/4 aspect-[11/15.5] bg-cover bg-center rounded-xl mx-2.5" style={{ backgroundImage: `url(${medicinesUrl})` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 rounded-xl"></div>
                    <h1 className="text-white z-10">Medicines</h1>
                </div>
                <div className="relative group flex justify-center items-center w-1/4 aspect-[11/15.5] bg-cover bg-center rounded-xl ms-5" style={{ backgroundImage: `url(${stationeriesUrl})` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 rounded-xl"></div>
                    <h1 className="text-white z-10">Stationeries</h1>
                </div>
            </div>
        </div>
        
    )
}

export default ProductCategoriesCard;