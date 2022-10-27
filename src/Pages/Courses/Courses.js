import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Categories from '../../Componants/Categories/Categories'

export default function Courses() {
  
  return (
    <div className='md: container lg: container mx-auto mx-auto'>
      <div className='grid md:grid-cols-6 gap-2'>
        <div className='md: col-span-1'>
            <h1 className='text-2xl font-semibold p-3'>Categories</h1>
            <hr />
            <Categories></Categories>
        </div>
        <div className='md:col-span-5'>
          <Outlet></Outlet>
        </div>
        
    </div>
    </div>
  )
}
