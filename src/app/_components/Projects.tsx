import { ArrowRight, CornerDownRight } from "lucide-react";
import React from "react";

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
        <div className="w-[350px] h-[350px] rounded-3xl bg-[#F3F4F8]">
          <div className="w-full h-[75%]"></div>
          <div className="w-full h-[25%] ">
            <div className="pl-6 font-urbanist font-bold text-2xl">Hanaso</div>
            <div>
              <div className="flex gap-2 justify-start items-center text-xs pl-6 py-2">
                <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
                  SocketIO
                </div>
                <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
                  Kafka
                </div>
                <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
                  Redis
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[350px] rounded-3xl bg-[#F3F4F8]">
          <div className="w-full h-[75%]"></div>
          <div className="w-full h-[25%] ">
            <div className="pl-6 font-urbanist font-bold text-2xl">Ibento</div>
            <div>
              <div className="flex gap-2 justify-start items-center text-xs pl-6 py-2">
                <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
                  GraphQL
                </div>
                <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
                  Maptiler
                </div>
                <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
                  ChartJS
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[350px] rounded-3xl bg-[#F3F4F8]">
          <div className="w-full h-[75%]"></div>
          <div className="w-full h-[25%] ">
            <div className="pl-6 font-urbanist font-bold text-2xl">Shiken</div>
            <div>
              <div className="flex gap-2 justify-start items-center text-xs pl-6 py-2">
                <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
                  NextJS
                </div>
                <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
                  mongoDB
                </div>
                <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
                  Shadcn/ui
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[350px] rounded-3xl bg-[#F3F4F8]">
          <div className="w-full h-[75%]"></div>
          <div className="w-full h-[25%] ">
            <div className="pl-6 font-urbanist font-bold text-2xl">Hikari</div>
            <div>
              <div className="flex gap-2 justify-start items-center text-xs pl-6 py-2">
                <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
                  NextJS
                </div>
                <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
                  NextAuth
                </div>
                <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
                  Tailwind
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[350px] rounded-3xl bg-[#F3F4F8]">
          <div className="w-full h-[75%]"></div>
          <div className="w-full h-[25%] ">
            <div className="pl-6 font-urbanist font-bold text-2xl">
              Quick Note
            </div>
            <div>
              <div className="flex gap-2 justify-start items-center text-xs pl-6 py-2">
                <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
                  Typescript
                </div>
                <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
                  Electron
                </div>
                <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
                  Jotai
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[350px] rounded-3xl bg-[#F3F4F8]">
          <div className="w-full h-[75%]"></div>
          <div className="w-full h-[25%] ">
            <div className="pl-6 font-urbanist font-bold text-2xl">
              Calculex
            </div>
            <div>
              <div className="flex gap-2 justify-start items-center text-xs pl-6 py-2">
                <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
                  Expo
                </div>
                <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
                  ReactNative
                </div>
                <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
                  NativeWind
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 flex gap-2 text-sm py-2 font-semibold justify-center items-center my-10 border-black rounded-full px-2 w-[73%]">
        view all projects <ArrowRight size={15} />
      </div>
    </div>
  );
};

export default Projects;
