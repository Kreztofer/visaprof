import React from 'react';
import { Slides } from '../constants';
import ImageSlider from './ImageSlider';

const HeroSection = () => {
  return (
    <section className="mt-[70px]">
      <ImageSlider slides={Slides} />
    </section>
  );
};

export default HeroSection;
