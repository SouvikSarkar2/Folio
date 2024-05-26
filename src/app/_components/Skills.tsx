import {
  Ampersand,
  CornerDownRight,
  FileJson,
  Paintbrush2,
  Rabbit,
} from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const Skills = () => {
  return (
    <div
      className="flex flex-col gap-6 justify-center items-center  w-full"
      id="Skills"
    >
      <div className="w-full h-[90px] sm:h-[150px]"></div>
      <div className="w-[80%] gap-2 flex items-center justify-start pb-0 sm:pb-6">
        <CornerDownRight />
        <div className="font-medium text-lg sm:text-xl">S K I L L S</div>
      </div>
      <div className="w-[80%] font-urbanist">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-b-2 border-b-black">
            <AccordionTrigger>
              <div className="w-full h-full flex gap-4 justify-start items-center font-semibold text-xl  sm:text-2xl">
                <Paintbrush2 /> Frontend
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex gap-4 justify-start items-center flex-wrap">
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative">
                  <Image alt="" src="/JS.png" fill />
                </div>
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative">
                  <Image alt="" src="/TS.png" fill />
                </div>
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative">
                  <Image alt="" src="/REACT.png" fill />
                </div>
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative">
                  <Image alt="" src="/NEXT.png" fill />
                </div>
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative">
                  <Image alt="" src="/TAILWIND.png" fill />
                </div>
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative">
                  <Image alt="" src="/SASS.png" fill />
                </div>
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative">
                  <Image alt="" src="/BOOTSTRAP.png" fill />
                </div>
                <div className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] relative">
                  <Image alt="" src="/EXPO.png" fill />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b-2 border-b-black">
            <AccordionTrigger className="font-bold ">
              <div className="w-full h-full flex gap-4 justify-start items-center font-semibold text-xl  sm:text-2xl">
                <FileJson /> Backend
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex gap-4 justify-start items-center flex-wrap">
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative">
                  <Image alt="" src="/NODE.png" fill />
                </div>
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative">
                  <Image alt="" src="/EXPRESS.png" fill />
                </div>
                <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] relative">
                  <Image alt="" src="/MONGO.png" fill />
                </div>
                <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] relative">
                  <Image alt="" src="/POSTGRES.png" fill />
                </div>
                <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] relative">
                  <Image alt="" src="/PRISMA.png" fill />
                </div>
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative">
                  <Image alt="" src="/GRAPHQL.png" fill />
                </div>
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative">
                  <Image alt="" src="/APOLLO.png" fill />
                </div>
                <div className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] relative">
                  <Image alt="" src="/TRPC.png" fill />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b-2 border-b-black">
            <AccordionTrigger className="font-bold ">
              <div className="w-full h-full flex gap-4 justify-start items-center font-semibold text-xl  sm:text-2xl">
                <Rabbit /> Animation
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex gap-4 justify-start items-center flex-wrap">
                <div className="w-[27px] h-[27px] sm:w-[37px] sm:h-[37px] relative">
                  <Image alt="" src="/FRAMER.png" fill />
                </div>
                <div className="w-[50px] h-[50px] font-helvetica font-bold text-lg sm:text-xl flex justify-center items-center">
                  GSAP
                </div>
                <div className="w-[70px] h-[25px] sm:w-[100px] sm:h-[40px] font-bold text-xl relative">
                  <Image alt="" src="/LOCOMOTIVE.png" fill />
                </div>
                <div className="w-[60px] h-[22px] sm:w-[80px] sm:h-[30px] font-bold text-xl relative">
                  <Image alt="" src="/ANIME.png" fill />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-b-2 border-b-black">
            <AccordionTrigger className="font-bold ">
              <div className="w-full h-full flex gap-4 justify-start items-center font-semibold text-xl  sm:text-2xl">
                <Ampersand /> Others
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex gap-4 justify-start items-center flex-wrap">
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative">
                  <Image alt="" src="/GIT.png" fill />
                </div>
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative">
                  <Image alt="" src="/GITHUB.png" fill />
                </div>
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative">
                  <Image alt="" src="/VSCODE.png" fill />
                </div>
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative">
                  <Image alt="" src="/DOCKER.png" fill />
                </div>
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative">
                  <Image alt="" src="/AZURE.png" fill />
                </div>
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative">
                  <Image alt="" src="/AWS.png" fill />
                </div>
                <div className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] relative">
                  <Image alt="" src="/FIREBASE.png" fill />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Skills;
