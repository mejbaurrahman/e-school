import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Hooks/AuthProvider/AuthProvider';

export default function CourseCard({course}) {
    const {_id, name, details, fee, describe, participants, photo} = course;
//    console.log(props);
    const {dark} = useContext(AuthContext);
  return (
    <div className={`m-2 rounded ${dark? 'bg-slate-800': 'bg-base-300'}`}>
    <div className="card h-full ">
  <figure><img src={photo} alt="car!" style={{height:'150px', paddingTop: '15px'}}/></figure>
  <div className="card-body">
    <h2 className={`card-title ${dark? 'text-white': 'text-black'}`}>{name}</h2>
    <p className={`${dark? 'text-white': 'text-black'}`}>{details}</p>
    <div className="card-actions justify-end">
      <Link to={`/courses/${_id}`}><button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
    </div>
  )
}
