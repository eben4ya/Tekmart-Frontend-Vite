import foodsUrl from "../../assets/images/Foods.png";
import drinksUrl from "../../assets/images/Drinks.png";
import medicinesUrl from "../../assets/images/Medicines.png";
import stationeriesUrl from "../../assets/images/Stationaries.png";

const ProductCategoriesCard = () => {
    return (
        <div className="flex md:flex-row w-screen md:px-6 lg:px-7 xl:px-8 md:text-xl lg:text-2xl xl:text-3xl font-bold font-poppins">
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
    )
}

export default ProductCategoriesCard;