import React from "react";

const ProjectCard = ({
  name,
  h1,
  h2,
  h3,
}: {
  name: string;
  h1: string;
  h2: string;
  h3: string;
}) => {
  return (
    <div className="w-[350px] h-[350px] rounded-3xl bg-[#F3F4F8]">
      <div className="w-full h-[75%]"></div>
      <div className="w-full h-[25%] ">
        <div className="pl-6 font-urbanist font-bold text-2xl">{name}</div>
        <div>
          <div className="flex gap-2 justify-start items-center text-xs pl-6 py-2">
            <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
              {h1}
            </div>
            <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
              {h2}
            </div>
            <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
              {h3}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
