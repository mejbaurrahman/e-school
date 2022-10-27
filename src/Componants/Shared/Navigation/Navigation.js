import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

import DarkModeToggle from "react-dark-mode-toggle";
import { AuthContext } from '../../../Hooks/AuthProvider/AuthProvider';
import logo from '../../../images/logo.png';

export default function Navigation() {

  const {user, logout, dark, setDark} = useContext(AuthContext);
  return (
  <div className='md:container mx-auto'>
<div className={`navbar ${dark? 'bg-slate-700 text-white': 'bg-base-100'}`}>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 ${dark? 'bg-slate-800 text-white': 'bg-base-100'}`}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/courses'>Courses</Link></li>
      <li><Link to='/faq'>FAQ</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      {
        user.uid? <></> :<><li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li></>
      }
      <li className='text-xl'>
      <div className='flex'>
      
      
      <DarkModeToggle
      onChange={setDark}
      checked={dark}
       
    />
    <div>{
          dark? 'Dark': 'Light'}</div>
      </div>
       </li>
      <li>
      <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
    <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
    <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
</button>
      </li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
    <img src={logo} className='rounded-full mr-2' style={{width: '50px', height:'100%'}}  alt="" srcset="" />
        E-School
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li ><Link to='/'>Home</Link></li>
      <li><Link to='/courses'>Courses</Link></li>
      <li><Link to='/faq'>FAQ</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      {
        user.uid? <></> :<><li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li></>
      }
       
       
      <li className='text-xl'>
      <div className='flex'>
      
      
      <DarkModeToggle
      onChange={setDark}
      checked={dark}
       
    />
    <div>{
          dark? 'Dark': 'Light'}</div>
      </div>
       </li>
       
        
      
    </ul>
  </div>
  <div className="navbar-end ">
   {
    user.uid?  <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle showName  avatar">
    <div className='display-name w-20'>
        <span >{user?.displayName}</span>
      </div>
      <div className="w-10 rounded-full">
        <img className='' src={ user?.photoURL}/>
       
      </div>
    </label>

    <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 ${dark? 'bg-slate-800':'bg-base-100'}`}>
      <li className={`${dark? 'text-white':'text-black'}`}>
         <Link  to='/profile'>{user?.displayName}</Link>
      </li>
      <li><a className='btn btn-primary btn-outline mt-3' onClick={logout}>Logout</a></li>
    </ul>
  </div>:<></>
   }
  </div>
 
</div>
    </div>
  )
}
