import React from "react";
import { ExternalLink } from "lucide-react";
import TiltedCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      {/* Portfolio Projects Section */}
      <section className="max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16 text-white">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-[40px] bg-gray-900 relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-blue-400 sm:border-b-2 border-blue-400">
          My Projects
        </h2>

        {/* Vertical Timeline Line - Hidden on mobile, visible on desktop */}
        <div className="w-[2px] hidden sm:block bg-blue-400 absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>

        {/* Project 1: ProCodrr */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[20px] items-center sm:mt-20 relative">
          {/* Timeline elements for desktop */}
          <div className="h-[1px] left-[10%] right-1/2 bg-blue-400 absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-blue-300 absolute left-1/2 -translate-x-1/2 bg-gray-900 z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>

          {/* Laptop Frame with Phone Screen */}
          
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="500px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className=" ">Kendrick Lamar - GNX</p>
            }
          />
          <a
            href="https://procodrr.com"
            className="flex w-full relative justify-center sm:justify-start"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>

          {/* Project Details */}
          <div className="w-full">
            <h3 className="text-blue-300 font-bold text-2xl md:text-4xl">
              ProCodrr
            </h3>
            <span className="text-blue-300 text-base md:text-lg">
              (Coding Platform)
            </span>
            <p className="text-justify text-sm md:text-base mt-2 text-white">
              Deeply understand advanced concepts, practice with real-world
              exercises, build expertise with hands-on projects to boost your
              career.
            </p>

            {/* Technology Tags */}
            <ul className="flex flex-wrap gap-2 mt-2">
              {[
                "react.js",
                "express.js",
                "node.js",
                "swiper.js",
                "mongoDB",
                "mongoose",
                "css",
                "javascript",
                "figma",
              ].map((tech) => (
                <li
                  key={tech}
                  className="border rounded-[50px] border-gray-400 px-[10px] py-[5px] text-sm md:text-base text-white"
                >
                  #{tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project 2: EazyGrad */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[20px] items-center sm:mt-20 relative">
          {/* Content on left side for this project */}
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-yellow-300 font-bold text-2xl md:text-4xl">
              EazyGrad
            </h3>
            <span className="text-yellow-300 text-base md:text-lg">
              (EdTech Startup)
            </span>
            <p className="text-justify text-sm md:text-base mt-2 text-white">
              Being a lead developer, revamped the site to a highly responsive,
              and interactive website. Created new features and pages. Worked as
              a team with product manager and ux designer.
            </p>

            {/* Technology Tags */}
            <ul className="flex flex-wrap gap-2 mt-2">
              {[
                "react.js",
                "express.js",
                "node.js",
                "swiper.js",
                "mongoDB",
                "mongoose",
                "css",
                "javascript",
                "figma",
              ].map((tech) => (
                <li
                  key={tech}
                  className="border rounded-[50px] border-gray-400 px-[10px] py-[5px] text-sm md:text-base text-white"
                >
                  #{tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline elements */}
          <div className="h-[1px] left-1/2 right-[10%] bg-blue-400 absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-yellow-300 absolute left-1/2 -translate-x-1/2 bg-gray-900 z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>

          {/* Laptop Frame with Phone Screen on right side */}
          <a
            href="#"
            className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
             <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="500px"
            containerWidth="500px"
            imageHeight="400px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className=" ">Kendrick Lamar - GNX</p>
            }
          />
          <a
            href="https://procodrr.com"
            className="flex w-full relative justify-center sm:justify-start"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          </a>
        </div>

        {/* Project 3: Harigurus */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[20px] items-center sm:mt-20 relative">
          {/* Timeline elements */}
          <div className="h-[1px] left-[10%] right-1/2 bg-blue-400 absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-orange-400 absolute left-1/2 -translate-x-1/2 bg-gray-900 z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>

          {/* Laptop Frame with Phone Screen */}
          <a
            href="#"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
              {/* Laptop Frame */}
              <div className="relative max-w-[600px] w-full">
                {/* Laptop Screen */}
                <div className="bg-gray-800 rounded-t-lg p-4 relative">
                  {/* Screen Bezel */}
                  <div className="bg-black rounded-t-md p-2">
                    {/* Phone Display Inside Laptop */}
                    <div className="bg-gray-900 rounded-lg p-2 h-48 relative overflow-hidden">
                      {/* Phone Frame */}
                      <div className="bg-gray-800 rounded-lg h-full w-2/3 mx-auto relative shadow-lg">
                        {/* Phone Screen */}
                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg h-full relative overflow-hidden m-1 shadow-[0_0px_30px_rgba(249,115,22,0.8)] brightness-110">
                          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent"></div>
                          <div className="flex items-center justify-center h-full relative z-10">
                            <span className="text-white font-bold text-sm">
                              Harigurus
                            </span>
                          </div>
                          {/* Phone Screen Glare Effect */}
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                        </div>
                        {/* Phone Notch */}
                        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  {/* Laptop Camera */}
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-600 rounded-full"></div>
                </div>
                {/* Laptop Base */}
                <div className="bg-gray-700 rounded-b-lg h-4 relative">
                  <div className="absolute inset-x-0 top-0 h-px bg-gray-600"></div>
                  {/* Trackpad */}
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-600 rounded-sm"></div>
                </div>
              </div>

              {/* Project Label */}
              <span className="flex group-hover:-top-14 ease-in-out duration-200 bg-orange-400 sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 text-white after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Harigurus
                <ExternalLink size={16} />
              </span>
            </div>
          </a>

          {/* Project Details */}
          <div className="w-full">
            <h3 className="text-orange-400 font-bold text-2xl md:text-4xl">
              Harigurus
            </h3>
            <span className="text-orange-400 text-base md:text-lg">
              (Event Booking)
            </span>
            <p className="text-justify text-sm md:text-base mt-2 text-white">
              HariGurus is a one-stop-shop for all Hindu religious, customs and
              traditional requirements. Built the complete site from scratch.
            </p>

            {/* Technology Tags */}
            <ul className="flex flex-wrap gap-2 mt-2">
              {[
                "react.js",
                "express.js",
                "node.js",
                "swiper.js",
                "mongoDB",
                "mongoose",
                "css",
                "javascript",
                "figma",
              ].map((tech) => (
                <li
                  key={tech}
                  className="border rounded-[50px] border-gray-400 px-[10px] py-[5px] text-sm md:text-base text-white"
                >
                  #{tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
