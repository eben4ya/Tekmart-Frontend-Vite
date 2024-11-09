const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full z-10 p-4 md:px-10 md:py-6">
            <div className="flex item-center justify-between">
                <ul className="flex-1 md:flex md:text-l text-white font-poppins">
                    <li className="self-center cursor-pointer"><a href="">Home</a></li>
                    <li className="self-center md:ms-9 cursor-pointer"><a href="">About</a></li>
                    <li className="self-center md:ms-9 cursor-pointer"><a href="">Products</a></li>
                    <li className="self-center md:ms-9 cursor-pointer"><a href="">Order</a></li>
                </ul>
                <div className="flex item-center justify-center md:text-4xl font-vinque pb-2">
                    <h1 className="text-yellow">Teknik</h1>
                    <h1 className="text-white ms-5">Mart</h1>
                </div>
                <div className="flex-1 flex item-center justify-end">
                    <button type="button" className="self-center bg-white outline-white md:rounded-xl md:px-7 hover:bg-yellow active:text-white active:bg-yellow md:py-2.5 md:text-sm font-poppins font-bold cursor-pointer">
                        <a href="">Login</a>
                    </button>
                </div>
            </div>
            
        </nav>
    )
}
export default Navbar