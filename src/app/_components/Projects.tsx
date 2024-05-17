import { ArrowRight, CornerDownRight } from "lucide-react";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      className="w-full flex flex-col justify-start items-center"
      id="Projects"
    >
      <div className="w-full h-[120px]"></div>
      <div className="w-[80%] py-6 gap-2 flex items-center justify-start">
        <CornerDownRight />
        <div className="font-medium">P R O J E C T S</div>
      </div>
      <div className="w-[80%] flex flex-wrap justify-center items-center gap-6 p-6">
        <ProjectCard name="Hanaso" h1="SocketIO" h2="Redis" h3="Kafka" />
        <ProjectCard name="Ibento" h1="GraphQL" h2="Maptiler" h3="ChartJS" />
        <ProjectCard name="Shiken" h1="NextJS" h2="MongoDB" h3="Shadcn/ui" />

        <ProjectCard name="Hikari" h1="NextJS" h2="NextAuth" h3="Tailwind" />

        <ProjectCard
          name="Quick note"
          h1="Electron"
          h2="Typescript"
          h3="Jotai"
        />

        <ProjectCard
          name="Calculex"
          h1="Expo"
          h2="ReactNative"
          h3="Nativewind"
        />
      </div>
      <div className="border-2 flex gap-2 text-sm py-2 font-semibold justify-center items-center my-10 border-black rounded-full px-2 w-[73%]">
        view all projects <ArrowRight size={15} />
      </div>
    </div>
  );
};

export default Projects;
