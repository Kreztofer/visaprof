import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const PopDestinationCard = ({ details }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'tween', 0.3, 1)}
      className="flex justify-between w-[90%] mt-[70px] m-auto"
    >
      {details.map((item, i) => (
        <div
          className="duration-500 hover:scale-[1.03]"
          style={{
            width: '300px',
            height: '380px',
            position: 'relative',
            backgroundSize: 'cover',
            borderRadius: '20px',
            backgroundPosition: 'center',
            backgroundImage: `url(${item.img})`,
          }}
          key={i}
        >
          <div
            className={`bg-[#fff] w-[100%] text-center absolute top-[-1px] rounded-t-[20px] py-4 `}
          >
            <p className="font-bold">{item.title}</p>
          </div>
          <div
            className={`bg-[#D19439] w-[100%] pl-5 absolute bottom-0 rounded-b-[20px] py-4 `}
          >
            <p className="text-white font-light">{item.head}</p>
            <p>{item.time}</p>
            <p className="text-white font-light">{item.amount}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default PopDestinationCard;
