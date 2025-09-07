import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import section from "../../components/Content/Content"

const content = section.find((item) => item.id === 'hero');

const words = content.descriptions;

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % words.length);
      }, 5000);
    }, 2000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const parentVariants = {
    initial: {},
    animate: {},
  };

  const svgVariants = {
    initial: {},
    animate: {
      width: [0, 312, 312],
      x: [0, 0, 312],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  const textVariants = {
    initial: {},
    animate: {
      opacity: [0, 0, 1, 1, 0],
      transition: {
        duration: 5,
        times: [0, 0.5, 0.51, 0.995, 1],
        repeat: Infinity,
      },
    },
  };

  const titleContainerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const nameTitleVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  const educationTitleVariants = nameTitleVariants;

  return (
    <section className={styles.hero}>
      <motion.div
        variants={titleContainerVariants}
        initial="initial"
        animate="animate"
        style={{display: "flex", flexDirection: "column", gap: "0.8rem"}}
      >
        <motion.h1 className={styles.nameTitle} variants={nameTitleVariants}>
          {content.title}
        </motion.h1>

        <motion.h1 className={styles.educationTitle} variants={educationTitleVariants}>
          {content.subtitle}
        </motion.h1>

        <motion.div className={styles.traitsTitle} variants={parentVariants}>
          <motion.svg
            width="312"
            height="35"
            viewBox="0 0 312 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="reveal">
                <motion.rect variants={svgVariants} width="312" height="35" />
              </clipPath>
            </defs>

            <path
              d="M0 0H312L290.5 35H0V0Z"
              fill="var(--theme-color)" 
              clipPath="url(#reveal)"
            />
          </motion.svg>

          <motion.h1 variants={textVariants}>{words[index]}</motion.h1>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
