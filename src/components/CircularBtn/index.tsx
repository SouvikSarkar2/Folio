import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

const index = ({ value, link }: { value: string; link: string }) => {
  return (
    <Link
      target="_blank"
      href={link}
      className={`border-[1.2px] border-black rounded-full px-2 py-0.5 ${styles.btn} ${styles.btn2} btn-2`}
    >
      {value}
    </Link>
  );
};

export default index;
