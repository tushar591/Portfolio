"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion";
import Image from "next/image";
import RotatingText from "./RotatingText";
import Tilt from "react-parallax-tilt";

export default function HeroContents() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-between px-20 mt-20 w-full z-[20]"
    >
      <div className="h-full w-50vw flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 mt-20 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="">
            Hi, I&apos;m <span> Tushar Bharat </span>
            <div className="m-3justify-center align-center text-4xl">
              I am a
              <RotatingText
                texts={["Fullstack Developer", "Coder!", "UI/UX Designer"]}
                mainClassName="
    
    bg-gradient-to-r from-purple-500 to-cyan-500
    bg-clip-text text-transparent
    font-bold
    text-3xxl md:text-3xxl
    leading-tight
    overflow-hidden whitespace-nowrap
  "
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 overflow-hidden pb-0"
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                rotationInterval={3500}
              />
            </div>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg py-3 text-gray-400 max-w-[600px]"
        >
          I am a full-stack developer with a passion for creating innovative
          solutions in building scalable web applications. Skilled in both
          front-end and back-end development, I specialize in the MERN stack and
          other modern technologies to create seamless user experiences and
          efficient solutions.
        </motion.p>
        <div className="flex mt-3 justify-center align-items-left max-w-[600px]">
          <motion.a variants={slideInFromLeft(1)}>
            <a href="#projects"><btn> Download CV</btn></a>
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden  md:justify-center md:flex w-small h-small"
      >
        <Tilt
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={550}
            width={550}
          />
        </Tilt>
      </motion.div>
    </motion.div>
  );
}
