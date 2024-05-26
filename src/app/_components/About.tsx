import React from "react";
import CircularBtn from "@/components/CircularBtn/index";

const About = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center" id="About">
      <div className="w-full h-[110px] sm:h-[150px]"></div>
      <div className="w-full sm:w-[80%] flex flex-col sm:flex-row justify-between items-center pb-10">
        <div className="w-full px-6 pb-4 sm:pb-0 sm:px-0 sm:w-[60%] font-medium text-5xl sm:text-8xl font-helvetica ">
          <div>Souvik Sarkar.</div>
          <div>Fullstack Developer</div>
        </div>
        <div className="w-full sm:w-[40%] flex flex-col gap-4 h-full ">
          <div className="font-semibold font-urbanist h-[80%] text-md sm:text-2xl px-6 sm:px-0">
            I create fullstack websites with end to end functionality. I also
            create user interfaces that are intuitive and user friendly. 
          </div>
          <div className="flex gap-2 h-[20%] justify-start items-center text-sm font-semibold px-6 sm:px-0">
            <CircularBtn
              value="LinkedIn"
              link="https://www.linkedin.com/in/souvik-sarkar-47aba9266/"
            />
            <CircularBtn
              value="Github"
              link="https://github.com/SouvikSarkar2?tab=repositories"
            />
            <CircularBtn
              value="Leetcode"
              link="https://leetcode.com/u/SouvikSarkar/"
            />
          </div>
        </div>
      </div>
      <div className="w-[85%] sm:w-[80%] flex flex-col gap-4 justify-center items-center">
        <div className="w-full h-[40px] sm:h-[110px] border-2 border-black bg-[#63C2AA] rounded-3xl"></div>
        <div className="w-full flex justify-between">
          <div className="w-[20%] sm:w-[12%] h-[40px] sm:h-[110px] border-2 border-black rounded-3xl bg-[#FEE63B]"></div>
          <div className="w-[79%] sm:w-[87%] h-[40px] sm:h-[110px] border-2 border-black rounded-3xl bg-[#AFB0F0]"></div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-[62%] bg-[#9B5DF4] h-[40px] sm:h-[110px] border-2 border-black rounded-3xl"></div>
          <div className="w-[37%] h-[40px] sm:h-[110px] bg-[#FF5CB3] border-2 border-black rounded-3xl"></div>
        </div>
        <div className="w-full h-[40px] sm:h-[110px] bg-[#78B5C0] border-2 border-black rounded-3xl"></div>
      </div>
    </div>
  );
};

export default About;
