"use client";

import React, { useState } from "react";
import Button from "./Button/index";
import styles from "./style.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav/index";

let isMobile = false;
if (typeof window !== "undefined") {
  isMobile = window.innerWidth <= 767;
}

const variants = {
  open: {
    width: isMobile ? 300 : 400,
    height: isMobile ? 400 : 570,
    top: "-10px",
    right: "-10px",
    border: "2px solid black",
    transition: { duration: "0.75", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: isMobile ? 70 : 100,
    height: isMobile ? 30 : 40,
    top: "0px",
    right: "0px",
    border: "2px solid black",

    transition: { duration: "0.75", delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

const Index = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.header}>
      <motion.div
        className={styles.menu}
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && <Nav isActive={isActive} setIsActive={setIsActive} />}
        </AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Index;
