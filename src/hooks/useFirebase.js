import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [errorCatch, setErrorCatch] = useState('');
    const auth = getAuth();
    // console.log(user)
    const singInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .finally(()=> setIsLoading(false));


    }
    // let email;
    // let password;
    const cereatSinginWithEmailPassword = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            setErrorCatch('');
            
            setUserName();
            verifyEmail();
            window.location.reload();
            
        })
        .catch(error=>{
            setErrorCatch(error.message)
        })
        .finally(()=> setIsLoading(false));
            
            
            
    }
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            console.log(name)
          }).catch((error) => {
            // setErrorCatch(error.message);
          });
      }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
          .then(result => {
            console.log(result);
          })
      }

    const logInWithEmailPassword = (email, password) =>{
        setIsLoading(true);
       return signInWithEmailAndPassword(auth, email, password)
          
          
        .finally(()=> setIsLoading(false));
          
          
    }
    const resetPassword = (email) =>{
        sendPasswordResetEmail(auth, email)
        .then(result =>{

        })
        .catch(error=>{
            setErrorCatch(error.message)
        })
    }

    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubcribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        singInUsingGoogle,
        cereatSinginWithEmailPassword,
        logInWithEmailPassword,
        logOut, 
        isLoading,
        errorCatch,
        resetPassword,
        setUserName
        
        
    }
}

export default useFirebase;