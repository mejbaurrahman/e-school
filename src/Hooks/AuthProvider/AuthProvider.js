import React, { createContext } from 'react';
import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useEffect } from 'react';
import app from '../../Firebase/Firebase.init';

const auth = getAuth(app);
export const AuthContext = createContext();

export default function AuthProvider({children}) {
const [user, setUser]= useState({});
const [loading, setLoading] = useState(true);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


 const loginWithEmailAndPassword =(email, password)=>{
  setLoading(true);
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

 }
 const registerWithEmailAndPassword =(email, password)=>{
  setLoading(true);
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  }
  const logout =()=>{
    setLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser({});
    }).catch((error) => {
      // An error happened.
    });
  }

  const googleSignIn=()=>{
    setLoading(true);
   return signInWithPopup(auth, googleProvider)
  
  }

  const githubSignIn =()=>{
    setLoading(true);
    signInWithPopup(auth, githubProvider)
    .then((result) => {
        const user = result.user;
        console.log(user);
    }).catch((error) => {
      console.log(error.message);
    });
  }

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
       if (user) {
         const uid = user.uid;
         setUser(user);
         setLoading(false);
        
       }
     });
     return ()=>{
       unsubscribe();
     }
    },[user])

    const authUser = {logout, loginWithEmailAndPassword, registerWithEmailAndPassword, googleSignIn, githubSignIn, user, loading}
  return (
    <AuthContext.Provider value={authUser}>
        {children}
    </AuthContext.Provider>
  )
}