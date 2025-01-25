import React from "react";
import TimelineEntry from "./TimelineEntry";
const Timeline = ({type}) => {
    const data = {

        education: [
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUQ1yBSzmAjrPTOWqgbf0kdT-T7S-AOuDOIyofrpoNvr3L9BTYfIeTD58nZE0ggbqjCY&usqp=CAU',
            date: 'September 2022 - May 2027',
            place: 'Zespół Szkół Elektronicznych i Informatycznych',
            title:  'Computer Science - Programming',
            highlights: 
            [
                'INF.03 Qualification - Skilled in creating and managing databases, as well as designing, building, and maintaining websites and web applications.', 
                'INF.04 Qualification - Experienced in designing, programming, and testing advanced web, desktop, and mobile applications to meet diverse user needs.', 
                'Advanced English Matura Exam (Bilingual Level)'
            ],
        },
    ],
        work: [
            {
                icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/58ed4671-9c04-404d-80ba-8134aa33728c/debw8mt-708f591f-e969-49e5-8b69-679e7433104a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4ZWQ0NjcxLTljMDQtNDA0ZC04MGJhLTgxMzRhYTMzNzI4Y1wvZGVidzhtdC03MDhmNTkxZi1lOTY5LTQ5ZTUtOGI2OS02NzllNzQzMzEwNGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dZAvQ1JQCuri-RHGgXvAwBQNjgpG1o8MoIabv09CYVw',
                date: 'January 2075 - April 2077',
                place: 'Dr. Chrome',
                title:  'Ripperdoc',
                highlights: 
                [
                    'Performed various body modification on hundreds of diverse clients', 
                    'Involved in repairing and customizing advanced cyberware.', 
                    'Built trust within the citizens'
                ],
            },
            {
                icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/58ed4671-9c04-404d-80ba-8134aa33728c/debw8mt-708f591f-e969-49e5-8b69-679e7433104a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4ZWQ0NjcxLTljMDQtNDA0ZC04MGJhLTgxMzRhYTMzNzI4Y1wvZGVidzhtdC03MDhmNTkxZi1lOTY5LTQ5ZTUtOGI2OS02NzllNzQzMzEwNGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dZAvQ1JQCuri-RHGgXvAwBQNjgpG1o8MoIabv09CYVw',
                date: 'January 2075 - April 2077',
                place: 'Dr. Chrome',
                title:  'Ripperdoc',
                highlights: ['PHP', 'JavaScript', 'HTML'],
            }
        ],
};
const info = data[type] || [];
    return (
        <div className=" ml-10 w-full h-auto border-l border-white">
                        {info.map((item, index) => (
                <TimelineEntry
                    key={index}
                    icon={item.icon}
                    date={item.date}
                    place={item.place}
                    title={item.title}
                    highlights={item.highlights}
                />
                        ))}
        </div>
    )
}
export default Timeline;