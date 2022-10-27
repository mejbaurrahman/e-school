import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Hooks/AuthProvider/AuthProvider';

export default function Categories() {
const [categories, setCategories] = useState([]);
const {dark} = useContext(AuthContext);
useEffect(()=>{
    fetch('https://e-school-server-nine.vercel.app/categories')
    .then(res=>res.json())
    .then(data=>setCategories(data));
}, [])
  return (
    <div className={`p-3 ${dark? 'bg-slate-800': 'bg-base-200'}`}>
        <ul className='no-underline'>
            <li className={`mb-2  rounded py-2 pl-2 hover:bg-opacity-20 ${dark? 'text-white hover:bg-primary':'text-black'}`}>
                <Link to='/courses'>All Categories</Link>
             </li>
            {
             categories.map(category=><li className={`mb-2  rounded py-2 pl-2 hover:bg-opacity-20 ${dark? 'text-white hover:bg-primary':'text-black'}`}>
                <Link to={`/courses/category/${category.id}`}>{category.name}</Link>
             </li>)
            }
        </ul>
    </div>
  )
}
