import React from 'react';

import { motion } from 'framer-motion';
import { staggerContainer, zoomIn, fadeIn } from '../utils/motion';

import doodle from '../assets/doodle.png';
import man from '../assets/man.png';

const AboutUs = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      id="about"
      className="mt-[200px] flex justify-between px-[100px]"
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="basis-[45%] space-y-5 mt-[80px]"
      >
        <h1 className="font-bold text-[34px]">
          Africa’s <span className="text-[#D19439]">leading </span>visa
          consultants
        </h1>
        <p>
          VISAPROF is a pioneer in Nigeria’s online travel industry. The
          organization started in 2020 on the basis of an idea conceived by its
          promoters. VISAPROF is trusted by over 200 clients. We assist
          applicants in navigating the visa process to any country in which they
          choose to stay or visit.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative"
      >
        <img className="mt-[50px]" src={doodle} alt="doodle" />
        <img className="absolute top-0 right-[90px]" src={man} alt="man" />
      </motion.div>
    </motion.section>
  );
};

export default AboutUs;
