import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";


import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const createUser = (email, password) => {
       
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const [user,setUser]=useState(null);

  
    
 

    const logOut = () => {
        
        return signOut(auth);
    }

   
    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn=()=>{
return  signInWithPopup(auth,provider)


    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
           
        });
        return () => {
            unSubscribe();
        }
    }, []);
    const authInfo = { 
        user,createUser,
        logOut,signIn,googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;