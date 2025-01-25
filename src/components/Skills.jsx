import React from "react";
import cplusplus from '../assets/logos/cplusplus.svg';
import css from '../assets/logos/css.svg';
import gimp from '../assets/logos/gimp.svg';
import git from '../assets/logos/git.svg';
import github from '../assets/logos/github.svg';
import html from '../assets/logos/html.svg';
import javascript from '../assets/logos/javascript.svg';
import mysql from '../assets/logos/mysql.svg';
import nodedotjs from '../assets/logos/nodedotjs.svg';
import php from '../assets/logos/php.svg';
import tailwindcss from '../assets/logos/tailwindcss.svg';
import typescript from '../assets/logos/typescript.svg';
import react from '../assets/logos/react.svg';
const Skills = () => {
    const data = {
        skills: [
            { name: 'HTML', icon: html },
            { name: 'CSS', icon: css },
            { name: 'JavaScript', icon: javascript },
            { name: 'Node.js', icon: nodedotjs },
            { name: 'PHP', icon: php },
            { name: 'Tailwind CSS', icon: tailwindcss },
            // { name: 'TypeScript', icon: typescript },
            { name: 'React', icon: react },
            { name: 'Git', icon: git },
            { name: 'GitHub', icon: github },
            { name: 'MySQL', icon: mysql },
            { name: 'C++', icon: cplusplus },
            { name: 'GIMP', icon: gimp },

        ]
    };
    const skillElements = data.skills.map((skill, index) => (
        <span key={index} className="flex flex-row p-2 pt-1 items-center border border-white rounded-lg m-1 transition duration-300 ease-in-out hover:opacity-50">
            <img src={skill.icon} className="filter invert h-6 w-6" alt="icon" />
            <p className="ml-2">{skill.name}</p>
        </span>
    ));

    return (
        <div>
               <h1 className=" pl-8 pb-6 text-4xl font-semibold text-white">Skills</h1>
            <div className="flex flex-row flex-wrap text-white">
            {skillElements}
            </div>
        </div>
    )
}
export default Skills;

//  