import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

  const {googleLogin} = useContext(AuthContext)

  const handleLogin = (media) => {
    media()
    .then(res=>console.log(res.user))
    .catch(err=>console.log(err))
  }



  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-[450px] flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-6">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              
                <button onClick={()=> handleLogin(googleLogin)} className="btn mt-3">
                  Continue With
                  <FcGoogle className="text-xl"></FcGoogle>
                </button>
              
              <p>
                New to Here?{" "}
                <span>
                  <Link to="/register" className="underline font-semibold">
                    Register
                  </Link>{" "}
                </span>
                Now!
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
