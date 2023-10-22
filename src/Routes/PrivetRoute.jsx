/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}) => {

    const {userr} = useContext(AuthContext)

    if(userr){
       return children
    }



    return (
        <Navigate to='/login'>
            
        </Navigate>
    );
};

export default PrivetRoute;