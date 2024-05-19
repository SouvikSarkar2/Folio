import React from "react";
import styles from "./style2.module.css";
import Link from "next/link";

const index = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <Link
      target="_blank"
      href={link}
      className={`hover:gap-10 uppercase w-[260px] border-[1.2px] text-sm font-semibold  flex gap-2 justify-center items-center border-black rounded-full px-6 py-2 ${styles.btn} ${styles.btn2} btn-2`}
    >
      {children}
    </Link>
  );
};

export default index;
