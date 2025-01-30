import React from "react";
import { useState } from "react";
import Timeline from './Timeline';
import { useTranslation, } from "react-i18next";

const Experience = () => {
    const { t } = useTranslation(); 

    const [activeTab, setActiveTab] = useState("work");
    return (
        <div id="experience" className="w-full min-h-full flex flex-col justify-center items-start scroll-mt-24 animate-fade animate-once animate-duration-[600ms] animate-delay-[200ms]">
            <h1 className=" pl-8 pb-6 text-3xl font-customFont dark:text-white">{t('experience.title')}</h1>
        <div className="w-full h-auto flex flex-col justify-center p-4">
            <div className="w-full border border-black dark:border-white h-12 w-8 rounded-md flex flex-row items-center">
            <button className={`w-1/2 rounded-md h-full flex items-center justify-center
                ${activeTab === "work"
                      ? "bg-black dark:bg-white text-white dark:text-black"
                      : "text-black dark:text-white"
                  }`}
                onClick={()=> setActiveTab("work")}>{t('experience.work-button')}</button>
            <button 
            className={`w-1/2  rounded-md h-full flex items-center justify-center
            ${activeTab === "education"
                      ? "bg-black dark:bg-white text-white dark:text-black"
                      : "text-black dark:text-white"
                  }`}
                  onClick={()=> setActiveTab("education")}>{t('experience.education-button')}</button>
            </div>
            <div className={`border border-black dark:border-white w-full h-auto rounded-md mt-4 lg:mt-2 dark:text-white flex justify-center items-center 
                animate-duration-200 animate-ease-out animate-normal ${activeTab === 'work' ? " animate-delay-[0ms] animate-fade-left": " animate-delay-[0ms] animate-fade-right"}`}>
                {activeTab === "work" ? <Timeline type="work"/> : <Timeline type="education"/>}
                
                </div>
        </div>
        </div>
    )
}
export default Experience;