import React from "react";
import Badge from "./Badge";
import Image from "next/image";

const ProjectCard = ({
  name,
  h1,
  h2,
  h3,
  color,
}: {
  name: string;
  h1: string;
  h2: string;
  h3: string;
  color: string;
}) => {
  return (
    <div
      className={`w-[350px] h-[150px]   border-black border-2 flex flex-col justify-end rounded-3xl relative  overflow-hidden`}
      style={{ backgroundColor: color }}
    >
      <div className="w-full z-10   rounded-2xl">
        <div className="pl-6 font-urbanist font-bold text-2xl">{name}</div>
        <div>
          <div className="flex gap-2 justify-start items-center text-xs pl-6 py-2 pb-6">
            <Badge text={h1} />
            <Badge text={h2} />
            <Badge text={h3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
