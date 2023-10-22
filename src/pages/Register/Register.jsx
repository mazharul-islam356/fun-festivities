
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

  const {REuser} = useContext(AuthContext)
 

  const handleSubmit = (e) =>{
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    console.log(name,email,pass);
    if(pass.length < 6){
      toast.error('Password should be at least 6 characters')
      return
    }
     else if(!/[A-Z]/.test(pass)){
      toast.error('Please include at least one uppercase letter in your password')
      return
    }
    else if (!/[!@#$%^&*()_+\-=[{};':"|,.<>/?]+/.test(pass)){

      toast.error('Please include Special Characters in your password')
      return
    }


    REuser(email,pass)
    .then(result=>console.log(result.user))
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
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Password" name="pass" className="input input-bordered" required />
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Register</button>
              </div>

              <p>Already have a account? Please <span><Link to='/login' className="underline font-semibold">Login</Link> </span>.</p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;