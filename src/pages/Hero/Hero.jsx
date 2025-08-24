import "./Hero.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Hello", "World", "From", "Framer Motion"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Change word every 2 seconds (same as animation duration)
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
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

  return (
    <div>
      <h1 style={{fontSize: "4.5rem"}}>Anthony Truong</h1>
      <h1 style={{fontSize: "1.5rem", fontWeight: "200"}}>computer engineering @ utoronto </h1>

      <motion.div
        style={{ width: "min-width", position: "relative", top: "rem", zIndex: 1 }}
        variants={parentVariants}
        initial="initial"
        animate="animate"
      >
        <motion.svg
          width="312"
          height="35"
          viewBox="0 0 312 35"
          xmlns="http://www.w3.org/2000/svg"
          style={{ zIndex: 1, position: "absolute", left: 0, top: 0 }}
        >
          <defs>
            <clipPath id="reveal">
              <motion.rect variants={svgVariants} width="312" height="35" />
            </clipPath>
          </defs>

          <path
            d="M0 0H312L290.5 35H0V0Z"
            fill="#54C6CA"
            clipPath="url(#reveal)"
          />
        </motion.svg>

        <motion.h1 style={{ position: "absolute", fontSize: "1.5rem", fontWeight: "200" }} variants={textVariants}>
          {words[index]}
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Hero;
