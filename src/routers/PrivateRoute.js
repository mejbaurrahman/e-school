import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Hooks/AuthProvider/AuthProvider'

export default function PrivateRoute({children}) {
    const {loading, user} = useContext(AuthContext);
  if(user.uid){
    return children;
  }
  if(loading){
    return <div>Loading</div>
  }
  return (
    <Navigate to='/login'></Navigate>
  )
}
