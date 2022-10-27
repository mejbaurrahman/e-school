import React from 'react'
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom'
import CourseCard from '../../Componants/CourseCard/CourseCard';
import { AuthContext } from '../../Hooks/AuthProvider/AuthProvider';

export default function CourseByCategory() {
    
  const loader = useLoaderData();
  const {dark} = useContext(AuthContext);
  console.log(loader);
  return (
    <div className=''>
        <h1 className={`text-2xl font-semibold p-3 ${dark? 'text-white bg-slate-800': 'text-black'}`}>{loader[0].categoryName}</h1>
        <hr />
        <div className=''>
            <div className='grid md:grid-cols-2 gap-2'>
                    {
                       loader.map(course=><CourseCard
                       key={course._id} course={course}></CourseCard>)
                    }
            </div>
        </div>
    </div>
  )
}
