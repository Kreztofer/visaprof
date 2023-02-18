import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const TopDestinationCard = ({ details }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex justify-between w-[90%] mt-[70px] m-auto"
    >
      {details.map((item, i) => (
        <motion.div
          variants={fadeIn('right', 'spring', i * 0.5, 0.25)}
          className="duration-500 hover:scale-[1.03]"
          style={{
            width: '300px',
            height: '280px',
            position: 'relative',
            backgroundSize: 'cover',
            borderRadius: '20px',
            backgroundPosition: 'center',
            backgroundImage: `url(${item.img})`,
          }}
          key={i}
        >
          <p
            className={`bg-[${item.style}] w-[100%] text-center text-[#fff] absolute bottom-0 rounded-b-[20px] py-4 `}
          >
            {item.desc}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TopDestinationCard;
