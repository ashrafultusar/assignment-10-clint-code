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
const [loading,setloading]=useState(true)
// console.log(loading)
  
  
  
  const creatUser = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => { 
    setloading(true)
        return signInWithPopup(auth,googleProvider )

    }
  const githubSignIn = () => { 
    setloading(true)
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
   const unSubscribs= onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setloading(false)
      }
   });
    return ()=>unSubscribs()
  }, []);
  // ----------------------------

  const allValue = { user,loading, creatUser, signInUser,googleSignIn,githubSignIn,logOut };

  return <AuthContex.Provider value={allValue}>{children}</AuthContex.Provider>;
};

export default Authprovider;
