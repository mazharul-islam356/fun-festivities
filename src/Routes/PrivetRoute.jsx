/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}) => {

    const {userr,loading} = useContext(AuthContext)
    if(loading){
      return <span className="loading loading-infinity loading-lg"></span>
    }

    if(userr){
       return children
    }



    return (
        <Navigate to='/login'>
            
        </Navigate>
    );
};



export default PrivetRoute;