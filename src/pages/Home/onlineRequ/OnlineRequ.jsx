import birthdayImg from '../../../assets/img/birthday-party.jpg'
const OnlineRequ = () => {
  return (
    <div>
      <div className="hero min-h-screen mt-8 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img className='rounded-xl lg:w-[600px] w-72'
            src={birthdayImg}
          />
          <div>
            <h1 className="text-5xl font-bold text-center">Online Request</h1> <br />

            <div>
            <input type="text" placeholder="Name*" className="input input-bordered mr-4" required />
            <input type="text" placeholder="Number*" className="input input-bordered" required /> <br />
            <textarea  type="text" placeholder="Messege*" className="lg:w-96 w-72 h-52 input input-bordered mt-2 lg:ml-9" required />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineRequ;
