import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../Hooks/AuthProvider/AuthProvider';

export default function Profile() {
    const {dark, user} = useContext(AuthContext);
    return (
     <div className='md:container mx-auto'>
       <div className={` mt-4 grid md:grid-cols-3 grid-cols-1 gap-4 ${dark? 'bg-slate-800 text-white': 'bg-base-200 text-black'}`}>
       <div className={`col flex justify-center drop-shadow-2xl ${dark? 'bg-slate-900': 'bg-base-100'} my-3  mt-3 p-4`}>
                <img src={user?.photoURL} className='w-1/2 rounded-full' alt="" />
          </div>
          <div className={` col flex justify-center items-center drop-shadow-2xl ${dark? 'bg-slate-900': 'bg-base-100'} my-3 p-4`}>
              <h1 className={` text-center text-4xl font-semibold ${dark? 'text-white': 'text-black'} mb-2`}>{user?.displayName}</h1>
          </div>
          
          <div className={`col flex justify-center items-center drop-shadow-2xl ${dark? 'bg-slate-900': 'bg-base-100'} my-3 `}>
              <h1 className={`mb-2 text-xl text-center ${dark? 'text-white': 'text-black'}`}> {user?.email}</h1>
          </div>
          
      </div>
     </div>
    )
}
