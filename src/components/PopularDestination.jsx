import React from 'react';
import previous from '../assets/previous.png';
import next from '../assets/next.png';
import PopDestinationCard from './PopDestinationCard';
import { PopularDest } from '../constants';

import { motion } from 'framer-motion';

import { staggerContainer } from '../utils/motion';

const PopularDestination = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className="mt-[170px]"
    >
      <h1 className="text-center font-bold text-[34px]">
        Popular destinations
      </h1>

      <div className="w-[100%] mt-6 py-[15px] items-center text-center text-[#757575] bg-[rgba(255,243,209,0.6)]">
        Tourist visa only
      </div>
      <div className="relative">
        <img
          className="absolute left-1 top-[180px]"
          src={previous}
          alt="previous"
        />
        <img className="absolute right-1 top-[180px]" src={next} alt="next" />
        <PopDestinationCard details={PopularDest} />
      </div>
    </motion.section>
  );
};

export default PopularDestination;
