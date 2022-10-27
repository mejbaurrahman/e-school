import React, { createContext } from 'react';
import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { getAuth, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
import app from '../../Firebase/Firebase.init';

const auth = getAuth(app);
export const AuthContext = createContext();

export default function AuthProvider({children}) {
const [user, setUser]= useState({});
const [loading, setLoading] = useState(true);
const [dark, setDark] = useState(false);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


 const loginWithEmailAndPassword =(email, password)=>{
  setLoading(true);
 return signInWithEmailAndPassword(auth, email, password)
  

 }

 const updateProfileWithDisplayNameAndPhoto =(name, photo)=>{
 return updateProfile(auth.currentUser, {
    displayName:name, photoURL:photo
  })
 }
 const registerWithEmailAndPassword =(email, password)=>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
  

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
   return signInWithPopup(auth, githubProvider);
  }

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
       if (user) {
         const uid = user.uid;
         setUser(user);
         setLoading(false);
       }else{
          setUser({});
          setLoading(false);
       }
     });
     return ()=>{
       unsubscribe();
     }
    },[user])

    const authUser = {logout,setUser, dark, setDark, loginWithEmailAndPassword,updateProfileWithDisplayNameAndPhoto, auth, registerWithEmailAndPassword, googleSignIn, githubSignIn, user, loading}
  return (
    <AuthContext.Provider value={authUser}>
        {children}
    </AuthContext.Provider>
  )
}
