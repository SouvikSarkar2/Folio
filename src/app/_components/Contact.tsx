import { ArrowUpRight, Copyright } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full flex justify-center items-center font-urbanist">
      <div className="w-[80%] bg-[#282828] rounded-3xl my-10 flex flex-col gap-2 justify-center items-center text-[#FDFDFD]">
        <div className="mt-[100px] ">connect</div>
        <div className="text-7xl font-bold">Let&apos;s create your</div>
        <div className="text-7xl font-bold">next Big Idea .</div>
        <div className="border-2 border-white justify-center items-center text-lg rounded-full px-6 py-1.5 my-6 flex gap-2 mb-[100px]">
          Get in touch <ArrowUpRight size={20} />
        </div>
        <div className="w-[40%] flex justify-between items-center font-semibold py-6 text-lg">
          <div>gmail</div>
          <div>instagram</div>
          <div>twitter</div>
          <div>linkedIn</div>
          <div>facebook</div>
        </div>
        <div className="w-full gap-1 flex justify-center items-center text-sm pb-4">
          <Copyright size={18} />
          2024 Souvik Sarkar
        </div>
      </div>
    </div>
  );
};

export default Contact;
