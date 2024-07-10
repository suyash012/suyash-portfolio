import React, { useState } from 'react';
import profile from '../../src/assets/linkdin.jpeg';
import github from '../assets/github.jpeg';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.jpg';

export default function Leftpanel() {
  const [image, setImage] = useState('');

  const handleFile = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const element = document.querySelector(target);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className='h-screen w-full md:w-1/4 lg:w-1/5 bg-black flex flex-col justify-around overflow-hidden p-4'>
      <div className='flex flex-col items-center'>
        <img src={image || profile} alt="Profile" className='h-40 w-40 rounded-full mb-4' />
        <input type="file" onChange={handleFile} className='hidden' id='input-form' />
        <label htmlFor="input-form" className='bg-blue-700 cursor-pointer text-center p-2 w-full md:w-auto border border-slate-500 rounded-lg hover:bg-blue-900 hover:text-white transition duration-300 font-mono'>
          UPLOAD PROFILE PIC
        </label>
      </div>
      <div className='text-white text-xl text-center my-12' style={{ fontFamily: 'monospace' }}>
        <ul>
          <li className='hover:text-green-500 my-4'>
            <a href="#home" onClick={handleSmoothScroll}>HOME</a>
          </li>
          <li className='hover:text-green-500 my-4'>
            <a href="#about" onClick={handleSmoothScroll}>ABOUT ME</a>
          </li>
          <li className='hover:text-green-500 my-4'>
            <a href="#what" onClick={handleSmoothScroll}>WHAT I DO</a>
          </li>
          <li className='hover:text-green-500 my-4'>
            <a href="#resume" onClick={handleSmoothScroll}>RESUME</a>
          </li>
          <li className='hover:text-green-500 my-4'>
            <a href="#portfolio" onClick={handleSmoothScroll}>PORTFOLIO</a>
          </li>
          <li className='hover:text-green-500 my-4'>
            <a href="#contact" onClick={handleSmoothScroll}>CONTACT</a>
          </li>
        </ul>
      </div>
      <div className='flex justify-center'>
        <a href="https://github.com/suyash012" className='mx-2'>
          <img src={github} alt="GitHub" className='h-6 w-6' />
        </a>
        <a href="https://www.linkedin.com/in/suyash-soni-4a65781b8/" className='mx-2'>
          <img src={linkedin} alt="LinkedIn" className='h-6 w-6' />
        </a>
        <a href="https://twitter.com" className='mx-2'>
          <i className="fab fa-twitter text-white"></i>
        </a>
      </div>
    </div>
  );
}



