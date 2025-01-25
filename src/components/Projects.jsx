import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {

    const projects = [
        {
            cover: 'https://tr.rbxcdn.com/180DAY-c5a5d6cb69d826e9256d970e7fc633ca/768/432/Image/Webp/noFilter',
            title: 'Treasure Seeker',
            description: 'Treasure Seeker is an engaging Roblox game created as a contest entry, where players explore a diverse island to uncover hidden treasures. This first major project earned third place, showcasing creativity, teamwork, and efficient time management. The game features custom Blender models by my friend pindvs.',
            tags: ['LuaU', 'Roblox API', 'Roblox Studio', 'Blender', 'GIMP', 'DataStore', 'UI'],
            source: 'https://www.roblox.com/games/18561239122/Treasure-Seeker',
            sourceName: 'Roblox'
        },
        {
            cover: 'https://raw.githubusercontent.com/brtkglnski/tablix-vs/4e884aefae46adabbcd55853463f3a7478a6e2a3/image.png',
            title: 'Tablix VS',
            description: 'TablixVS is an interactive web-based game where users compare values from selected tables to guess which elements have higher values. It supports importing tables via the Spotify API and manual additions, distinguishing between the two sources.',
            tags: ['PHP', 'JavaScript', 'HTML', 'CSS', 'Spotify API', 'AJAX', 'GIMP'],
            source: 'https://github.com/brtkglnski/tablix-vs',
            sourceName: 'GitHub'
        },
        
    ];

    return (
    <div>
    <h1 className=" pl-8 pb-6 text-4xl font-semibold text-white">My projects</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-auto">
    {projects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    cover={project.cover}
                    title={project.title}
                    description={project.description}
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