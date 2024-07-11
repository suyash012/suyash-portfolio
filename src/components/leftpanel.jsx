import React, { useState, useEffect } from 'react';
import profile from '../../src/assets/linkdin.jpeg';
import github from '../assets/github.jpeg';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png'; // Assuming you have a Twitter icon

export default function Leftpanel() {
  const [image, setImage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const handleFile = (e) => {
    if (e.target.files[0]) {
      const newImage = URL.createObjectURL(e.target.files[0]);
      setImage(newImage);
      localStorage.setItem('profileImage', newImage);
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
    setIsOpen(false); // Close menu on mobile after clicking
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-700 text-white p-2 rounded-full"
        onClick={toggleMenu}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out md:min-h-screen w-64 md:w-1/4 lg:w-1/5 bg-black flex flex-col justify-between p-4 overflow-y-auto md:overflow-hidden z-40`}>
        <div className='flex flex-col items-center'>
          <img src={image || profile} alt="Profile" className='h-40 w-40 rounded-full mb-4 object-cover' />
          <input type="file" onChange={handleFile} accept="image/*" className='hidden' id='input-form' />
          <label htmlFor="input-form" className='bg-blue-700 cursor-pointer text-center p-2 w-full md:w-auto border border-slate-500 rounded-lg hover:bg-blue-900 hover:text-white transition duration-300 font-mono text-white'>
            UPLOAD PROFILE PIC
          </label>
        </div>

        <nav className='text-white text-xl text-center my-12 font-mono'>
          <ul>
            {['HOME', 'ABOUT-ME', 'WHAT-I-DO', 'RESUME', 'PORTFOLIO', 'CONTACT'].map((item) => (
              <li key={item} className='hover:text-green-500 my-4'>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={handleSmoothScroll}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex justify-center space-x-4'>
          {[
            { href: "https://github.com/suyash012", src: github, alt: "GitHub" },
            { href: "https://www.linkedin.com/in/suyash-soni-4a65781b8/", src: linkedin, alt: "LinkedIn" },
            { href: "https://twitter.com", src: twitter, alt: "Twitter" }
          ].map((social) => (
            <a key={social.alt} href={social.href} target="_blank" rel="noopener noreferrer" className='hover:opacity-80 transition-opacity'>
              <img src={social.src} alt={social.alt} className='h-6 w-6' />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}