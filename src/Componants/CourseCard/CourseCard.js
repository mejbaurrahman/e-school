import React from 'react'
import { Link } from 'react-router-dom';

export default function CourseCard({course}) {
    const {_id, name, details, fee, describe, participants, photo} = course;
//    console.log(props);
  return (
    <div className='m-2'>
    <div className="card h-full glass">
  <figure><img src={photo} alt="car!" style={{height:'150px', paddingTop: '15px'}}/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <div className="card-actions justify-end">
      <Link to={`/courses/${_id}`}><button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
    </div>
  )
}
