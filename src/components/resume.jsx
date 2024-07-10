import React from 'react';

const SkillBar = ({ skill, percentage, technologies }) => (
  <div className="mb-6">
    <div className="flex flex-col sm:flex-row justify-between mb-1">
      <span className="font-semibold">{skill}</span>
      <span>{percentage}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
      <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
    <p className="text-sm text-gray-400 mt-2">{technologies}</p>
  </div>
);

const EducationItem = ({ degree, year, school, subjects }) => (
  <div className="mb-6">
    <h3 className="font-semibold">{degree}</h3>
    <p className="text-yellow-400">{year}</p>
    <p>{school}</p>
    {subjects && <p className="text-sm text-gray-400 mt-1">{subjects}</p>}
  </div>
);

const ExperienceItem = ({ position, year, company }) => (
  <div className="mb-6">
    <h3 className="font-semibold">{position}</h3>
    <p className="text-yellow-400">{year}</p>
    <p>{company}</p>
  </div>
);

const Resume = () => {
  return (
    <div className='yelo relative font-mono min-h-[190vh] py-16 px-4' id='resume'>
      <div className='relative text-center mb-12'>
        <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-mono text-gray-500 font-bold opacity-20'>RESUME</h1>
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          RESUME
          <span className="block h-1 w-16 bg-red-500 mt-2 mx-auto"></span>
        </h2>
      </div>
      <div className="bg-gray-900 text-white p-4 sm:p-8 rounded-lg">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Resume</h1>
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Education</h2>
          <EducationItem 
            degree="B.Tech CSE(Core) - 8.47 CGPA"
            year="2021 — 2025"
            school="SRM University Chennai"
          />
          <EducationItem 
            degree="Class 12th - 94%"
            year="2020 — 2021"
            school="Mount st. Mary's School, Delhi Cantt, New Delhi"
            subjects="Physics, Chemistry, Maths + Computer Science (Basic Python, SQL, Cyber Security)"
          />
          <EducationItem 
            degree="Class 10th - 83.5%"
            year="2018 — 2019"
            school="Army Public School, Shankar Vihar, New Delhi"
            subjects="Maths, Science + CS Fundamentals(MS Office - Excel, Powerpoint, Word)"
          />
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Experience</h2>
          <ExperienceItem 
            position="ISTE Technical Team Member"
            year="2022 - 2024"
            company="ISTE SRM Chennai"
          />
          <ExperienceItem 
            position="Web Developer Intern"
            year="2023 - 2024"
            company="DATACOM Technologies Pvt. Ltd."
          />
          <ExperienceItem 
            position="FULL STACK DEVELOPER INTERN"
            year="2024 — 2025"
            company="code Clause Technologies Pvt. Ltd."
          />
          <ExperienceItem 
            position="Web Development Intern"
            year="2023 — 2024"
            company="Intern PE"
          />
        </section>
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">My Skills</h2>
          <SkillBar skill="Web Development" percentage={80} technologies="HTML, CSS, BootStrap, JS, Material UI, Node Js, ReactJs, NextJs, ExpressJs, MongoDB" />
          <SkillBar skill="Problem Solving" percentage={70} technologies="Data Structure, Algorithms, UML, Aptitude, Reasoning, System Design(Low Level Design / High Level Design)" />
          <SkillBar skill="Programming Languages" percentage={90} technologies="Assembly /C/C++(17/19/21) / Python(2/3) / JavaScript(ES5/ES6) / C# / Linux" />
          <SkillBar skill="Tools & Technologies" percentage={50} technologies="Cloud Computing - GCP&AWS, VS Code, Replit, WordPress, Wix, Canva, Figma, ChatGPT I.E Prompt Engineering, Git, GitHub, API's, Microsoft Office" />
        </section>
      </div>
    </div>
  );
};

export default Resume;