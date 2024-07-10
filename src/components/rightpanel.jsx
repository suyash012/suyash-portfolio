import React from 'react'
import Home from './home'
import About from './about'
import What from './what'
import Resume from './resume'
import Project from './Project'
import Contact from './contact'


export default function Rightpanel() {
  return (
    <div className='h-screen w-full md:w-3/4 lg:w-4/5 overflow-y-auto'>
      <Home  />
      <About />
      <What />
      <Resume />
      <Project />
      <Contact />
      
      
      
    </div>
  )
}
