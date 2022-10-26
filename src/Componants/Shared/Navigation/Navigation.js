import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Hooks/AuthProvider/AuthProvider';
import logo from '../../../images/logo.png';

export default function Navigation() {

  const {user, loading, logout} = useContext(AuthContext);
  return (
    <div className='md:container mx-auto'>
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/courses'>Courses</Link></li>
      <li><Link to='/faq'>FAQ</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      {
        user.uid? <></> :<><li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li></>
      }
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">
    <img src={logo} className='rounded-full mr-2' style={{width: '50px', height:'100%'}}  alt="" srcset="" />
        E-School
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/courses'>Courses</Link></li>
      <li><Link to='/faq'>FAQ</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      {
        user.uid? <></> :<><li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li></>
      }
    </ul>
  </div>
  <div className="navbar-end">
   {
    user.uid?  <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src={user?.photoURL? user.photoURL: <></>} />
      </div>
    </label>
    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
         <Link to='/profile'>{user?.displayName}</Link>
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
