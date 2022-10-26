import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Categories() {
const [categories, setCategories] = useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/categories')
    .then(res=>res.json())
    .then(data=>setCategories(data));
}, [])
  return (
    <div className='p-3'>
        <ul className='no-underline'>
            {
             categories.map(category=><li className='mb-2 hover:bg-primary rounded py-2 pl-2 hover:bg-opacity-20' key={category.id}>
                <Link to={`/categories/${category.id}`}>{category.name}</Link>
             </li>)
            }
        </ul>
    </div>
  )
}
