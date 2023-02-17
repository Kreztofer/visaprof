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
    <section className="flex flex-row w-[100%]">
      <div className="bg-login-img w-[350px] h-[100vh]">
        <img src={logo} alt="logo" className="h-[60px] mt-[40px]" />
      </div>
      <div className="mx-[80px] mt-[90px]">
        <div className="space-y-2">
          <h1 className="font-[800] text-[36px] leading-[50px]">Welcome!</h1>
          <p>This will only take a minute!</p>
        </div>
        <p className="mt-8 font-[600] leading-[50px]">
          Sign up as an agent instead?{' '}
          <span className="text-[#D19439]">Sign up as agent</span>{' '}
        </p>
        <form onSubmit={handleSubmit}>
          <label className="form_group w-[370px]">
            <input
              type="text"
              id="firstname"
              className="form_control"
              placeholder="First name"
            />
          </label>
          <label className="form_group w-[370px]">
            <input
              type="text"
              id="lastname"
              className="form_control"
              placeholder="Last name"
            />
          </label>
          <label className="form_group w-[370px]">
            <input
              type="text"
              id="email"
              className="form_control"
              placeholder="Email address"
            />
          </label>
          <label className="form_group w-[370px]">
            <input
              type="text"
              id="country"
              className="form_control"
              placeholder="Country"
            />
          </label>
          <label className="form_group w-[370px]">
            <input
              type="password"
              id="password"
              className="form_control"
              placeholder="Password"
            />
          </label>
          <label className="form_group w-[370px]">
            <input
              type="password"
              id="confirm_pwd"
              className="form_control"
              placeholder="Confirm password"
            />
          </label>
          <label className="checkbox">
            <input type="checkbox" /> I agree to the{' '}
            <span className="text-[#D19439]">terms and conditions</span>
          </label>
        </form>
        <div className="flex gap-5 items-center mt-6">
          <button className="bg-[#D19439] border-2 border-[#d19439] rounded-[15px] text-white py-2 w-[145px] hover:bg-transparent hover:text-[#d19439] duration-300">
            Sign Up
          </button>
          <p>or sign up with</p>
          <img src={google} alt="google logo" />
        </div>
        <p className="text-center">
          Already have an account?{' '}
          <Link to="/signIn">
            <span className="text-[#D19439]">Sign In</span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
