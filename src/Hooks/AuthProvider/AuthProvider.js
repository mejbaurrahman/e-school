import React, { createContext } from 'react';
import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useEffect } from 'react';

const auth = getAuth();
export const AuthContext = createContext();

export default function AuthProvider({children}) {
const [user, setUser]= useState({displayName: 'Mejba'});
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

 useEffect(()=>{
 const unsubscribe= onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUser(user);
      // ...
    } else {
      // User is signed out
      setUser({});
      // ...
    }
  });
  return ()=>{
    unsubscribe();
  }
 },[user])

 const loginWithEmailAndPassword =(email, password)=>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

 }
 const RegisterWithEmailAndPassword =(email, password)=>{
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
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
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const googleSignIn=()=>{
    signInWithPopup(auth, googleProvider)
  .then((result) => {
      const user = result.user;
      console.log(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    console.log(error.message);
    // ...
  });
  }

  const githubSignIn =()=>{
    signInWithPopup(auth, githubProvider)
    .then((result) => {
        const user = result.user;
        console.log(user);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      console.log(error.message);
      // ...
    });
  }
  return (
    <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
  )
}
