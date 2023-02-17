import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import logo from '../assets/logo1.png';
import google from '../assets/google.png';

const FIRSTNAME_REGEX = /^[A-Za-z]{3,23}$/;
const LASTNAME_REGEX = /^[A-Za-z]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const SIGNUP_URL = '/users';

const SignUp = () => {
  const userRef = useRef();
  const errRef = useRef();

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  const handleSubmit = () => {};
  return (
    <section className="flex flex-row w-[100%] relative">
      <div className="bg-login-img w-[400px] h-[100vh] relative">
        <img src={logo} alt="logo" className="h-[60px] mt-[40px]" />
      </div>
      <div className="mx-[80px] mt-[90px]">
        <div className="space-y-2">
          <h1 className="font-[800] text-[36px] leading-[50px]">
            Welcome back!
          </h1>
          <p>We’re always excited to have you back.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="form_group w-[600px]">
            <input
              type="text"
              id="email"
              className="form_control"
              placeholder="Email address"
            />
          </label>
          <label className="form_group w-[600px]">
            <input
              type="password"
              id="password"
              className="form_control"
              placeholder="Password"
            />
          </label>
          <label className="checkbox">
            <input type="checkbox" /> Keep me signed in{' '}
          </label>
        </form>
        <div className="flex gap-5 items-center mt-6">
          <button className="bg-[#D19439] border-2 border-[#d19439] rounded-[15px] text-white py-2 w-[145px] hover:bg-transparent hover:text-[#d19439] duration-300">
            Sign Up
          </button>
          <p>or sign up with</p>
          <img src={google} alt="google logo" />
        </div>
        <p className="ml-[200px] mt-[20px]">
          Don't have an account?{' '}
          <Link to="/signUp">
            <span className="text-[#D19439]">Sign Up</span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
