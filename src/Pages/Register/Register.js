import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Hooks/AuthProvider/AuthProvider';

export default function Register() {
  const { registerWithEmailAndPassword,setUser, user, dark,logout,updateProfileWithDisplayNameAndPhoto} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegistration =(e)=>{
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    registerWithEmailAndPassword( email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Updated');
      updateProfileWithDisplayNameAndPhoto(displayName, photoURL)
      .then(()=>{
          console.log('photo updated');
          console.log(user);
          setUser(user);

          alert(`Succesfully Registered! Please login now with ${user.email}`)
          
         
      }).catch((error)=>{
        console.log(error.message);
      });
      
      
      // ...
      logout();
      navigate('/login');
      form.reset();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    
    
  }
  return (
    <div>
      <div className={`hero min-h-screen ${dark? 'bg-slate-600': 'bg-base-200'}`}>
      <div className={`hero-content flex-col flex-row-reverse ${dark? 'bg-slate-600':'bg-base-200'}`}>
    <div className="text-center lg:text-left">
    <h1 className={`text-5xl font-bold text-center ${dark? 'text-white': 'text-black'}`}>Registration!</h1>
    <p className={`py-6 text-center ${dark? 'text-white': 'text-black'}`}>Register now to checkout our courses and get special offer.</p>

    </div>
    <div className={`card flex-shrink-0 w-full max-w-sm shadow-2xl ${dark? 'bg-slate-900':'bg-base-100'}`}>
      <form onSubmit={handleRegistration} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className={`label-text ${dark? 'text-white':'text-black'}`}>Full Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className={`label-text ${dark? 'text-white':'text-black'}`}>Photo Url</span>
          </label>
          <input type="text" name='photoURL' placeholder="Photo Url" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className={`label-text ${dark? 'text-white':'text-black'}`}>Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className={`label-text ${dark? 'text-white':'text-black'}`}>Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <div className={`mx-auto mb-3 ${dark? 'text-white':'text-black'}`}>
        Already User? <Link to='/login' className='underline text-primary'>Login</Link>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
