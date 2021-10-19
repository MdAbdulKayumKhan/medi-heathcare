import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [errorCatch, setErrorCatch] = useState('');
    const auth = getAuth();

    const singInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);

            })
            .finally(() => setIsLoading(false));


    }
    // let email;
    // let password;
    const cereatSinginWithEmailPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            setErrorCatch('');
            setUserName();
            verifyEmail();
            
        })
        .catch(error=>{
            setErrorCatch(error.message)
        })
            
            
            
    }
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            console.log(name)
          }).catch((error) => {
            setErrorCatch(error.message);
          });
      }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
          .then(result => {
            console.log(result);
          })
      }

    const logInWithEmailPassword = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setErrorCatch('');
          })
          .catch(error=>{
            setErrorCatch(error.message)
        })
          
          
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
        })
        return () => unsubcribed;
    }, [isLoading])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        singInUsingGoogle,
        isLoading,
        cereatSinginWithEmailPassword,
        logInWithEmailPassword,
        logOut, 
        errorCatch,
        resetPassword,
        setUserName
        
        
    }
}

export default useFirebase;