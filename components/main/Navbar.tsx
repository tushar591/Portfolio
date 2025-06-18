"use client";
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navLinks = [
    { href: "#about-me", label: "About me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact me" },
  ];

  return (
    <>
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#about-me" className="flex items-center">
          <div className="text-lg font-semibold text-white cursor-pointer">
            <span className="text-[#8245ec]">&lt;</span>
            <span>Tushar</span>
            <span className="text-[#8245ec]">/</span>
            <span>Bharat</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5 bg-[#0300145e] border border-[#7042f861] rounded-full px-5 py-2 text-gray-200">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-purple-400 transition">
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/tushar-bharat-9a18b9317/"
            target="_blank"
            rel=""
            className="text-sm hover:scale-110 transition"
          >
            <RainbowButton>
              <FaLinkedin size={24} />
            </RainbowButton>
          </a>
          <a
            href="https://github.com/tushar591"
            target="_blank"
            rel=""
            className="text-sm hover:scale-110 transition"
          >
            <RainbowButton>
              <FaGithub size={24} />
            </RainbowButton>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/tushar-bharat-9a18b9317/"
            target="_blank"
            rel=""
            className="text-sm hover:scale-110 transition"
          >
            <RainbowButton>
              <FaLinkedin size={24} />
            </RainbowButton>
          </a>
         <a
            href="https://github.com/tushar591"
            target="_blank"
            rel=""
            className="text-sm hover:scale-110 transition"
          >
            <RainbowButton>
              <FaGithub size={24} />
            </RainbowButton>
          </a>
          <div className="text-white text-2xl cursor-pointer" onClick={toggleSidebar}>
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Sidebar Overlay from Right */}
      <div
        className={`fixed top-[65px]  right-0 h-full w-3/4 max-w-xs bg-[#030014de] backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-8">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-200 text-lg px-4 py-3 rounded-lg hover:bg-[#8245ec]/30 hover:text-white transition-all duration-200 font-medium"
                onClick={toggleSidebar}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <ScrollProgress
        className="fixed top-16 left-0 h-1 w-full bg-purple-600 z-50"
      />
    </>
  );
};

export default Navbar;
