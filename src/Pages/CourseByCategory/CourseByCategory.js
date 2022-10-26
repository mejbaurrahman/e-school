import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CourseCard from '../../Componants/CourseCard/CourseCard';

export default function CourseByCategory() {
    
  const loader = useLoaderData();
  console.log(loader);
  return (
    <div >
        <h1 className='text-2xl font-semibold p-3'>{loader[0].categoryName}</h1>
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
