import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const singInUsingGoogle = () =>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
        console.log(result.user);
        setUser(result.user);
       
    })
    .finally(() => setIsLoading(false));
        
        
    }

    useEffect(()=>{
        const unsubcribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            } else{
                setUser({})
            }
        })
        return () => unsubcribed;
    }, [isLoading])

   const logOut = () =>{
        signOut(auth)
        .then(() => {
            setUser({});
          })
          .finally(() => setIsLoading(false))
    }

    return{
        user,
        singInUsingGoogle,
        isLoading,
        logOut
    }
}

export default useFirebase;