import React, { useState, useRef, useEffect } from 'react';
import { TravelCard } from '../constants';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { BsChevronDown } from 'react-icons/bs';
import arrows from '../assets/arrows.png';

const ImageSlider = ({ slides }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goToPrevious();
    }, 5000);
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slideStyles = {
    width: '100%',
    height: '90vh',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={slideStyles}>
      <div className="bg-black opacity-[0.2] w-[100%] h-[100%]" />
      <div className="absolute top-[140px] left-[50px] space-y-9 w-[93%]">
        <div className="font-[800] text-[24px]">
          <p className="text-white leading-[45px] tracking-wider">
            PROMPT AND EASY STEPS FOR <br /> VISA PROCESSING
          </p>
        </div>
        <div className="h-[280px] rounded-[30px] border-2 border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.3)] drop-shadow-lg backdrop-blur-sm">
          <div className="flex">
            {TravelCard.map((item, i) => (
              <div key={i} className="mx-auto mt-[40px] flex gap-5">
                <div className="bg-white w-[205px] rounded-[15px] h-[120px] space-y-8 pl-3 pt-3">
                  <p className="text-[#757575] text-[12px]">{item.desc1}</p>
                  <div className="font-[500] text-[#222222]">
                    <p className="flex items-center gap-[63px]">
                      {item.dest1}{' '}
                      <span>
                        <BsChevronDown />
                      </span>
                    </p>
                    <p className="text-[12px]">{item.day1}</p>
                  </div>
                </div>
                <div className="bg-white w-[205px] rounded-[15px] h-[120px] space-y-8 pl-3 pt-3">
                  <p className="text-[#757575] text-[12px]">{item.desc2}</p>
                  <div className="font-[500] text-[#222222]">
                    <p className="flex items-center gap-[63px]">
                      {item.dest2}{' '}
                      <span>
                        <BsChevronDown />
                      </span>
                    </p>
                    <p className="text-[12px]">{item.day2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-[78px] left-[210px]">
            <img src={arrows} className="w-[90%]" alt="arrows" />
          </div>
          <div className="border-2 border-[#162e40] hover:bg-transparent duration-150 bg-[#162E40] p-4 rounded-full w-[50px] m-auto mt-[50px] text-white hover:text-[#162e40]">
            <HiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
