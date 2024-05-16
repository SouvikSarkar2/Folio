import React from "react";

const About = () => {
  return (
    <div className="w-full h-[110vh] flex flex-col justify-start items-center">
      <div className="w-full h-[100px] flex justify-center items-center border-b-2 border-b-black">
        <div className="w-[90%] h-full flex justify-between items-center ">
          <div>Logo</div>
          <div>Menu</div>
        </div>
      </div>
      <div className="w-[80%] flex justify-between items-center py-10">
        <div className="w-[60%] font-medium text-8xl font-helvetica">
          <div>Souvik Sarkar.</div>
          <div>Fullstack Developer</div>
        </div>
        <div className="w-[40%]  h-full">
          <div className="font-semibold h-[80%] text-2xl">
            I create fullstack websites with end to end functionality. I also
            create user interfaces that are intuitive and user friendly.
          </div>
          <div className="flex gap-2 h-[20%] justify-start items-center text-sm font-semibold">
            <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
              LinkedIn
            </div>
            <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
              Github
            </div>
            <div className="border-[1.2px] border-black rounded-full px-2 py-0.5">
              Leetcode
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] flex flex-col gap-4 justify-center items-center">
        <div className="w-full h-[110px] border-2 border-black rounded-3xl"></div>
        <div className="w-full flex justify-between">
          <div className="w-[12%] h-[110px] border-2 border-black rounded-3xl"></div>
          <div className="w-[87%] h-[110px] border-2 border-black rounded-3xl"></div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-[62%] h-[110px] border-2 border-black rounded-3xl"></div>
          <div className="w-[37%] h-[110px] border-2 border-black rounded-3xl"></div>
        </div>
        <div className="w-full h-[110px] border-2 border-black rounded-3xl"></div>
      </div>
    </div>
  );
};

export default About;
