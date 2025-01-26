import React from "react";
import TimelineEntry from "./TimelineEntry";
import timelineData from "../data/timelineData";
const Timeline = ({type}) => {
const info = timelineData[type] || [];
    return (
        <ul className="ml-10 w-full h-auto border-l border-white relative">
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
        </ul>
    )
}
export default Timeline;