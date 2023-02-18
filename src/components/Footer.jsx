import React from 'react';
import { FooterDetails, FooterLogos } from '../constants';

const Footer = () => {
  return (
    <footer className="border border-t-[rgba(189,189,189,0.4)] mt-[170px]">
      <div className="flex justify-around mt-10">
        <div className="flex gap-3 items-center">
          {FooterLogos.map((item, i) => (
            <img className="h-[20px]" key={i} src={item.img} alt="logos" />
          ))}
        </div>
        <div className="flex gap-[80px]">
          {FooterDetails.map((item, i) => (
            <div key={i}>
              <p className="font-bold">{item.header}</p>
              <p className="mb-[14px] mt-[6px] text-[14px] font-[300] text-[#757575]">
                {item.desc1}
              </p>
              <p className="text-[14px] font-[300] text-[#757575]">
                {item.desc2}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[100%] mt-[40px] bg-[#162E40] text-[#F5F5F5] h-[60px] text-center font-light">
        <p className="pt-[20px] font-light">
          &copy; 2022 VISAPROF Visa processing firm. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
