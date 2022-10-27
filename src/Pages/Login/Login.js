import React, { useContext } from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../Hooks/AuthProvider/AuthProvider'


export default function Login() {

  const { loginWithEmailAndPassword, googleSignIn, githubSignIn, user, loading} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  console.log(from);
  const handleGithubSignIn=(e)=>{
    e.preventDefault();
    githubSignIn()
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from, {replace:true});
      
    // ...
  }).catch((error) => {
    // Handle Errors here.
    console.log(error.message);
    // ...
  });
}
  const handleGoogleSignIn=(e)=>{
    e.preventDefault();
      googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace:true});
      // ...
    }).catch((error) => {
      // Handle Errors here.
      console.log(error.message);
      // ...
    });
  }

  const handleLogin =(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      form.reset();
      navigate(from, {replace:true});
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  return (
    <div className=''>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <p className="py-6 text-center">Login to checkout our courses and get special offer.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password'  placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className='mx-auto mb-3'>
        New User? <Link to='/register' className='underline text-primary'>Register</Link>
      </div>
    </div>
    <div className="divider"></div>
    <div className='mx-auto'>
      <button className='btn btn-outline btn-primary' onClick={handleGoogleSignIn}>Login with Google </button>
    </div>
    <div className='mx-auto'>
      <button className='btn btn-outline btn-ghost' onClick={handleGithubSignIn}>Login with Github</button>
    </div>
  </div>

</div>
    </div>
  )
}
