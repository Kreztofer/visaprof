import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Questions } from '../constants';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const FrequentQuestions = () => {
  const [openQuestion, setOpenQuestion] = useState(false);
  const [id, setId] = useState();

  const handleShowDetails = (item) => {
    setOpenQuestion((prev) => !prev);
    setId(item);
  };
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className="mt-[180px]"
    >
      <h1 className="text-center font-bold text-[34px]">
        Frequently asked <span className="text-[#D19439]">questions</span>
      </h1>
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="flex mt-[60px] h-[470px] py-[20px]  w-[60%] m-auto rounded-[15px] shadow-lg bg-[#fff] flex-col"
      >
        {Questions.map((item, i) => (
          <div className="w-[80%] m-auto" key={i}>
            <div className="flex justify-between items-center pb-[20px]">
              <p className="font-bold">{item.header}</p>
              <div onClick={() => handleShowDetails(item.id)}>
                {id === item.id && openQuestion ? (
                  <p className="bg-[rgba(209,148,57,0.4)] w-[25px] rounded-full h-[25px] flex justify-center border border-[#D19439]">
                    <AiOutlineMinus className="mt-[4px] text-[#323232]" />
                  </p>
                ) : (
                  <p className="bg-[rgba(209,148,57,0.4)] w-[25px] rounded-full h-[25px] flex justify-center border border-[#D19439]">
                    <AiOutlinePlus className="mt-[4px] text-[#323232]" />
                  </p>
                )}
              </div>
            </div>
            {id === item.id && (
              <p
                className={`info ${
                  openQuestion ? 'info-active' : 'info-inactive'
                }`}
              >
                {item.detail}
              </p>
            )}
            <hr className="bg-[#000]" />
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FrequentQuestions;
