import React from 'react';
import { ClientsOffer } from '../constants';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const Clients = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className="mt-[170px]"
    >
      <h1 className="text-center font-bold text-[34px]">
        What we offer our clients
      </h1>
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="flex justify-between w-[88%] m-auto"
      >
        {ClientsOffer.map((item, i) => (
          <div className="mt-[100px] relative" key={i}>
            <img
              className="absolute top-[-20px] left-[120px] z-10"
              src={item.img}
              alt=""
            />
            <div className="bg-white items-center flex flex-col text-center p-[20px] w-[300px] h-[250px] relative rounded-[8px] shadow-lg m-auto duration-500 hover:scale-[1.02] space-y-9">
              <h1 className="mt-[30px] font-extrabold text-[20px]">
                {item.top}
              </h1>
              <p className="text-[16px]">{item.info}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Clients;
