/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [userr,setUser] = useState()

    // google login
    const googleLogin = () => {
       return signInWithPopup(auth,googleProvider)
    }


    // user
    const REuser = (email,pass) =>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    // signOut
    const logOut = () =>{
        return signOut(auth)
    }
    

    // onAuthStateChanged
    useEffect(()=>{
        onAuthStateChanged(auth,currentUser=>{
            console.log('observing current user', currentUser);
            setUser(currentUser)
            
        })
    },[])



    const authintication = {
        userr,
        googleLogin,
        REuser,
        logOut
    }


    return (
        <AuthContext.Provider value={authintication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;