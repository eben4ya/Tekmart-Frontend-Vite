import Title from "../AllPage/Title"

const ErrorLogin = () => {
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
        Looks like you haven’t logged in. Please do so first before ordering <br/>the products!
        </p>
        <button type="button" className="bg-black rounded-3xl text-white font-poppins font-bold w-fit text-2xl py-6 px-8" > <a href="/login">
                Login Here
                </a>
        </button>
    </div>
    </>
  )
}

export default ErrorLogin
