import React from "react";
import selfImage from '../assets/self.png';
import githubIcon from '../assets/githubIcon.svg';
import xIcon from '../assets/xIcon.svg';
import linkedinIcon from '../assets/linkedinIcon.svg';
import downloadIcon from '../assets/downloadIcon.svg';
const Introduction = () => {
    return (
        <div className="flex justify-center items-center">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:h-3/5">
    <div className=" p-8 md:m-0 w-full">
        <p className="text-5xl text-white mb-4">Bartosz Gliński</p>
        <p className="text-lg text-gray-400">
        <span 
        className="bg-gradient-to-r from-blue-600 to-purple-400
        inline-block text-transparent bg-clip-text">
        Fullstack 
        </span> Developer</p>
        <p className="text-lg text-gray-400 mb-4">Niezły ten tailwind xdd</p>
        <p className="text-lg text-gray-400  mb-4">Katowice, Poland</p>
        <div className="flex flex-row justify-center lg:justify-start">
            <button className="mr-3 text-white border border-white border-solid w-28 h-8 rounded-md flex items-center justify-center"><img className="w-4 h-4 mr-2" src={downloadIcon} alt="download" />CV</button>
            <a href="https://github.com/brtkglnski" target="_blank" rel="noopener noreferrer" className="mr-3 w-8 h-8"><img className="w-8 h-8" src={githubIcon} alt="github" /></a>
            <a href="https://x.com/teehfuel" target="_blank" rel="noopener noreferrer" className="mr-3 w-8 h-8"><img className="w-8 h-8" src={xIcon} alt="x" /></a>
            <a href="https://linkedin.com/in/bartosz-gliński-44539b1b9" target="_blank" rel="noopener noreferrer" className="mr-3 w-8 h-8"><img className="w-8 h-8" src={linkedinIcon} alt="linkedIn" /></a>
        </div>
    </div>
    <div className="flex justify-center items-center">
    <img src={selfImage} className="aspect-square w-3/5 lg:w-4/5 max-h-full rounded-full " alt={"Me!"}></img>
    </div>
        </div>
        </div>
    );
}

export default Introduction;