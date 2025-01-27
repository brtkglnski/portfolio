import React from "react";
import skillsData from "../data/skillsData";
const Skills = () => {

    const skillElements = skillsData.skills.map((skill, index) => (
        <span key={index} className="flex flex-row p-2 pt-1 items-center border text-black dark:text-white border-black dark:border-white rounded-lg m-1 ml-0 mr-2 
        transition duration-300 ease-in-out opacity-60 hover:opacity-100">
            <img src={skill.icon} className="filter dark:invert h-6 w-6" alt="icon" />
            <p className="ml-2">{skill.name}</p>
        </span>
    ));

    return (
        <div  id="skills" className="scroll-mt-24 animate-fade animate-once animate-duration-[600ms] animate-delay-[200ms]">
               <h1 className=" pl-8 pb-6 text-3xl text-black dark:text-white font-customFont">Skills</h1>
            <div className="flex flex-row flex-wrap text-white p-4">
            {skillElements}
            </div>
        </div>
    )
}
export default Skills;

//  