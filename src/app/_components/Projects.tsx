import { ArrowRight, CornerDownRight } from "lucide-react";
import React from "react";
import ProjectCard from "./ProjectCard";
import CircularBtn from "@/components/CircularBtn/type2";

const Projects = () => {
  return (
    <div
      className="w-full flex flex-col justify-start items-center"
      id="Projects"
    >
      <div className="w-full h-[90px] sm:h-[120px]"></div>
      <div className="w-[80%] py-6 gap-2 flex items-center justify-start">
        <CornerDownRight />
        <div className="font-medium text-lg sm:text-xl">P R O J E C T S</div>
      </div>
      <div className="w-[80%] flex flex-wrap justify-center items-center gap-6 pt-6">
        <ProjectCard
          name="Hanaso"
          h1="SocketIO"
          h2="Redis"
          h3="Kafka"
          color="#63C2AA"
          link=""
        />
        <ProjectCard
          name="Ibento"
          h1="GraphQL"
          h2="Maptiler"
          h3="ChartJS"
          color="#FEE63B"
          link="https://ibent0.vercel.app/"

        />
        <ProjectCard
          name="Shiken"
          h1="NextJS"
          h2="MongoDB"
          h3="Shadcn/ui"
          color="#AFB0F0"
          link="https://shiken.vercel.app/"
        />
        <ProjectCard
          name="Hikari"
          h1="NextJS"
          h2="NextAuth"
          h3="Tailwind"
          color="#9B5DF4"
          link="https://hikari-dusky.vercel.app/"
        />
        <ProjectCard
          name="QuickNote"
          h1="Electron"
          h2="Typescript"
          h3="Jotai"
          color="#FF5CB3"
          link=""
        />
        <ProjectCard
          name="Calculex"
          h1="Expo"
          h2="ReactNative"
          h3="Nativewind"
          color="#78B5C0"
          link=""
        />
      </div>
      <div className=" w-[71%] flex justify-end pt-6">
        <CircularBtn link="https://github.com/SouvikSarkar2">
          view all projects <ArrowRight size={18} />
        </CircularBtn>
      </div>
    </div>
  );
};

export default Projects;
