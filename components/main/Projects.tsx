import React from "react";
import TiltedCard from "./ProjectCard";
import TiltedRightCard from "./ProjectCardright";

const Projects = () => {
  return (
    <>
      {/* Portfolio Projects Section */}
      <section
        id="projects"
        className="flex flex-col align-items-center justify-center gap-3 h-full relative pb-0 py-5 text-white"
      >
        {/* Section Title */}
        <h2 className="text-3xl sm:text-[40px] bg-gray-900 relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-blue-400 sm:border-b-2 border-blue-400">
          My Projects
        </h2>

        {/* Vertical Timeline Line - Hidden on mobile, visible on desktop */}
        <div className="w-[2px] hidden sm:block bg-blue-400 absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>

        {/* Project 1 */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[0px] items-center sm:mt-0 relative">
          {/* Timeline elements for desktop */}
          <div className="h-[1px] left-[10%] right-1/2 bg-blue-400 absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-blue-300 absolute left-1/2 -translate-x-1/2 bg-gray-900 z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>

          <a
            href="https://e-commerce-website-ten-eta.vercel.app/"
            className="flex px-20 w-full relative justify-center sm:justify-start"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiltedCard
              imageSrc="/project1.png"
              altText="Course-Heaven"
              captionText=""
              containerHeight="500px"
              containerWidth="500px"
              imageHeight="300px"
              imageWidth="450px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={<p className="">Course-Heaven</p>}
            />
          </a>

          {/* Project Details */}
          <div className="px-10 w-full">     
            <h3 className="text-blue-300 font-bold text-2xl md:text-4xl">
              Course-Heaven
            </h3>
            <span className="text-blue-300 text-base md:text-lg">
              (Learning Platform)
            </span>
            <p className="text-justify text-sm md:text-base mt-2 text-white">
              A full-featured MERN Stack based E-Commerce (CourseHeaven
              E-learning web application) that enables users to browse courses,
              Buy courses, register/login securely. Admins can create course,
              edit, and delete courses through a dedicated dashboard. Payment
              integration with Stripe, secure user authentication, and a
              responsive user interface.
            </p>

            {/* Technology Tags */}
            <ul className="flex flex-wrap gap-2 mt-2">
              {[
                "react",
                "tailwind.css",
                "JWT",
                "express.js",
                "node.js",
                "stripe",
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

        {/* Project 2 */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[0px] items-center sm:mt-0 relative">
          {/* Content on left side for this project */}
          <div className="order-2 pl-10 sm:order-1 w-full">
            <h3 className="text-yellow-300 font-bold text-2xl md:text-4xl">
              Snake-Game
            </h3>
            <span className="text-yellow-300 text-base md:text-lg">(Game)</span>
            <div className="w-full">
              <p className="text-justify text-sm md:text-base mt-2 text-white">
                A classic Snake game built using HTML, CSS, and JavaScript. It
                features real-time gameplay, score tracking, and sound effects
                including food eating, game over, and background sounds. The
                game increases difficulty as the snake grows, providing an
                engaging and nostalgic arcade experience in the browser.
              </p>
            </div>

            {/* Technology Tags */}
            <ul className="flex flex-wrap gap-2 mt-2">
              {["html", "tailwind.css", "css", "javascript", "figma"].map(
                (tech) => (
                  <li
                    key={tech}
                    className="border rounded-[50px] border-gray-400 px-[10px] py-[5px] text-sm md:text-base text-white"
                  >
                    #{tech}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Timeline elements */}
          <div className="h-[1px] left-1/2 right-[10%] bg-blue-400 absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-yellow-300 absolute left-1/2 -translate-x-1/2 bg-gray-900 z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>

          {/* Laptop Frame with Phone Screen on right side */}
          <a
            href="https://snake-game-beta-lyart.vercel.app/"
            target="_blank"
            className="order-1 px-20 sm:order-2 flex relative justify-center sm:justify-start"
          >
            <TiltedRightCard
              imageSrc="/Snake-game.png"
              altText="Snake-Game"
              captionText=""
              containerHeight="500px"
              containerWidth="500px"
              imageHeight="300px"
              imageWidth="450px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={<p className="">Snake-Game</p>}
            />
            
          </a>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[0px] items-center sm:mt-0 relative">
          {/* Timeline elements for desktop */}
          <div className="h-[1px] left-[10%] right-1/2 bg-blue-400 absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-blue-300 absolute left-1/2 -translate-x-1/2 bg-gray-900 z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>

          <a
            href="https://interview-platform-code-sync.vercel.app/"
            className="flex px-20 w-full relative justify-center sm:justify-start"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiltedCard
              imageSrc="/project3.png"
              altText="TalentLoom"
              captionText=""
              containerHeight="500px"
              containerWidth="500px"
              imageHeight="300px"
              imageWidth="450px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={<p className="">Talent Loom</p>}
            />
          </a>

          {/* Project Details */}
          <div className="px-10 w-full">     
            <h3 className="text-blue-300 font-bold text-2xl md:text-4xl">
              Talent-Loom
            </h3>
            <span className="text-blue-300 text-base md:text-lg">
              (Interviewing and Coding Platform)
            </span>
            <p className="text-justify text-sm md:text-base mt-2 text-white">
             A full-featured interview platform (TalentLoom) that enables users to schedule, conduct, and review technical interviews. It includes real-time video conferencing, a collaborative code editor, and AI-powered mock interviews. The platform supports distinct user roles for interviewers and candidates, with secure authentication and a comprehensive dashboard for managing interview workflows.
            </p>

            {/* Technology Tags */}
            <ul className="flex flex-wrap gap-2 mt-2">
              {[
                "Next.js",
                "tailwind.css",
                "React",
                "Convex",
                "Clerk",
                "Stream",
                "Vapi",
                "OpenAI",
                "OpenRouteAI",
                "TypeScript",
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
