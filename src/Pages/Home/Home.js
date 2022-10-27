import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Hooks/AuthProvider/AuthProvider';
import coverpagePhoto from '../../images/coverpage.jpg';

export default function Home() {
  const {dark} = useContext(AuthContext);
  return (
    <div className={`${dark? 'text-white': 'text-black'}`}>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${coverpagePhoto})` }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className={`max-w-md px-2 py-4 rounded bg-opacity-25 ${dark? 'bg-slate-800 text-white': 'bg-base-300 text-black'}`}>
      <h1 className="mb-5 text-5xl font-bold ">E-School</h1>
      <p className="mb-5">Welcome to E-School. You can learn here many interesting course with different categories. Explore Your knowledge with us</p>
      <Link to='/courses'><button className="btn btn-primary">Courses</button></Link>
    </div>
  </div>
</div>
    </div>
  )
}
