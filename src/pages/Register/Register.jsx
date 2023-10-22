
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import toast from "react-hot-toast";


const Register = () => {

 

  const handleSubmit = (e) =>{
    e.preventDefault()
    const name = e.target.name.value;
    const image = e.target.img.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    console.log(name,image,email,pass);
    if(pass.length < 6){
      toast.error('Password should be at least 6 characters')
    }
    
    
    createUserWithEmailAndPassword(auth,email,pass)
    .then(res=>console.log(res.user))
    .catch(err=>console.log(err))
  }




    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-[450px] flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-6">Register now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
              </div>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Image url</span>
                </label>
                <input type="text" name="img" placeholder="Image url" className="input input-bordered" required />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Password" name="pass" className="input input-bordered" required />
                <p>Already have a account? <span><Link to='/login' className="underline font-semibold">Login</Link> </span>Now!</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;