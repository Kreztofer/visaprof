import React from 'react';
import logo from '../assets/logo2.png';

const Navbar = ({ open, setOpen }) => {
  return (
    <nav className="flex shadow-md justify-between px-[80px] items-center fixed w-[100%] top-0 bg-[#f5f5f5] z-[100]">
      <div className="flex items-center cursor-pointer space-x-10 text-[#222222] font-[600] text-[15px]">
        <img className="h-[70px]" src={logo} alt="logo" />
        <p>Agent information</p>
        <p>Country requirements</p>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>
      <div className="flex space-x-[20px]">
        <button
          className={`border-2 border-[#D19439] duration-500 hover:scale-[1.04] px-[30px] py-[6px] rounded-[15px]`}
        >
          Sign In
        </button>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`bg-[#D19439] px-[30px] duration-500 hover:scale-[1.04] py-[6px] rounded-[15px] text-white`}
        >
          Sign Up
        </button>
        <div
          className={`dropdown-menu ${open ? 'drop-active' : 'drop-inactive'}`}
        >
          <p className="mt-[6px]">Sign up as myself</p>
          <hr className="text-[#000] mt-2" />
          <p className="mt-[5px]">Sign up as an agent</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
