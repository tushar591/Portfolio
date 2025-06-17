import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ScrollProgress } from "@/components/magicui/scroll-progress";


const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[0px] md-px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <div className="text-white py-5 flex justify-between items-center">
            {/* Logo */}
            <div className="text-lg font-semibold cursor-pointer">
              <span className="text-[#8245ec]">&lt;</span>
              <span className="text-white">Tushar</span>
              <span className="text-[#8245ec]">/</span>
              <span className="text-white">Bharat</span>
              <span className="text-[#8245ec]">&gt;</span>
            </div>
          </div>
        </a>

        <div className="h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center gap-5 justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact me
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/tushar-bharat-9a18b9317/"
            className="hover:text-purple-500 hover:scale-130 text-sm sm:text-base my-1"
          >
            <RainbowButton>
              <FaLinkedin size={24} />
            </RainbowButton>
          </a>
          <a
            target="_blank"
            href="https://github.com/tushar591"
            className="hover:text-purple-500 hover:scale-130 text-sm sm:text-base my-1"
          >
            <RainbowButton>
              <FaGithub className="w-12 h-12"/>
            </RainbowButton>
          </a>
        </div>
      </div>  
      <ScrollProgress
  className="
    fixed
    top-16      
    left-0
    h-0.75         
    z-40    
    bg-purple-600    
  "
/>
    </div>
  );
};

export default Navbar;
