import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/hero-1.JPG";
import santaHat from "../assets/santahat.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap p-8">
        {/* Left side content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:pl-16">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-14 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl hover:underline decoration-violet-500 transition duration-700 ease-in-out"
            >
              Vishal Hadiyal
            </motion.h1>

            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Web Developer
            </motion.span>

            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl font-normal text-justify tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right side content */}
        <div className="w-full lg:w-1/2 lg:p-3">
          <div className="flex justify-center lg:justify-end">
            <motion.div
              className="relative"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              {/* Profile Picture */}
              <img
                src={profilePic}
                alt="Vishal Hadiyal"
                className="max-w-xs lg:max-w-sm h-auto rounded-2xl hover:scale-110 focus:outline-none focus-visible:outline-none"
              />

              {/* Santa Hat */}
              <motion.img
                src={santaHat}
                alt="Santa Hat"
                className="absolute w-20 lg:w-24 -top-10 -right-12 transform rotate-10"
                initial={{ y: -20, rotate: 15 }}
                animate={{ y: [-20, -10, -20], rotate: [15, 20, 15] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
