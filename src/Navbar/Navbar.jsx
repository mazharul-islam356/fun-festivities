import { NavLink } from "react-router-dom";
import logo from '../assets/img/logo.png';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const {userr,logOut} = useContext(AuthContext)
  // console.log(userr);

  const handleLogOut = () =>{
    logOut()
    .then(()=>console.log('log out succecfullly'))
    .catch(err=>console.log(err))
  }

    const navLink = <>
    <NavLink to='/'><button className="btn btn-ghost">Home</button></NavLink>
     
     <NavLink to='/message'><button className="btn btn-ghost">Message</button></NavLink>
     <NavLink to='/help'><button className="btn btn-ghost">Help Center</button></NavLink>
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <img className="w-44" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navLink}
        </ul>
      </div>
      <div className="navbar-end">

    


     <NavLink to='/register'><button className="btn btn-ghost mr-1">Register</button></NavLink>


     {
      userr ?
      <>
       <NavLink onClick={handleLogOut} to='/login'><button className="btn btn-outline btn-sm btn-error">Log out</button></NavLink>
      </>:
      <NavLink to='/login'><button className="btn btn-outline btn-sm btn-error">Login</button></NavLink>
    }

      </div>
      {userr && <>
        <span className="ml-2 mr-2">{userr.email}</span>
        <div className="w-10 rounded-full">
          <img src={userr.photoURL} alt="User Pic" />
        </div>
      </>
      }
    </div>
  );
};

export default Navbar;
