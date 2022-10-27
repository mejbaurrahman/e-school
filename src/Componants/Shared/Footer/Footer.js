import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Hooks/AuthProvider/AuthProvider';
import LocateUs from '../LocateUs/LocateUs';

export default function Footer() {
  const {dark} = useContext(AuthContext);
  return (
    <div>
    <footer className={`footer p-10 text-base-content ${dark? 'bg-slate-800 text-white': 'bg-base-300 text-black'}`}>
  <div>
    <span className={`footer-title ${dark? 'text-white': 'text-black'}`}>E-School</span> 
    <Link className={`link link-hover ${dark? 'text-white': 'text-black'}`}to='/courses'>Courses</Link> 
    <Link className={`link link-hover ${dark? 'text-white': 'text-black'}`} to='/blog'>Blog</Link> 
    <Link className={`link link-hover ${dark? 'text-white': 'text-black'}`} to='/faq'>Faq</Link> 
    <Link className={`link link-hover ${dark? 'text-white': 'text-black'}`} to='/'>Terms of use</Link> 
    <Link className={`link link-hover ${dark? 'text-white': 'text-black'}`} to='/'>Privacy policy</Link> 
  </div>  
  <div>
    <span className={`footer-title ${dark? 'text-white': 'text-black'}`}>Legal</span> 
    <a className={`link link-hover ${dark? 'text-white': 'text-black'}`}>Terms of use</a> 
    <a className={`link link-hover ${dark? 'text-white': 'text-black'}`}>Privacy policy</a> 
    <a className={`link link-hover ${dark? 'text-white': 'text-black'}`}>Cookie policy</a>
  </div> 
  <div>
    <span className={`footer-title ${dark? 'text-white': 'text-black'}`}>Social Link</span> 
    <div className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <a href='https://www.facebook.com/' target='_blank'><FontAwesomeIcon className={`text-2xl ${dark? 'text-white': 'text-black'}`} icon={faFacebook}></FontAwesomeIcon></a>
      <a href='https://www.youtube.com/' target='_blank'><FontAwesomeIcon className={`text-2xl ${dark? 'text-white': 'text-black'}`}icon={faYoutube}></FontAwesomeIcon></a>
      <a href='https://www.instagram.com/' target='_blank'><FontAwesomeIcon className={`text-2xl ${dark? 'text-white': 'text-black'}`} icon={faInstagram}></FontAwesomeIcon></a>
      <a href='https://www.twitter.com/' target='_blank'><FontAwesomeIcon className={`text-2xl ${dark? 'text-white': 'text-black'}`} icon={faTwitter}></FontAwesomeIcon></a>
      
    </div>
  </div>
  </div> 
  <div>
    <span className={`footer-title ${dark? 'text-white': 'text-black'}`}>Subscribe Us</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className={`label-text ${dark? 'text-white': 'text-black'}`}>Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
<div>
  <LocateUs></LocateUs>
</div>
<footer className={`footer footer-center p-4 text-base-content ${dark? 'bg-slate-800':'bg-base-300'}`}>
  <div>
    <p className={`${dark? 'text-white': 'text-black'}`}>Copyright © 2022 - All right reserved by Mejba</p>
  </div>
</footer>
    </div>
  )
}
