import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../Hooks/AuthProvider/AuthProvider';

export default function Profile() {
    const {dark, user} = useContext(AuthContext);
    return (
     <div className='md:container mx-auto'>
       <div className={` mt-4 ${dark? 'bg-slate-800 text-white': 'bg-base-200 text-black'}`}>
          <div className={`  ${dark? 'bg-slate-900': 'bg-base-200'} my-3 p-4`}>
              <h1 className={` text-center text-4xl font-semibold ${dark? 'text-white': 'text-black'} mb-2`}>FullName: {user?.displayName}</h1>
              <hr />
          </div>
          <div className={` flex justify-center  ${dark? 'bg-slate-900': 'bg-base-200'} my-3 border border-2 border-primary mt-3 p-4`}>
                <img src={user?.photoURL} className='w-1/6' rounded alt="" />
          </div>
          <div className={`  ${dark? 'bg-slate-900': 'bg-base-200'} my-3 border border-2 border-primary mt-3 p-4`}>
              <h1 className={`mb-2 text-center ${dark? 'text-white': 'text-black'}`}>Email: {user?.email}</h1>
          </div>
          <div className={`  ${dark? 'bg-slate-900': 'bg-base-200'} my-3 border border-2 border-primary mt-3 p-4`}>
              <h1 className={`mb-2 text-center ${dark? 'text-white': 'text-black'}`}>User ID: {user?.uid}</h1>
          </div>
      </div>
     </div>
    )
}
