import React from "react";
import globeIcon from "../assets/icons/globeIcon.svg"
const ProjectCard = ({cover, title, description, tags, source, sourceName}) => {

    const tagElements = [];
    tags.forEach((tag, index) => {
        tagElements.push(<span key={index} className="text-xs border border-gray-400 text-gray-400 rounded-md p-1 pt-0 m-1 ml-0 mt-0 font-semibold transition duration-300 ease-in-out hover:bg-gray-400 hover:text-black cursor-default">{tag}</span> );
    });

    return (
        <div className="p-4">
    <div className="w-full h-full rounded-md border border-white">
        <div className="p-6 pb-2 pt-6">
        <img src={cover} alt="Project preview" className="aspect-video bg-white rounded-md" />
        </div>
       
        <h2 className=" p-6 pt-2 pb-0 text-xl font-semibold text-white">{title}</h2>
        <p className="p-6 pt-0 text-xs text-gray-400">{description}</p>
        <div className="flex flex-row flex-wrap p-6 pt-2 pb-1">
            {tagElements}
            </div>
            <div  className="flex flex-row flex-wrap p-6 pt-0">
            <a href={source} target="_blank" className="text-sm bg-white rounded-md w-20 p-1 pt-0 m-1 mt-0 font-semibold flex flex-row items-center justify-around cursor-pointer">
                <img className="aspect-square w-auto h-4" src={globeIcon}/>{sourceName}
            </a>
            </div>
    </div>
    </div>
    )
}

export default ProjectCard;