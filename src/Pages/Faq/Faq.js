import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Hooks/AuthProvider/AuthProvider'

export default function Faq() {
    const {dark} = useContext(AuthContext);
  return (
    <div>
        <section className={`${dark? 'bg-slate-800 text-white': 'bg-base-300 text-black'}`}>
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 className={`mb-8 text-4xl tracking-tight font-extrabold ${dark? 'text-white':'text-black'}`}>Frequently asked questions</h2>
      <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          <div>
              <div className="mb-10">
                  <h3 className={`flex items-center mb-4 text-lg font-medium ${dark? 'text-white':'text-black'}`}>
                      <svg className={`flex-shrink-0 mr-2 w-5 h-5 ${dark? 'text-white':'text-black'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      How Online Courses Work?
                  </h3>
                  <p className={`${dark? 'text-white':'text-black'}`}>You can enrich your knowledge with the help of our outstanding mentors. So, this online course help you so much. You feel offline beacuse all class will help with all metarials which is available in offline.</p>
              </div>
              <div className="mb-10">                        
                  <h3 className={`flex items-center mb-4 text-lg font-medium ${dark? 'text-white':'text-black'}`}>
                      <svg className={`flex-shrink-0 mr-2 w-5 h-5 ${dark? 'text-white':'text-black'}`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      What does "lifetime access" exactly mean?
                  </h3>
                  <p className={`${dark? 'text-white':'text-black'}`}>Once you have purchased our course packages of any category, you will have access to all of the future updates based on the roadmap, free of charge.</p>
              </div>
              <div className="mb-10">
              <h3 className={`flex items-center mb-4 text-lg font-medium ${dark? 'text-white':'text-black'}`}>
                      <svg className={`flex-shrink-0 mr-2 w-5 h-5 ${dark? 'text-white':'text-black'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      How does support work?
                  </h3>
                  <p className={`${dark? 'text-white':'text-black'}`}>24/7 hours we are ready to help you. We're aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project.</p>
                  <p className={`${dark? 'text-white':'text-black'}`}>Feel free to <a href="#" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline" target="_blank" rel="noreferrer">contact us</a> and we'll help you out as soon as we can.</p>
              </div>
              <div className="mb-10">
              <h3 className={`flex items-center mb-4 text-lg font-medium ${dark? 'text-white':'text-black'}`}>
                      <svg className={`flex-shrink-0 mr-2 w-5 h-5 ${dark? 'text-white':'text-black'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      Will I be capable of a develop some projects after this course? 
                  </h3>
                  <p className={`${dark? 'text-white':'text-black'}`}>Yes you will be capable of develop such a wonderfull projects. In every courses you will complete some projects with us also. </p>

              </div>
          </div>
          <div>
              <div className="mb-10">
              <h3 className={`flex items-center mb-4 text-lg font-medium ${dark? 'text-white':'text-black'}`}>
              <svg className={`flex-shrink-0 mr-2 w-5 h-5 ${dark? 'text-white':'text-black'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> 
              Will you help me to find jobs? 
                  </h3>
                  <p className={`${dark? 'text-white':'text-black'}`}>Yes, After the course If you complete with some good marks, our job placement team help you to find a wonderful job.</p>
              </div>
              <div className="mb-10">
              <h3 className={`flex items-center mb-4 text-lg font-medium ${dark? 'text-white':'text-black'}`}>
                      <svg className={`flex-shrink-0 mr-2 w-5 h-5 ${dark? 'text-white':'text-black'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      How can I know that I am doing better in this course? 
                  </h3>
                  <p className={`${dark? 'text-white':'text-black'}`}>We almost 10+ assignments in every course. You will notify how is your course running.</p>
              </div>
              
             
             
          </div>
      </div>
  </div>
</section>
    </div>
  )
}
