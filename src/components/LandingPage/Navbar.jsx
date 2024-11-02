const Navbar = () => {
    return (
        <nav className="md:px-10 md:py-6">
            <div className="flex item-center justify-between">
                <ul className="flex-1 md:flex md:text-xl text-white font-poppins">
                    <li className="self-center"><a href="">Home</a></li>
                    <li className="self-center md:ms-9"><a href="">About</a></li>
                    <li className="self-center md:ms-9"><a href="">Order</a></li>
                    <li className="self-center md:ms-9"><a href="">Product</a></li>
                </ul>
                <div className="flex item-center justify-center md:text-5xl font-vinque">
                    <h1 className="text-amber-300">Teknik</h1>
                    <h1 className="text-white ms-5">Mart</h1>
                </div>
                <div className="flex-1 flex item-center justify-end">
                    <button type="button" className="self-center bg-amber-300 outline-white md:rounded-xl md:px-7 md:py-2.5 md:text-sm font-poppins">
                        <a href="">Login</a>
                    </button>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar