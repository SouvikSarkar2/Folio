"use client";
import { ArrowUpRight, Copyright } from "lucide-react";
import React, { useState } from "react";
import LinkComponent from "./Link";
import Link from "next/link";

const Contact = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="w-full  flex-col flex justify-center items-center font-urbanist"
      id="Connect"
    >
      <div className="w-full h-[150px]"></div>
      <div className="w-full sm:w-[80%] bg-[#282828] rounded-t-3xl sm:rounded-3xl  sm:mb-10 flex flex-col gap-2 justify-center items-center text-[#FDFDFD]">
        <div className="mt-[50px] sm:mt-[100px] ">connect</div>
        <div className="text-3xl sm:text-7xl font-bold">Let&apos;s create your</div>
        <div className="text-3xl sm:text-7xl font-bold">next Big Idea .</div>
        <Link
          href="mailto:12345souvik12345@gmail.com?"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`border-2  ${
            hovered && "bg-white text-black "
          } border-white justify-center items-center text-[17px]  sm:text-lg rounded-full px-4 sm:px-6 py-1 sm:py-1.5 my-3 sm:my-6 flex gap-2 sm:mb-[100px]`}
        >
          Get in touch{" "}
          <span
            className={`${
              hovered && "rotate-[225deg] text-black "
            } duration-300 `}
          >
            <ArrowUpRight size={20} />
          </span>
        </Link>
        <div className="w-full px-6 sm:px-0 sm:w-[40%] flex justify-between items-center font-semibold pt-6 sm:py-6 text-md sm:text-lg ">
          
          <LinkComponent link="https://www.instagram.com/souvik_baka/" name="instagram" />

          <LinkComponent link="https://x.com/ALFAHELIX2" name="twitter" />

          <LinkComponent link="https://www.linkedin.com/in/souvik-sarkar-47aba9266/" name="linkedIn" />
            
         
        </div>
        <div
          className={`w-full gap-1 flex justify-center items-center text-sm pb-4`}
        >
          <Copyright size={18} />
          2024 Souvik Sarkar
        </div>
      </div>
    </div>
  );
};

export default Contact;
