import React from "react";
import { useRef } from 'react';
import selfImage from '../assets/self.jpg';
import github from '../assets/logos/github.svg';
import x from '../assets/logos/x.svg';
import linkedin from '../assets/logos/linkedin.svg';
import downloadIcon from '../assets/icons/downloadIcon.svg';
import pinIcon from '../assets/icons/pinIcon.svg';
// import CV from '../assets/Bartosz_Glinski_CV.pdf';
import { useTranslation, } from "react-i18next";
const Introduction = () => {
    const { t } = useTranslation(); 
    const descriptionNumber = useRef(Math.floor(Math.random() * 4) + 1).current;
    return (
        <div  id="about" className="flex relative justify-center pt-20 pb-8 md:pt-20 md:pb-12 lg:pt-52 lg:pb-52 items-center border-b border-gray-300 dark:border-gray-700 transition-colors duration-300">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center animate-fade-up animate-once animate-duration-[800ms] animate-delay-200">
        <div className="w-full h-full absolute -z-30">
        <div className="w-full max-w-3xl bg-blue-400 h-[18rem] lg:h-[6rem] absolute right-0 top-24 blur-[5rem] rounded-full opacity-20 lg:opacity-40 transition-colors duration-300 animate-wiggle animate-infinite animate-duration-[4000ms]"></div>
        <div className="w-full max-w-md bg-blue-400 h-[4rem] absolute left-5 top-12 blur-[5rem] rounded-full opacity-40 z-20 transition-colors duration-300 animate-wiggle animate-infinite animate-duration-[4000ms]"></div>
        </div>
    <div className=" p-8 md:m-0 w-full lg:pr-0">
        <p className="text-5xl dark:text-white mb-4 font-customFont transition-colors duration-300">Bartosz Gliński</p>
        <p className="text-lg text-gray-700 dark:text-gray-400 transition-colors duration-300">
        <span 
        className="bg-gradient-to-r from-cyan-500 to-sky-600
        inline-block text-transparent bg-clip-text font-semibold transition duration-300">
        Fullstack 
        </span> Developer</p>
        <p className="text-lg text-gray-700 dark:text-gray-400 mb-4 transition-colors duration-300">{t(`introduction.description${descriptionNumber}`)}</p>
        <p className="text-md text-gray-700 dark:text-gray-400  mb-4 flex flex-row items-center transition-colors duration-300">
            <img src={pinIcon} className="h-6 aspect-square filter invert dark:filter-none transition duration-300"/>
            {t('introduction.location')}</p>
        <div className="flex flex-row justify-center lg:justify-start">
            <button className="mr-3 dark:text-white border border-black dark:border-white border-solid  w-28 h-8 rounded-md flex items-center justify-center transition duration-300">
                <a className="flex items-center justify-center" /*href={CV}*/>
                <img className="w-4 h-4 mr-2 filter invert dark:filter-none transition duration-300" src={downloadIcon} alt="download" />
                {t('introduction.resume')}
                </a>
                </button>
            <a href="https://github.com/brtkglnski" target="_blank" rel="noopener noreferrer" className="mr-3 w-8 h-8"><img className="w-8 h-8 filter dark:invert transition duration-300" src={github} alt="github" /></a>
            {/* <a href="https://x.com/teehfuel" target="_blank" rel="noopener noreferrer" className="mr-3 w-8 h-8"><img className="w-8 h-8 filter invert dark:filter-none transition duration-300" src={x} alt="x" /></a> */}
            <a href="https://linkedin.com/in/bartosz-gliński-44539b1b9" target="_blank" rel="noopener noreferrer" className="mr-3 w-8 h-8 filter invert dark:filter-none transition duration-300"> <img className="w-8 h-8" src={linkedin} alt="linkedIn" /></a>
        </div>
    </div>
    <div className="flex justify-center items-center lg:mr-8">
    <img src={selfImage} className=" w-full max-w-[200px] max-h-[200px] lg:max-w-[300px] lg:max-h-[300px] aspect-square rounded-full " alt={"Me!"}></img>
    </div>
        </div>
        </div>
    );
}

export default Introduction;