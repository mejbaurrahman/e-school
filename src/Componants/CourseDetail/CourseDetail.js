import React from 'react'
import { createRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import ReactToPdf from "react-to-pdf";

const ref = createRef();
const options = {
  orientation: 'landscape',
  unit: 'in',
  
};
export default function CourseDetail() {

    const loader = useLoaderData();
    console.log(loader);
    const {name, _id, categoryName, photo, fee, details, describe} = loader;
  return (
    <div className='p-3 mt-3' ref={ref}>
        <div className="card  bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <div className='divider'></div>
    <p>{describe}</p>
    <div className="card-actions justify-end">
    <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} scale={1}>
        {({toPdf}) => (
            <button className="btn btn-primary" onClick={toPdf}>Download</button>
        )}
    </ReactToPdf>
      <button className="btn btn-secondary">Checkout</button>
    </div>
  </div>
</div>
    
     
    </div>
  )
}
