import React from 'react'
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

export default function ShowCourses() {
    const loader = useLoaderData();
    console.log(loader);
  return (
    <div >
        <h1 className='text-2xl font-semibold p-3'>Courses</h1>
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
