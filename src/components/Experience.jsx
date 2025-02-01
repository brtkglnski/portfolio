import React from "react";
import { useState } from "react";
import Timeline from './Timeline';
import { useTranslation, } from "react-i18next";

const Experience = () => {
    const { t } = useTranslation(); 

    const [activeTab, setActiveTab] = useState("work");
    return (
        <div id="experience" className="relative w-full min-h-full flex flex-col justify-center items-start scroll-mt-24 animate-fade animate-once animate-duration-[600ms] animate-delay-[200ms]">
                                       <div className="w-full h-full absolute -z-30">
        <div className="w-full max-w-lg bg-blue-400 h-[6rem] absolute -left-96 bottom-0 blur-[5rem] rounded-full z-10 opacity-40
         transition-colors duration-300 animate-wiggle-more animate-infinite animate-duration-[4000ms]"></div>
        </div>
            <h1 className=" pl-8 pb-6 text-3xl font-customFont dark:text-white transition-colors duration-300">{t('experience.title')}</h1>
        <div className="w-full h-auto flex flex-col justify-center p-4">
            <div className="w-full border border-black dark:border-white h-12 w-8 rounded-md flex flex-row items-center transition-colors duration-300">
            <button className={`w-1/2 rounded-md h-full flex items-center justify-center transition-colors duration-300
                ${activeTab === "work"
                      ? "bg-black dark:bg-white text-white dark:text-black"
                      : "text-black dark:text-white"
                  }`}
                onClick={()=> setActiveTab("work")}>{t('experience.work-button')}</button>
            <button 
            className={`w-1/2  rounded-md h-full flex items-center justify-center transition-colors duration-300
            ${activeTab === "education"
                      ? "bg-black dark:bg-white text-white dark:text-black"
                      : "text-black dark:text-white"
                  }`}
                  onClick={()=> setActiveTab("education")}>{t('experience.education-button')}</button>
            </div>
            <div className={`border border-black dark:border-white w-full h-auto rounded-md mt-4 lg:mt-2 dark:text-white flex justify-center items-center transition-colors duration-300
                animate-duration-200 animate-ease-out animate-normal ${activeTab === 'work' ? " animate-delay-[0ms] animate-fade-left": " animate-delay-[0ms] animate-fade-right"}`}>
                {activeTab === "work" ? <Timeline type="work"/> : <Timeline type="education"/>}
                
                </div>
        </div>
        </div>
    )
}
export default Experience;