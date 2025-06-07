"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion";
import ScrollReveal from "./ScrollReveal";

const SkillText = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="w-full h-auto flex flex-col items-center justify-center"
    >
      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-3xl sm:text-4xl font-bold text-white"
      >
        <ScrollReveal
          scrollContainerRef={window}
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          SKILLS
        </ScrollReveal>

        <div className="w-24 h-1 m-5 bg-[#8245ec] mx-auto mt-2"></div>
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="cursive text-2xl text-gray-200 mb-10 mt-[10px] text-center"
      >
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </motion.div>
    </div>
  );
};

export default SkillText;
