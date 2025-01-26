import React from "react";
import lightModeIcon from "../assets/icons/lightModeIcon.svg";
const Navbar = () => {
    return (
        <div className="fixed z-40 p-4 lg:p-8 w-full max-w-3xl h-16 flex flex-row items-center justify-between 
         font-semibold text-white text-xs md:text-base
        filter backdrop-blur-3xl border border-t-0 border-gray-700 rounded-b-lg
        animate-fade-down animate-once animate-duration-[600ms] animate-delay-[200ms]
        ">
            <div className="flex flex-row justify-between w-3/5 lg:w-3/5 scroll-smooth">
                <a href="#about" className="hover:cursor-pointer">About</a>
                <a href="#experience" className="hover:cursor-pointer">Experience</a>
                <a href="#skills" className="hover:cursor-pointer">Skills</a>
                <a href="#projects" className="hover:cursor-pointer">Projects</a>
            </div>
            <div className="flex flex-row items-center justify-end lg:justify-end w-1/5 lg:w-2/5">
                <button>PL</button>
                <button><img className="ml-5 w-6 h-6 filter invert" src={lightModeIcon} alt="light mode" /></button>
            </div>
        </div>
    )
}
export default Navbar;