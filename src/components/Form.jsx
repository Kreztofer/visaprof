import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

import slash from '../assets/email_bg.png';

const Form = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className="mt-[170px]"
    >
      <h1 className="text-center font-bold text-[34px]">
        Get free assessment today
      </h1>
      <p className="text-[#D19439] text-center mt-4">
        Feel free to enquire about any questions you have
      </p>
      <div className="m-auto mt-[50px] w-[100%] relative">
        <img
          src={slash}
          className="w-[100%]"
          alt="email bg
          "
        />
        <motion.form
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="form-2 absolute top-10 left-[370px]"
        >
          <input
            className="form-2_control"
            type="text"
            id="full_name"
            placeholder="Full name"
          />
          <input
            className="form-2_control"
            type="text"
            id="email"
            placeholder="Email address"
          />
          <textarea
            className="form-2_control"
            name="message"
            placeholder="Type message here"
            rows="6"
          ></textarea>
          <button className="bg-[#D19439] px-[30px] duration-500 hover:scale-[1.04] py-[13px] rounded-[15px] w-[120px] text-white m-auto">
            Send
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Form;
