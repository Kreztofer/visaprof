import React from 'react';
import { Slides } from '../constants';

import logo from '../assets/logo2.png';
import ImageSlider from '../components/ImageSlider';

const HomePage = () => {
  return (
    <div>
      <nav className="flex justify-between px-[80px] items-center fixed w-[100%] top-0 bg-[#f5f5f5] z-[100]">
        <div className="flex items-center space-x-10 text-[#222222] font-[600] text-[15px]">
          <img className="h-[70px]" src={logo} alt="logo" />
          <p>Agent information</p>
          <p>Country requirements</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="flex space-x-[20px]">
          <button className="border-2 border-[#D19439] px-[30px] py-[6px] rounded-[15px]">
            Sign In
          </button>
          <button className="bg-[#D19439] px-[30px] py-[6px] rounded-[15px] text-white">
            Sign Up
          </button>
        </div>
      </nav>
      <section className="mt-[70px]">
        <ImageSlider slides={Slides} />
      </section>
      <section>hello</section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <footer></footer>
    </div>
  );
};

export default HomePage;
