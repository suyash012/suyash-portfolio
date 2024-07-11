import React from 'react';

const About = () => {
  return (
    <div className='min-h-screen relative font-mono py-10 px-4' id='about-me'>
      <div className='relative text-center mb-12'>
        <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-mono text-gray-500 font-bold opacity-20'>ABOUT ME</h1>
        <h2 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black'>
          Know Me More
          <span className='block h-1 w-16 bg-red-500 mt-2 mx-auto'></span>
        </h2>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between text-base sm:text-lg md:text-xl'>
          <div className='lg:w-2/3 lg:pr-4 mb-8 lg:mb-0'>
            <h1 className='text-2xl sm:text-3xl font-bold mb-4'>
              I'm <span className='text-blue-900'>Suyash Soni</span>, a Web Developer
            </h1>
            <p className='text-gray-700 mb-4'>
              I help you build a brand for your business at an affordable price. Thousands of clients have
              procured exceptional results while working with our dedicated team. When an unknown printer
              took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p className='text-gray-700'>
              Delivering work within time and budget which meets the client's requirements is our motto.
            </p>
          </div>
          <div className='lg:w-1/3'>
            <div className='bg-gray-100 p-4 sm:p-6 rounded-lg'>
              <p className='mb-2'><span className='font-bold'>Name:</span> Suyash Soni</p>
              <p className='mb-2'><span className='font-bold'>Email:</span> <a href="mailto:suyashsoni983@gmail.com" className='text-blue-900'>suyashsoni983@gmail.com</a></p>
              <p className='mb-2'><span className='font-bold'>Age:</span> 22</p>
              <p className='mb-4'><span className='font-bold'>From:</span> Ghaziabad, Delhi NCR</p>
              <a href="https://peppermint-stetson-cc5.notion.site/RESUME-72e1aa47177b41bbad5872630a9a1d5a?pvs=4" download>
                <button className='bg-blue-900 text-white py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300'>
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto mt-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
          <div>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-400'>2+</h2>
            <p className='text-gray-600'>Years Experience</p>
          </div>
          <div>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-400'>250+</h2>
            <p className='text-gray-600'>Coding questions done</p>
          </div>
          <div>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-400'>40+</h2>
            <p className='text-gray-600'>Projects Done</p>
          </div>
          <div>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-400'>5</h2>
            <p className='text-gray-600'>Awards Received</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


