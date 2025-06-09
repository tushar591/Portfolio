"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  skill_name: string;
}

const SkillDataProvider = ({
  src,
  width,
  height,
  index,
  skill_name,
}: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="relative mx-3 my-2 group flex flex-col items-center justify-center"
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={skill_name}
        className="cursor-pointer"
        title={skill_name}
      />

      <span className="absolute cursive opacity-100 text-gray-200 top-full left-1/2 -translate-x-1/2  px-5 py-1 rounded bg-transparent text-10px  whitespace-nowrap">
        {skill_name}
      </span>
    </motion.div>
  );
};

export default SkillDataProvider;
