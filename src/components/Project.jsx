import React, { useState } from 'react';

const projects = [
  { id: 1, name: 'agroHope', category: 'Web development', image: 'https://s3-alpha.figma.com/hub/file/5276879043/30c43265-ee5b-451d-b603-a799311c85a3-cover.png', link: 'https://agrohope.vercel.app/' },
  { id: 2, name: '3D Clock', category: 'Web design', image: 'https://s3-alpha.figma.com/hub/file/1178202423/3a2aa469-39b9-49ee-b6e8-e1d105a4cea6-cover.png', link: 'https://digital-clock-liart-sigma.vercel.app/' },
  { id: 3, name: 'ZONOCO', category: 'Web development', image: 'https://s3-alpha.figma.com/hub/file/2153502487/540b2365-8f75-4141-aa88-fc9f7db1beb8-cover.png', link: 'https://hackinnovate.vercel.app/' },
  { id: 4, name: 'DSA TRACKER SHEET', category: 'Algorithms', image: 'https://s3-alpha.figma.com/hub/file/5400874997/105ca147-0ad4-42e2-b7eb-304b143ff9e2-cover.png', link: 'https://dsa-tracker-beta.vercel.app/' },
  { id: 5, name: 'TASK MANAGEMENT', category: 'Web design', image: 'https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/88fe68dcb62308335ca4642a8ac3e236576e7c23', link: 'https://todo-list-kappa-ashen.vercel.app/' },
  { id: 6, name: 'Tic TAC TOE', category: 'Web design', image: 'https://s3-alpha.figma.com/hub/file/3707131766/resized/800x480/8a9e2ef2-ed3e-48ae-9e8f-efa04caa7484-cover.png', link: 'https://tic-tac-toe-ebon-six-28.vercel.app/' },
];

const Project = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className='yeloo font-mono relative min-h-[250vh] lg:min-h-[120vh] py-16 px-4' id='portfolio'>
      <div className='relative text-center mb-12'>
        <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-mono text-gray-500 font-bold opacity-20'>PROJECTS</h1>
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          PORTFOLIO
          <span className="block h-1 w-16 bg-red-500 mt-2 mx-auto"></span>
        </h2>
      </div>
      <div className="bg-gray-900 text-white p-4 sm:p-8 rounded-lg">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Projects</h1>
        
        <div className="mb-6 flex flex-wrap justify-center">
          <button onClick={() => setFilter('All')} className="m-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">All</button>
          <button onClick={() => setFilter('Web design')} className="m-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">Web design</button>
          <button onClick={() => setFilter('Applications')} className="m-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">Applications</button>
          <button onClick={() => setFilter('Web development')} className="m-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">Web development</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-gray-800 rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-gray-400 text-sm">{project.category}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
