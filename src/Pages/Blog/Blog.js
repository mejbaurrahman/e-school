import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Hooks/AuthProvider/AuthProvider'

export default function Blog() {
  const {dark} = useContext(AuthContext);
  return (
   <div className='md:container mx-auto'>
     <div className={` mt-4 ${dark? 'bg-slate-800 text-white': 'bg-base-200 text-black'}`}>
        <div className={`  ${dark? 'bg-slate-900': 'bg-base-200'} mt-3 p-4`}>
            <h1 className={` text-center text-4xl font-semibold ${dark? 'text-white': 'text-black'}`}>Blog</h1>
            <hr />
        </div>
        <div className={`  ${dark? 'bg-slate-900': 'bg-base-200'} my-3 border border-2 border-primary mt-3 p-4`}>
            <h1 className={`mb-2 text-center text-xl ${dark? 'text-white': 'text-black'}`}>What is cors?</h1>
            <hr />
            <div className={`${dark? 'text-white': 'text-black'}`}>
            CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
            In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.An API is a set procedure for two programs to communicate. This means that API resources are consumed by other clients and servers.
            </div>
        </div>
        <div className={`  ${dark? 'bg-slate-900': 'bg-base-200'} my-3 border border-2 border-primary mt-3 p-4`}>
            <h1 className={`mb-2 text-center text-xl ${dark? 'text-white': 'text-black'}`}>Why are you using firebase? What other options do you have to implement authentication?</h1>
            <hr />
            <div className={`${dark? 'text-white': 'text-black'}`}>
            Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.
            There are amny options to handle authentication. such as Auth0 , JSON Web Token, Keycloak, Amazon Cognito  as well as raw mysql authentication.
            </div>
        </div>
        <div className={`  ${dark? 'bg-slate-900': 'bg-base-200'} my-3 border border-2 border-primary mt-3 p-4`}>
            <h1 className={`mb-2 text-center text-xl ${dark? 'text-white': 'text-black'}`}>How does the private route work?</h1>
            <hr />
            <div className={`${dark? 'text-white': 'text-black'}`}>
            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).we have wrapped non authenticated routes with PublicRoute component and authenticated routes with PrivateRoute component.
            </div>
        </div>
        <div className={`  ${dark? 'bg-slate-900': 'bg-base-200'} my-3 border border-2 border-primary mt-3 p-4`}>
            <h1 className={`mb-2 text-center text-xl ${dark? 'text-white': 'text-black'}`}>What is Node? How does Node work?</h1>
            <hr />
            <div className={`${dark? 'text-white': 'text-black'}`}>
            Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
            </div>
        </div>
    </div>
   </div>
  )
}
