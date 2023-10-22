/* eslint-disable react/prop-types */
import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {


    // google login
    const googleLogin = () => {
       return signInWithPopup(auth,googleProvider)
    }





    


    const authintication = {
        googleLogin,
    }


    return (
        <AuthContext.Provider value={authintication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;