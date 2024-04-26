import { createContext, useEffect, useState } from "react";

export const AuthContex = createContext(null);

import auth from "./firebase.config";
import {
    GithubAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


// social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(user)

  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

    const googleSignIn = () => { 
        return signInWithPopup(auth,googleProvider )

    }
    const githubSignIn = () => { 
        return signInWithPopup(auth,githubProvider )

    }
    

    // signOut
    const logOut = () => {
        setUser(null)
        signOut(auth)
    }
    
    
  // observer or here register user information store
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  // ----------------------------

  const allValue = { user, creatUser, signInUser,googleSignIn,githubSignIn,logOut };

  return <AuthContex.Provider value={allValue}>{children}</AuthContex.Provider>;
};

export default Authprovider;
