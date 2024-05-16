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

const Skills = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center py-20 w-full">
      <div className="w-[80%] gap-2 flex items-center justify-start">
        <CornerDownRight />
        <div className="font-medium">S K I L L S</div>
      </div>
      <div className="w-[80%] font-urbanist">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-b-2 border-b-black">
            <AccordionTrigger>
              <div className="w-full h-full flex gap-4 justify-start items-center font-semibold text-3xl">
                <Paintbrush2 /> Frontend
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b-2 border-b-black">
            <AccordionTrigger className="font-bold ">
              <div className="w-full h-full flex gap-4 justify-start items-center font-semibold text-3xl">
                <FileJson /> Backend
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b-2 border-b-black">
            <AccordionTrigger className="font-bold ">
              <div className="w-full h-full flex gap-4 justify-start items-center font-semibold text-3xl">
                <Rabbit /> Animation
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-b-2 border-b-black">
            <AccordionTrigger className="font-bold ">
              <div className="w-full h-full flex gap-4 justify-start items-center font-semibold text-3xl">
                <Ampersand /> Others
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Skills;
