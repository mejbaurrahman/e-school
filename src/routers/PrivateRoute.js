import React from 'react'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Hooks/AuthProvider/AuthProvider'

export default function PrivateRoute({children}) {
    const {loading, user} = useContext(AuthContext);
    const location = useLocation();
  if(loading){
      return <div className='mx-auto'><button className="btn loading">loading</button></div>
    }
  if(!user?.uid){
    return (
      <Navigate to='/login' state={{from:location}} replace></Navigate>
    )
  }
  
  return children;
  
}
