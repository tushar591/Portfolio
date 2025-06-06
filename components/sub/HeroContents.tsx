"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion";
import Image from "next/image";
import RotatingText from "./RotatingText";

export default function HeroContents() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="">
            Hi, I&apos;m <span> Tushar Bharat </span>
            <div className="">
              <RotatingText
                texts={["Web Developer", "Coder", "UI/UX Designer"]}
                mainClassName="
    inline-block
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
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I am a full-stack developer with a passion for creating innovative
          solutions in building scalable web applications. Skilled in both
          front-end and back-end development, I specialize in the MERN stack and
          other modern technologies to create seamless user experiences and
          efficient solutions.
        </motion.p>
        <div className="flex justify-center align-items-left max-w-[600px]">
          <motion.a  variants={slideInFromLeft(1)}>
          <button > Download CV</button>
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:flex w-full h-full justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
}
