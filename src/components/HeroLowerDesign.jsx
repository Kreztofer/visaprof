import React from 'react';

const HeroLowerDesign = () => {
  return (
    <section className="absolute flex flex-row justify-between bg-[#D19439] h-[180px] w-[80%] top-[600px] ml-[150px] py-[50px] px-[70px] rounded-[20px]">
      <div className="flex flex-col space-y-9 items-center justify-center">
        <h2 className="text-[36px] text-white font-semibold">200</h2>
        <p className="text-white text-[18px]">clients who have trusted us</p>
      </div>
      <div className="border border-l-[1px] h-[100px] border-[rgba(189, 189, 189, 0.7)]" />
      <div className="flex flex-col space-y-9 items-center justify-center">
        <h2 className="text-[36px] text-white font-semibold">98%</h2>
        <p className="text-white text-[18px]">Successful visa process rate</p>
      </div>
      <div className="border border-l-[1px] h-[100px] border-[rgba(189, 189, 189, 0.7)]" />
      <div className="flex flex-col space-y-9 items-center justify-center">
        <h2 className="text-[36px] text-white font-semibold">60 hrs</h2>
        <p className="text-white text-[18px]">Application approval time</p>
      </div>
    </section>
  );
};

export default HeroLowerDesign;
