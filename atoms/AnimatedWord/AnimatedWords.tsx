"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./animatedWordStyles.css";

const AnimatedWords = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView, entry } = useInView({
    threshold: Array.from({ length: 101 }, (_, i) => i / 100),
  });

  const [backgroundSize, setBackgroundSize] = useState("0% 100%");

  useEffect(() => {
    if (entry) {
      const visibilityPercentage = Math.min(
        Number((entry?.intersectionRatio * 100).toFixed(0)),
        100
      );
      setBackgroundSize(`${visibilityPercentage}% 100%`);
    }
  }, [entry]);

  console.log(backgroundSize);

  return (
    <div className="scroll-reveal">
      <motion.p
        ref={ref}
        initial={{
          backgroundSize: "0% 100%",
        }}
        animate={{
          backgroundSize: backgroundSize,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        className="text-2xl inline"
      >
        {children}
      </motion.p>
    </div>
  );
};

export default AnimatedWords;
