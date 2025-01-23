import React from "react";
import { useState } from "react";
import Timeline from './Timeline';
const Experience = () => {
    const [activeTab, setActiveTab] = useState("work");
    return (
        <div className="w-full h-4/5 lg:h-3/5 flex flex-col justify-center p-4">
            <div className="w-full border-2 border-white h-12 w-8 rounded-md flex flex-row items-center">
            <button className={`w-1/2 rounded-md h-full flex items-center justify-center
                ${activeTab === "work"
                      ? "bg-white"
                      : "text-white"
                  }`}
                onClick={()=> setActiveTab("work")}>Work</button>
            <button 
            className={`w-1/2  rounded-md h-full flex items-center justify-center
            ${activeTab === "education"
                      ? "bg-white"
                      : "text-white"
                  }`}
                  onClick={()=> setActiveTab("education")}>Education</button>
            </div>
            <div className="border-2 w-full h-full rounded-md mt-4 lg:mt-2 text-white flex justify-center items-center">
                {activeTab === "work" ? <Timeline type="work"/> : <Timeline type="education"/>}
            </div>
        </div>
    )
}
export default Experience;