"use client"
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import Svg from '../Svg';
// import myCV from "";

export default function Section_1() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -70 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const itemVariants2 = {
    hidden: { opacity: 0, x: +70 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="flex justify-center items-center flex-col md:flex-row hero-section-1 mt-20 sm:mt-9 lg:mt-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full md:w-1/2">
        <motion.span
          className="bg-primary text-white p-1 rounded-md text-sm sm:text-base"
          variants={itemVariants}
        >
          Software Engineer
        </motion.span>
        <br />
        <motion.h1
          className="text-2xl sm:text-4xl mt-4 leading-relaxed"
          variants={itemVariants}
        >
          Making The Impossible Possible. Using 1&apos;s and 0&apos;s.
        </motion.h1>
        <motion.p className="mt-4" variants={itemVariants}>
          Problem solving is what makes me unique.
        </motion.p>

        <div className="flex gap-10 sm:gap-44">
          <motion.div className="flex items-center gap-1 mt-16" variants={itemVariants}>
            <h3 className="text-2xl sm:text-4xl">3</h3>
            <p className="text-xs">Years of <br /> Experience</p>
          </motion.div>
          <motion.div className="flex items-center gap-1 mt-16" variants={itemVariants}>
            <h3 className="text-2xl sm:text-4xl">182</h3>
            <p className="text-xs">Projects / <br /> Contributions</p>
            <p>{new Date().getFullYear()}</p>
          </motion.div>
        </div>

        {/* <motion.button
          className="border-4 border-primary py-2 px-8 rounded-full mt-8 hover:scale-110 transition-all text-sm sm:text-base"
          variants={itemVariants}
        >
          View CV
        </motion.button> */}
        {/* <motion.button className="download-button my-8"
          variants={itemVariants}
        >
          <span className="download-button_lg">
            <span className="download-button_sl"></span>
            <span className="download-button_text">View My CV</span>
          </span>
        </motion.button> */}
        <motion.button variants={itemVariants} className='download-button my-8'>
          <span className="download-button_lg">
            <span className="download-button_sl"></span>
            <span className="download-button_text">
              <a
                href="https://drive.google.com/uc?export=download&id=1NODCtp8JKt-Ws5zs7tsCxO86Xepv5idW"
                download="Muhammad_Usman.pdf"
              >
                View My CV
              </a>
            </span>
          </span>
        </motion.button>
      </div>
      <div className="w-full md:w-1/2 hidden md:block">
        <motion.div
          variants={itemVariants2}
          initial="hidden"
          animate="visible"
        >
          <Svg />
        </motion.div>
      </div>
    </motion.div>
  );
}
