import React from "react";

const Badge = ({ text, type }: { text: string; type: string }) => {
  return (
    <div
      className={`border-[1.2px] border-black ${
        type === "dark" && "bg-black text-white"
      } hover:text-white hover:bg-black transition-all duration-300 hover:cursor-default rounded-full px-2 py-0.5`}
    >
      {text}
    </div>
  );
};

export default Badge;
