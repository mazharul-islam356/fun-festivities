import { FaBirthdayCake, FaMagic, FaMusic } from 'react-icons/fa';


const Services = () => {
  return (
    <div>
      <div className="bg-slate-200 lg:h-[500px] rounded-sm mt-10">
        <div className="text-center">
          <h1 className="text-3xl pt-14">
            It’s simple. You have an event to plan and <br /> we have{" "}
            <span className="text-orange-400">the solutions</span>
          </h1>
          <p>HERE IS HOW WE CAN HELP YOU</p>
        </div>



        <div className='text-center lg:gap-4 lg:mr-10 lg:ml-14 lg:mt-12 mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>

          <div className="card card-compact mr-2 mb-2 py-4 bg-base-100 shadow-xl">
            <FaBirthdayCake className='text-6xl text-orange-400 ml-40 mt-4'></FaBirthdayCake>

            <div className='p-4'>
            <h2 className='text-3xl'>Full-Service Planning</h2>
            <p>This package can vary greatly depending on the Bride & Groom’s needs.</p>
            </div>
            </div>

            <div className="card card-compact py-4 bg-base-100 shadow-xl">
            <FaMagic className='text-6xl text-orange-400 ml-40 mt-4'></FaMagic>

            <div className='p-4'>
            <h2 className='text-3xl'>Month-of Coordination</h2>
            <p>This package can vary greatly depending on the Bride & Groom’s needs.</p>
            </div>
            </div>

            <div className="card card-compact py-4 bg-base-100 shadow-xl">
            <FaMusic className='text-6xl text-orange-400 ml-40 mt-4'></FaMusic>

            <div className='p-4'>
            <h2 className='text-3xl'>Day-of Management</h2>
            <p>This package can vary greatly depending on the Bride & Groom’s needs.</p>
            </div>
            </div>


          </div>
        </div>
      </div>
  );
};

export default Services;
