import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useContext } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CourseCard from '../../Componants/CourseCard/CourseCard';
import ShowCourses from '../../Componants/ShowCourses/ShowCourses';
import { AuthContext } from '../../Hooks/AuthProvider/AuthProvider';
import coverpagePhoto from '../../images/coverpage.jpg';
import Courses from '../Courses/Courses';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  const {dark} = useContext(AuthContext);
  const loader = useLoaderData();
  const loader2 = loader.slice(0,6);
  return (
    <div className={`${dark? 'text-white': 'text-black'}`}>
      {/* <div className="hero min-h-screen" style={{ backgroundImage: `url(${coverpagePhoto})` }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className={`max-w-md px-2 py-4 rounded bg-opacity-25 ${dark? 'bg-slate-800 text-white': 'bg-base-300 text-black'}`}>
      <h1 className="mb-5 text-5xl font-bold ">E-School</h1>
      <p className="mb-5">Welcome to E-School. You can learn here many interesting course with different categories. Explore Your knowledge with us</p>
      <Link to='/courses'><button className="btn btn-primary">Courses</button></Link>
    </div>
  </div>
</div> */}
<Carousel>
                <div className=''>
                    <img src={coverpagePhoto} className='h-full' />
                    <h5 className='text-2xl legend text-black'>E-School <Link to='/courses'><button className='btn btn-primary mx-3'>Courses<FontAwesomeIcon className='mx-2' icon={faArrowCircleRight}></FontAwesomeIcon> </button></Link></h5>
    
                </div>
                <div>
                    <img src={coverpagePhoto} />
                    <h5 className='text-2xl legend text-black'>E-School <Link to='/courses'><button className='btn btn-primary mx-3'>Courses<FontAwesomeIcon className='mx-2' icon={faArrowCircleRight}></FontAwesomeIcon> </button></Link></h5>

                </div>
                <div>
                    <img src={coverpagePhoto} />
                    <h5 className='text-2xl legend text-black'>E-School <Link to='/courses'><button className='btn btn-primary mx-3'>Courses<FontAwesomeIcon className='mx-2' icon={faArrowCircleRight}></FontAwesomeIcon> </button></Link></h5>
                </div>
            </Carousel>
<div >
        <h1 className={`text-2xl font-semibold mt-4  p-3 text-center ${dark? 'text-white bg-slate-800': 'text-black'}`}>Our Courses</h1>
        <hr />
        <div className=''>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-2'>
                    {
                       loader2.map(course=><CourseCard 
                       key={course._id} course={course}></CourseCard>)
                    }
            </div>
        </div>
    </div>
    <div className='flex md:justify-end justify-center my-4'>
      <Link to='/courses'><button className='btn btn-primary mx-3'>Show All courses<FontAwesomeIcon className='mx-2' icon={faArrowCircleRight}></FontAwesomeIcon> </button></Link>
    </div>
    </div>
  )
}
