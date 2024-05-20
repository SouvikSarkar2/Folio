"use client";

import React, { useState } from "react";
import Badge from "./Badge";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  name,
  h1,
  h2,
  h3,
  color,
  link
}: {
  name: string;
  h1: string;
  h2: string;
  h3: string;
  color: string;
  link:string;
}) => {
  const [view, setView] = useState(false);

  const handleEnter = () => {
    setView(true);
  };

  const handleExit = () => {
    setView(false);
  };

  return (
    <Link
    target="_blank"
    href={link}

      className={`w-[350px] h-[200px]   border-black border-2 flex flex-col justify-end rounded-3xl relative  overflow-hidden`}
      style={{ backgroundColor: color }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleExit}
      onClick={() => console.log("click")}
    >
      {view ? (
        <Image
          className="transition-all duration-500"
          style={{ objectFit: "cover" }}
          src={`/${name}.png`}
          fill
          alt=""
        />
      ) : (
        <div className={`  w-full z-10   rounded-2xl`}>
          <div className="pl-6 font-urbanist font-bold text-2xl">{name}</div>
          <div>
            <div
              className={`flex  gap-2 justify-start z-10 items-center text-xs pl-6 py-2 pb-6`}
            >
              <Badge text={h1} type="dark" />
              <Badge text={h2} type="" />
              <Badge text={h3} type="" />
            </div>
          </div>
        </div>
      )}
    </Link>
  );
};

export default ProjectCard;
