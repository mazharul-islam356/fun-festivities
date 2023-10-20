import birthdayImg from '../../../assets/img/birthday-party.jpg'
const OnlineRequ = () => {
  return (
    <div>
      <div className="hero min-h-screen mt-8 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={birthdayImg}
          />
          <div>
            <h1 className="text-5xl font-bold text-center">Online Request</h1> <br />

            <div>
            <input type="text" placeholder="Name*" className="input input-bordered mr-4" required />
            <input type="text" placeholder="Number*" className="input input-bordered" required /> <br />
            <textarea  type="text" placeholder="Messege*" className="h-10 w-96 h-52 input input-bordered mt-2 ml-9" required />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineRequ;
