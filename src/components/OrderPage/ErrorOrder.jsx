import Title from "../AllPage/Title"

const ErrorOrder = () => {
  return (
    <>
    <Title
        bgSrc="/images/orderBG.svg"
        title="Order Details"
        subtitle="One last step, don’t worry!"
      />
    <div className="flex flex-col items-center text-center m-12 space-y-6">
        <h1 className="font-poppins font-bold text-8xl">
        Whoops!
        </h1>
        <p className="text-center font-poppins font-normal">
        Looks like you haven’t ordered anything just yet! Please click the<br/> button below to refer to our products. Then, you could check your <br/> order details here!
        </p>
        <button className="bg-black rounded-3xl text-white font-poppins font-bold w-fit text-2xl py-6 px-8">
                Check Our Products Here
        </button>
    </div>
        
    </>
      
    
  )
}

export default ErrorOrder
