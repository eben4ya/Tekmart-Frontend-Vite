import berryImage from '../../assets/berryImage.jpg';

const OrderHeading = () => {
    return (
        <div 
            className="flex flex-col items-center justify-center text-center relative" 
            style={{
                backgroundImage: `url(${berryImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '40%',
                width: '100%',
            }}
        >
            <h1 className="text-8xl font-bold font-poppins" style={{ marginTop: '25px', marginBottom: '10px' }}>
                <span className="text-yellow">Order</span> <span className="text-white">Details</span>
            </h1>

            <p className="text-gray-500 text-xl font-poppins font-normal text-white">
                One last step, don’t worry!
            </p>

            <div 
                className="bg-yellow" 
                style={{ 
                    position: 'absolute',
                    bottom: 0,           
                    left: 0,             
                    height: '8px', 
                    width: '100%'
                }}
            ></div>
        </div>
    );
};

export default OrderHeading;
