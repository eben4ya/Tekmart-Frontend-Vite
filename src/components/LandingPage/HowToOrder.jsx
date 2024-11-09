import React, { useState } from 'react';
import orderUrl from "../../assets/images/Order-Image.png";
import chevronDownUrl from "../../assets/images/Chevron-Down.png";

const HowToOrder = () => {
    const [isExpanded, setIsExpanded] = useState(null);

    const toggleExpand = (index) => {
        setIsExpanded(isExpanded === index ? null : index);
    };

    return (
        <div className="flex md:flex-row w-screen md:px-6 lg:px-7 xl:px-8">
            <img src={orderUrl} alt="Order" className="md:w-1/3 lg:w-[338px] xl:w-[502px] md:h-[202px] lg:h-[254px] xl:h-[362px] rounded-xl object-cover" />
            <div className="flex flex-col w-full md:ms-7 lg:ms-8 xl:ms-9 md:text-md lg:text-lg xl:text-xl font-bold font-poppins">
                <h1 className="md:text-2xl lg:text-3xl xl:text-4xl">How To Order</h1>
                <div className="flex flex-col text-justify">
                    <div onClick={() => toggleExpand(1)} className="flex items-center justify-between w-full border-b border-zinc-200 cursor-pointer">
                        <h1 className="md:py-2 lg:py-3 xl:py-6">Is the service free?</h1>
                        <img src={chevronDownUrl} alt="Arrow" className={`md:w-5 xl:w-6 h-auto transition-transform duration-300 ${isExpanded === 1 ? 'rotate-180' : ''}`} />
                    </div>
                    {isExpanded === 1 && (
                        <p className="md:py-2 lg:py-3 xl:py-6 font-normal">
                            Yes! But not really, we need operational fee of course. But, it is negligible to some extend as the service priced as <b>IDR1000</b> per transaction.
                        </p>
                    )}
                    <div onClick={() => toggleExpand(2)} className="flex items-center justify-between w-full border-b border-zinc-200 cursor-pointer">
                        <h1 className="md:py-2 lg:py-3 xl:py-6">How to use the service?</h1>
                        <img src={chevronDownUrl} alt="Arrow" className={`md:w-5 xl:w-6 h-auto transition-transform duration-300 ${isExpanded === 2 ? 'rotate-180' : ''}`} />
                    </div>
                    {isExpanded === 2 && (
                        <p className="md:py-2 lg:py-3 xl:py-6 font-normal">
                            First of all, you need to <b>login first!</b> Either by using email or phone number. Or, just use your email. Then, you can start to <b>order by going to Product tab.</b> After that, <b>pick the product</b> you want to buy and <b>proceed</b> using the button provided. By doing so, you are redirected to the <b>Order tab.</b> Here, you need to <b>check the things</b> you are buying and the payment method. Finally, click on <b>place order</b> if all things are as you wanted!
                        </p>
                    )}
                    <div onClick={() => toggleExpand(3)} className="flex items-center justify-between w-full border-b border-zinc-200 cursor-pointer">
                        <h1 className="md:py-2 lg:py-3 xl:py-6">I need to complain immediately!</h1>
                        <img src={chevronDownUrl} alt="Arrow" className={`md:w-5 xl:w-6 h-auto transition-transform duration-300 ${isExpanded === 3 ? 'rotate-180' : ''}`} />
                    </div>
                    {isExpanded === 3 && (
                        <p className="md:py-2 lg:py-3 xl:py-6 font-normal">
                            We are deeply sorry for the inconvenience that we have caused. Please refer to our lowest part of website and click the Contact that we have provided. As 1X24 work hours, your complain will be handled.
                        </p>
                    )}
                </div>
                <button type="button" className="self-start bg-black md:rounded-xl md:mt-3 lg:mt-4 xl:mt-5 md:px-5 lg:px-6 xl:px-7 md:py-2 lg:py-3 xl:py-4 md:text-sm xl:text-2xl text-white cursor-pointer hover:bg-yellow hover:text-black active:text-white active:bg-yellow">
                        <a href="">Start by Ordering Here!</a>
                </button>
            </div>
        </div>
    )
}

export default HowToOrder;