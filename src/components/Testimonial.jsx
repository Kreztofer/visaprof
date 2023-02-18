import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { TestDetails } from '../constants';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

import down from '../assets/apostrophe-down.png';
import up from '../assets/apostrophe-up.png';
import circle1 from '../assets/circle-vector_right.png';
import circle2 from '../assets/circle-vector_left.png';

const Testimonial = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className="mt-[170px] relative"
    >
      <img
        src={circle1}
        alt="circle right"
        className="absolute top-[-90px] right-0"
      />
      <h1 className="text-center font-bold text-[34px]">
        What <span className="text-[#D19439]">our clients</span> have to say?
      </h1>
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="flex justify-around w-[90%] mt-[70px] m-auto"
      >
        {TestDetails.map((item, i) => (
          <div className="mt-[50px] relative" key={i}>
            <img
              className="absolute top-[-20px] left-[170px] z-10"
              src={item.img}
              alt="icon"
            />
            <div className="bg-white items-center flex flex-col text-center p-[20px] w-[400px] h-[270px] relative rounded-[8px] shadow-lg m-auto duration-500 hover:scale-[1.02] space-y-5">
              <h1 className="mt-[40px] font-semibold text-[16px]">
                {item.name}
              </h1>
              <img
                className="w-[24px] absolute top-[85px] left-8"
                src={up}
                alt="up"
              />
              <p className="w-[70%] text-[16px]">{item.desc}</p>
              <img
                className="w-[24px] absolute bottom-[70px] right-8"
                src={down}
                alt="down"
              />
              <div className="flex gap-2">
                <AiFillStar className="text-[#D19439]" />
                <AiFillStar className="text-[#D19439]" />
                <AiFillStar className="text-[#D19439]" />
                <AiFillStar className="text-[#D19439]" />
                <AiFillStar className="text-[#D19439]" />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <img
        src={circle2}
        alt="circle left"
        className="absolute bottom-[-240px] left-0"
      />
    </motion.section>
  );
};

export default Testimonial;
