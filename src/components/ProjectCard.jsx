import React from "react";
import globeIcon from "../assets/icons/globeIcon.svg";
import Tilt from 'react-parallax-tilt';
const ProjectCard = ({cover, title, description, tags, source, sourceName}) => {

    const tagElements = [];
    tags.forEach((tag, index) => {
        tagElements.push(<span key={index} className="text-xs border border-gray-600 dark:border-gray-400 text-gray-600 dark:text-gray-400 rounded-md p-1 pt-0 m-1 ml-0 mt-0 font-semibold transition duration-300 ease-in-out hover:bg-gray-600 dark:hover:bg-gray-400 hover:text-white dark:hover:text-black cursor-default">{tag}</span> );
    });

    return (
        <div className="p-4">
    <div className="w-full h-full rounded-md border border-black dark:border-white transition duration-300 ease-in-out filter lg:grayscale hover:grayscale-0">
        <div className="p-6 pb-2 pt-4">
        <Tilt scale={1.20} tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <img src={cover} alt="Project preview" className="aspect-video bg-white rounded-md  transition duration-150 ease-in-out hover:-translate-y-2"/>
        </Tilt>
        </div>
       
        <h2 className=" p-6 pt-2 pb-0 text-xl font-semibold dark:text-white">{title}</h2>
        <p className="p-6 pt-0 text-xs text-gray-600 dark:text-gray-400">{description}</p>
        <div className="flex flex-row flex-wrap p-6 pt-2 pb-1">
            {tagElements}
            </div>
            <div  className="flex flex-row flex-wrap p-6 pt-0">
            <a href={source} target="_blank" className="text-sm bg-black dark:bg-white text-white dark:text-black  rounded-md w-20 p-1 pt-0 m-1 mt-0 font-semibold flex flex-row items-center justify-around cursor-pointer">
                <img className="aspect-square w-auto h-4 dark:filter-none filter invert" src={globeIcon}/>{sourceName}
            </a>
            </div>
    </div>
    </div>
    )
}

export default ProjectCard;