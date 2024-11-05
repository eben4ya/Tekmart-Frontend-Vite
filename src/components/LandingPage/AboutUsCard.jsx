import noMoreQueueUrl from "../../assets/images/No-More-Queue.png";
import quickAccessUrl from "../../assets/images/Quick-Access.png";
import shortAndSimpleUrl from "../../assets/images/Short-And-Simple.png";

function AboutUsCard() {
    return (
        <div className="flex md:flex-row w-screen md:px-6 lg:px-7 xl:px-8 md:text-2xl lg:text-[32px] xl:text-[38px] font-bold font-poppins">
            <div className="relative group flex justify-center items-center w-1/3 aspect-[11/11.5] bg-cover bg-center rounded-xl" style={{ backgroundImage: `url(${noMoreQueueUrl})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 rounded-xl"></div>
                <h1 className="text-white z-10">No More</h1>
                <h1 className="ms-2.5 text-yellow z-10">Queue.</h1>
            </div>
            <div className="relative group flex justify-center items-center w-1/3 md:mx-4 lg:mx-5 xl:mx-6 aspect-[11/11.5] bg-cover bg-center rounded-xl" style={{ backgroundImage: `url(${quickAccessUrl})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 rounded-xl"></div>
                <h1 className="text-yellow z-10">Quick</h1>
                <h1 className="ms-2.5 text-white z-10">Access.</h1>
            </div>
            <div className="relative group flex justify-center items-center w-1/3 aspect-[11/11.5] bg-cover bg-center rounded-xl" style={{ backgroundImage: `url(${shortAndSimpleUrl})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 rounded-xl"></div>
                <h1 className="text-white z-10">Short And</h1>
                <h1 className="ms-2.5 text-yellow z-10">Simple.</h1>
            </div>
        </div>
    );
}

export default AboutUsCard;