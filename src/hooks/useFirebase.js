import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () =>{
    const [user, setUser] = useState({})
    const auth = getAuth();

    const singInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user);
        })
    }

    const logOut = () =>{
        signOut(auth)
        .then(() => {
            setUser({});
          })
    }

    return{
        user,
        singInUsingGoogle,
        logOut
    }
}

export default useFirebase;