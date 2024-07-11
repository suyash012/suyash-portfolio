import React from 'react';
import why from '../assets/icon-design.svg';
import hey from '../assets/icon-dev.svg';
import hello from '../assets/icon-app.svg';
import how from '../assets/icon-photo.svg';

function What() {
  return (
    <div className='relative font-mono py-10 px-4' id='what-i-do'>
      <div className='relative text-center mb-12'>
        <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-mono text-gray-400 font-bold opacity-20'>SERVICES</h1>
        <h2 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black'>
          WHAT I DO
          <span className='block h-1 w-16 bg-red-500 mt-2 mx-auto'></span>
        </h2>
      </div>
      <div className='container mx-auto text-white'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center'>What I'm Doing</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {[
            { icon: why, title: "Web Design", description: "The most modern and high-quality design made at a professional level." },
            { icon: hey, title: "Web Development", description: "High-quality development of sites at the professional level." },
            { icon: hello, title: "Web Apps", description: "Professional development of applications for Windows and MacOS." },
            { icon: how, title: "Analytics", description: "I analyze the market and develop high-quality products of any category according to the need." }
          ].map((service, index) => (
            <div key={index} className='bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center sm:items-start'>
              <img src={service.icon} alt={`${service.title} Icon`} className='w-12 h-12 mb-4 sm:mb-0 sm:mr-4'/>
              <div className='text-center sm:text-left'>
                <h2 className='text-lg sm:text-xl font-bold'>{service.title}</h2>
                <p className='mt-2 text-sm sm:text-base'>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default What;