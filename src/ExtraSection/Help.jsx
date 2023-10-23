
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsCurrencyBitcoin } from "react-icons/bs"
import { IoPhonePortraitOutline } from "react-icons/io5"


const Help = () => {
    return (
        <div>
           <div>
      <div className="mt-2 h-[450px] bg-no-repeat bg-[url('https://i.ibb.co/HDBCdpb/63f36b12950c48f7b702090b-custome.jpg')] bg-center bg-cover lg:mr-6">

      <h1 className="flex  items-center justify-center text-black text-4xl font-saemibold relative top-40 text-center">
           How can I help you?
          </h1>
        <div className="absolute top-36 lg:top-[120px] md:top-32 left-0 right-0 -bottom-20">
          
          <div className="flex items-center justify-center h-full my-auto">
            <input
              
              type="text"
              placeholder="Search here"
              className="input mb-40 lg:mb-56 input-bordered w-full max-w-xs"
            />

            
          </div>
        </div>
      </div>
     
    </div>



    <p className="font-semibold underline text-center mt-10 ">Learning Center</p>

    <div className='text-center lg:gap-2 lg:mr-10 lg:ml-14 lg:mt-12 mt-8 grid lg:grid-cols-3 md:grid-cols-2 mb-10 grid-cols-1'>

          <div className="card card-compact mr-2 mb-2 py-4 bg-base-100 shadow-xl">
            <AiOutlineShoppingCart className='text-6xl text-orange-400 ml-40 mt-4'></AiOutlineShoppingCart>

            <div className='p-4'>
            <h2 className='text-2xl'>Sourcing on Fun Festible.com</h2>
            <p>Your guide to sourcing,Ordaring</p>
            </div>
            </div>

            

            <div className="card card-compact py-4 bg-base-100 shadow-xl">
            <BsCurrencyBitcoin className='text-6xl text-orange-400 ml-40 mt-4'></BsCurrencyBitcoin>

            <div className='p-4'>
            <h2 className='text-3xl'>Trade Assurance</h2>
            <p>Protect your Orders. <br /> See how to works</p>
            </div>
            </div>

            <div className="card card-compact py-4 bg-base-100 shadow-xl">
            <IoPhonePortraitOutline className='text-6xl text-orange-400 ml-40 mt-4'></IoPhonePortraitOutline>

            <div className='p-4'>
            <h2 className='text-3xl'>Get the app</h2>
            <p>Fun Festible.com. <br /> Get Downdload link</p>
            </div>
            </div>


          </div>
        </div>
    );
};

export default Help;