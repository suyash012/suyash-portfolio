import React, { useEffect, useState } from 'react';
import backgroundImage from '../assets/backgroud.jpg'; // Make sure the file name is correct

const Home = () => {
    const [text, setText] = useState('');
    const fullText = "I'm a Full Stack Developer";

    useEffect(() => {
        if (text.length < fullText.length) {
            const timeout = setTimeout(() => {
                setText(fullText.slice(0, text.length + 1));
            }, 200);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setText('');
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [text, fullText]);

    const handleSettingsClick = () => {
        console.log("Settings clicked!");
        alert("Settings clicked!");
    };

    const handleDownArrowClick = () => {
        console.log("Down arrow clicked!");
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div 
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            id='home'
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            
            <button
                className="absolute top-5 right-5 text-white text-2xl cursor-pointer z-20"
                onClick={handleSettingsClick}
                aria-label="Settings"
            >
                ⚙️
            </button>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 font-mono">Welcome</h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-mono">
                    {text}
                    <span className="animate-pulse">|</span>
                </h1>
                <p className="text-xl sm:text-2xl mb-6 font-mono">Based in Ghaziabad, Delhi NCR</p>
                <a href='#contact'>
                    <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-900 hover:text-white transition duration-300">
                        Hire Me
                    </button>
                </a>
            </div>
            
            <button
                className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-2xl cursor-pointer animate-bounce z-20"
                onClick={handleDownArrowClick}
                aria-label="Scroll to About section"
            >
                &#8595;
            </button>
        </div>
    );
};

export default Home;