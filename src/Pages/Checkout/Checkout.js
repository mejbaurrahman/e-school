import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Hooks/AuthProvider/AuthProvider';

export default function Checkout() {
    const loader= useLoaderData();
    const {dark} = useContext(AuthContext);
    const {_id, name, categoryName, fee, photo} = loader;
    const navigate = useNavigate();
    const [disable, setDisable] = useState(false);

    const ShowMessage =(e)=>{
        e.preventDefault();
        toast.success(`Congrats! Purchased! ${name} course`, {
            style: {
                borderRadius: '10px',
                background: `${dark? '#333': '#fff'}`,
                color: `${dark? '#fff': '#333'}`,
              },
        });
        // e.currentTarget.disabled = true;
        setDisable(!disable);
    
    }
  return (
    <div className={`p-3 md:shadow-lg ${dark? 'bg-slate-800': 'bg-base-100'}`}>
        <div className='my-3 text-center'>
            <h1 className={`text-3xl font-semibold ${dark? 'text-white':''}`}>Course Name: {name}</h1>
        </div>
        <div className='grid md:grid-cols-5 grid-cols-1 mt-10'>
    <div className={`col text-center text-xl font-semibold mb-3 flex justify-center items-center mx-2 ${dark? 'bg-slate-900 text-white':'bg-base-200'}`}>
        Product Id:  {_id}
      </div>
      <div className={`md:col-span-1 mb-3 flex justify-center items-center mx-2 ${dark? 'bg-slate-9': 'bg-base-200'}`}>
         <img src={photo} alt="" className='w-2/3 rounded' srcset="" />
      </div>
      <div className={`col text-center text-xl font-semibold mb-3 flex justify-center items-center mx-2 ${dark? 'bg-slate-900 text-white':'bg-base-200'}`}>
        Name:  {name}
      </div>
      <div className={`col text-center text-xl font-semibold mb-3 flex justify-center items-center mx-2 ${dark? 'bg-slate-900 text-white':'bg-base-200'}`}>
       Category:  {name}
      </div>
      <div className={`col text-center text-xl font-semibold mb-3 flex justify-center items-center mx-2 ${dark? 'bg-slate-900 text-white':'bg-base-200'}`}>
        Total Fee:  {fee} taka
      </div>
    </div>
    <div className='flex md:justify-end justify-center'>
        <button onClick={ShowMessage} className='btn btn-primary mx-5 my-5' disabled={disable}>Purchase Now</button>
    </div>
    <div><Toaster
     position="top-center"
     reverseOrder={false}/></div>
    </div>
  )
}
