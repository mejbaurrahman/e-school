import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoneyCheck, faTimes, faClock, faCalendarCheck, faArrowCircleRight, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useContext } from 'react';
import { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import ReactToPdf from "react-to-pdf";
import { AuthContext } from '../../Hooks/AuthProvider/AuthProvider';

const ref = createRef();
const options = {
  orientation: 'landscape',
  unit: 'in',
  
};
export default function CourseDetail() {

    const loader = useLoaderData();
    console.log(loader);
    const {name, _id, categoryName, photo, fee, participants, details,time, describe} = loader;
    const {dark} = useContext(AuthContext);
  return (
    <div className={`p-3 m-2 shadow-xl ${dark? 'bg-slate-800': 'bg-base-100'}`}>
    <div className='flex md:justify-start justify-center'>
    <ReactToPdf targetRef={ref} filename={`${name}.pdf`} options={options} scale={1}>
        {({toPdf}) => (
            <button className="btn btn-primary" onClick={toPdf}>Download <FontAwesomeIcon className='mx-2' icon={faArrowAltCircleDown}></FontAwesomeIcon></button>
        )}
    </ReactToPdf>
    </div>
    <div className='mt-3 pt-2 mt-3' ref={ref}>
        <div className="card">
  <figure><img src={photo} alt="Album"/></figure>
  <div className="card-body">
    <h2 className={`card-title ${dark? 'text-white': 'text-black'}`}>Course: {name}</h2>
    <h2 className={`card-title ${dark? 'text-white': 'text-black'}`}>Category: {categoryName}</h2>
    <p className={`${dark? 'text-white': 'text-black'}`}>{details}</p>
    <p className={`${dark? 'text-white': 'text-black'}`}><span className='text-2xl font-semibold'>Course Details:</span> {describe}</p>
    <div className=''>
       <p className={`${dark? 'text-white':'text-black'}`}>Particpants: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> {participants}</p>
       <p className={`${dark? 'text-white':'text-black'}`}>Course Fee: <FontAwesomeIcon icon={faMoneyCheck}></FontAwesomeIcon> {fee} Taka</p>
       <p className={`${dark? 'text-white':'text-black'}`}>Duration: <FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon> {time}</p>
    </div>
    <div className="card-actions justify-end">
    
     <Link to={`/checkout/${_id}`}> <button className="btn btn-secondary">Get Premium Access <FontAwesomeIcon className='mx-2' icon={faArrowCircleRight}></FontAwesomeIcon></button></Link>
    </div>
  </div>
</div> 
    </div>
    </div>
    
  )
}
