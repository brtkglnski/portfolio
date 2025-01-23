import React from "react";
import self from "../assets/self.png"
const TimelineEntry = ({date, place, title, icon}) => {
    return (
        <div className="ml-10 pr-10 w-full h-1/5 flex flex-col relative pt-3 mb-6">
            <p className="text-xs text-gray-300">{date}</p>
            <h2 className=" font-semibold overflow-ellipsis">{place}</h2>
            <p className="text-sm text-gray-300">{title}</p>
            <a className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
                <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                    <img className="aspect-square h-full w-full bg-background object-contain" src={icon} alt=""/>
                </span>
            </a>
        </div>
    )
}
export default TimelineEntry;