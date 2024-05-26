import Link from "next/link";
import React from "react";

const LinkComponent = ({ name, link }: { name: string; link: string }) => {
  return (
    <Link href={link} target="_blank">
      <div className="h-[22px] sm:h-[25px] overflow-hidden">
        <div className="hover:-translate-y-7 transition-all duration-500 delay-100">
          <div>{name}</div>
          <div>{name}</div>
        </div>
      </div>
    </Link>
  );
};

export default LinkComponent;
