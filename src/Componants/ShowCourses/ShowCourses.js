import React from 'react'
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Hooks/AuthProvider/AuthProvider';
import CourseCard from '../CourseCard/CourseCard';

export default function ShowCourses() {
    const loader = useLoaderData();
    const {dark} = useContext(AuthContext);
    console.log(loader);
  return (
    <div >
        <h1 className={`text-4xl font-semibold p-3 ${dark? 'text-white bg-slate-800': 'text-black'}`}>Courses</h1>
        <hr />
        <div className=''>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-2'>
                    {
                       loader.map(course=><CourseCard 
                       key={course._id} course={course}></CourseCard>)
                    }
            </div>
        </div>
    </div>
  )
}
