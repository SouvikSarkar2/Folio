import React from "react";

const Badge = ({ text }: { text: string }) => {
  return (
    <div className="border-[1.2px] border-black hover:text-white hover:bg-black transition-all duration-300 hover:cursor-default rounded-full px-2 py-0.5">
      {text}
    </div>
  );
};

export default Badge;
