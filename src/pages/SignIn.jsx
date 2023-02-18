import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { MdVerified } from 'react-icons/md';
import logo from '../assets/logo1.png';
import google from '../assets/google.png';

// const FIRSTNAME_REGEX = /^[A-Za-z]{3,23}$/;
// const LASTNAME_REGEX = /^[A-Za-z]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const EMAIL_REGEX =
//   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(
    <AiFillEyeInvisible className="text-[#BDBDBD]" />
  );

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(<AiFillEye className="text-[#BDBDBD]" />);
      setType('text');
    } else {
      setIcon(<AiFillEyeInvisible className="text-[#BDBDBD]" />);
      setType('password');
    }
  };

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  const handleSubmit = () => {
    navigate('/home');
  };
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
        <form onSubmit={handleSubmit}>
          <div className="form flex flex-col">
            <div className="form_group w-[600px] flex items-center">
              <input
                type="text"
                id="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-describedby="enote"
                aria-invalid={email ? 'false' : 'true'}
                className="form_control"
                placeholder="Email address"
              />
              <MdVerified className="text-[#BDBDBD]" />
            </div>
            <div className="form_group w-[600px] flex items-center">
              <input
                type={type}
                id="password"
                autoComplete="off"
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-describedby="pwdnote"
                aria-invalid={pwd ? 'false' : 'true'}
                className="form_control"
                placeholder="Password"
              />
              <p onClick={() => handleToggle()}>{icon}</p>
            </div>
          </div>
          <div className="flex gap-5 items-center mt-6">
            <button className="bg-[#D19439] border-2 border-[#d19439] rounded-[15px] text-white py-2 w-[145px] hover:bg-transparent hover:text-[#d19439] duration-300">
              Sign Up
            </button>
            <p>or sign up with</p>
            <img src={google} alt="google logo" />
          </div>
        </form>

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
