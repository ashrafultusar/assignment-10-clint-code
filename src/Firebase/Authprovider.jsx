import { createContext } from "react";

export const AuthContex = createContext(null);

import auth from "./firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";


const Authprovider = ({ children }) => {


    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    




     const allValue = { creatUser, };


  return <AuthContex.Provider value={allValue}>{children}</AuthContex.Provider>;
};

export default Authprovider;
