import React from "react";
import { useTranslation } from "react-i18next";
import TimelineEntry from "./TimelineEntry";
import timelineData from "../data/timelineData";

const Timeline = ({ type }) => {
  const { t } = useTranslation();
  const info = timelineData[type] || [];

  return (
    <ul className="ml-10 w-full h-auto border-l border-black dark:border-white relative">
      {info.map((item, index) => (
        <TimelineEntry
          key={index}
          icon={item.icon}
          date={t(item.date)} 
          place={t(item.place)} 
          title={t(item.title)} 
          highlights={item.highlights.map(highlight => t(highlight))} 
        />
      ))}
    </ul>
  );
};

export default Timeline;
