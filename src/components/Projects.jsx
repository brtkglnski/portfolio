import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";
import { useTranslation, } from "react-i18next";
const Projects = () => {
    const { t } = useTranslation(); 
    return (
    <div  id="projects" className="scroll-mt-24 relative animate-fade animate-once animate-duration-[600ms] animate-delay-[200ms]">
                <div className="w-full h-full absolute -z-30">
        <div className="w-full max-w-lg bg-blue-400 h-[6rem] absolute -right-96 bottom-32 blur-[5rem] rounded-full z-10 opacity-40 transition-colors duration-300
        animate-wiggle-more animate-infinite animate-duration-[4000ms]"></div>
        </div>
    <h1 className=" pl-8 pb-6 text-3xl font-customFont text-black dark:text-white transition-colors duration-300">{t('projects.title')}</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-auto">
    {projectsData.map((project, index) => (
                <ProjectCard 
                    key={index}
                    cover={project.cover}
                    title={project.title}
                    description={t(project.description)}
                    tags={project.tags}
                    source={project.source}
                    sourceName={project.sourceName}
                />
            ))}
    </div>
    </div>
    )
}

export default Projects;