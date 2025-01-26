import React from "react";
import selfImage from '../assets/self.png';
import github from '../assets/logos/github.svg';
import x from '../assets/logos/x.svg';
import linkedin from '../assets/logos/linkedin.svg';
import downloadIcon from '../assets/icons/downloadIcon.svg';
import pinIcon from '../assets/icons/pinIcon.svg';
const Introduction = () => {

    return (
        <div  id="about" className="flex justify-center pt-16 pb-16 lg:pt-48 lg:pb-48 items-center border-b border-gray-700">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center animate-fade-up animate-once animate-duration-[800ms] animate-delay-200">
    <div className=" p-8 md:m-0 w-full lg:pr-0">
        <p className="text-5xl text-white mb-4 font-customFont">Bartosz Gliński</p>
        <p className="text-lg text-gray-400">
        <span 
        className="bg-gradient-to-r from-blue-500 to-purple-500
        inline-block text-transparent bg-clip-text">
        Fullstack 
        </span> Developer</p>
        <p className="text-lg text-gray-400 mb-4">insert something about yourself here</p>
        <p className="text-md text-gray-400  mb-4 flex flex-row items-center">
            <img src={pinIcon} className="h-6 aspect-square"/>
        Katowice, Poland</p>
        <div className="flex flex-row justify-center lg:justify-start">
            <button className="mr-3 text-white border border-white border-solid w-28 h-8 rounded-md flex items-center justify-center"><img className="w-4 h-4 mr-2" src={downloadIcon} alt="download" />CV</button>
            <a href="https://github.com/brtkglnski" target="_blank" rel="noopener noreferrer" className="mr-3 w-8 h-8"><img className="w-8 h-8 filter invert" src={github} alt="github" /></a>
            <a href="https://x.com/teehfuel" target="_blank" rel="noopener noreferrer" className="mr-3 w-8 h-8"><img className="w-8 h-8" src={x} alt="x" /></a>
            <a href="https://linkedin.com/in/bartosz-gliński-44539b1b9" target="_blank" rel="noopener noreferrer" className="mr-3 w-8 h-8"><img className="w-8 h-8" src={linkedin} alt="linkedIn" /></a>
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