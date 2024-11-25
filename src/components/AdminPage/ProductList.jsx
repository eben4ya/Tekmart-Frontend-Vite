import React from 'react';

const dummyFoods = [
    { id: 1, name: "Beng-Beng", price: "IDR4.000,00" },
    { id: 2, name: "Chitato", price: "IDR12.000,00" },
    { id: 3, name: "Oreo", price: "IDR8.000,00" },
    { id: 4, name: "Sari Roti", price: "IDR10.000,00" },
    { id: 5, name: "SilverQueen", price: "IDR15.000,00" },
    { id: 6, name: "Indomie", price: "IDR2.500,00" },
];

const ProductList = () => {
    return (
        <div className="flex flex-col w-screen px-10 font-poppins space-y-4">
            {dummyFoods.map((product) => (
                <div key={product.id} className="flex flex-row justify-between border rounded-2xl ps-6 pe-10 py-5">
                    <div className="text-xl">
                        <h1 className="font-bold">{product.name}</h1>
                        <h1>{product.price}</h1>
                    </div>
                    <button type="button" className="bg-yellow md:rounded-xl md:px-14 md:py-0.5 lg:py-1 xl:py-2.5 md:text-xs lg:text-sm xl:text-base font-bold cursor-pointer hover:bg-yellow hover:text-black active:text-white active:bg-yellow">
                        Edit
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ProductList;