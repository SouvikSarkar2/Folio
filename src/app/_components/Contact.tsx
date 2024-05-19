"use client";
import { ArrowUpRight, Copyright } from "lucide-react";
import React, { useState } from "react";
import LinkComponent from "./Link";
import Link from "next/link";

const Contact = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="w-full flex-col flex justify-center items-center font-urbanist"
      id="Connect"
    >
      <div className="w-full h-[150px]"></div>
      <div className="w-[80%] bg-[#282828] rounded-3xl mb-10 flex flex-col gap-2 justify-center items-center text-[#FDFDFD]">
        <div className="mt-[100px] ">connect</div>
        <div className="text-7xl font-bold">Let&apos;s create your</div>
        <div className="text-7xl font-bold">next Big Idea .</div>
        <Link
          href=""
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`border-2  ${
            hovered && "bg-white text-black "
          } border-white justify-center items-center text-lg rounded-full px-6 py-1.5 my-6 flex gap-2 mb-[100px]`}
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
        <div className="w-[40%] flex justify-between items-center font-semibold py-6 text-lg">
          <LinkComponent link="" name="gmail" />
          <LinkComponent link="" name="instagram" />

          <LinkComponent link="" name="twitter" />

          <LinkComponent link="" name="linkedIn" />

          <LinkComponent link="" name="facebook" />
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
