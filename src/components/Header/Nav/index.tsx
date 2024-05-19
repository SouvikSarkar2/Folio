import Link from "next/link";
import { FooterLinks, Links } from "./data";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import LinkComponent from "@/app/_components/Link";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i: number) => ({
    opacity: 1,
    duration: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

const index = ({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {Links.map((link, i) => {
          return (
            <Link
              href={`/#${link.title}`}
              onClick={() => setIsActive(!isActive)}
              key={i}
              className={styles.linkContainer}
            >
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <p>{link.title}</p>
              </motion.div>
            </Link>
          );
        })}
      </div>
      <div className={styles.footer}>
        {FooterLinks.map((link, i) => (
          <motion.p
            key={i + 10}
            variants={slideIn}
            custom={i}
            animate="enter"
            exit="exit"
            initial="initial"
          >
            <LinkComponent link="" name={link.title} />
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default index;
