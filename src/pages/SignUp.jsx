import { useEffect, useRef, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { MdVerified } from 'react-icons/md';
import axios from '../api/axios';
import logo from '../assets/logo1.png';
import google from '../assets/google.png';

const NAME_REGEX = /^[A-Za-z]{3,23}$/;
const PWD_REGEX = /^[A-Za-zÀ-ȕ0-9(),-_.,#$@&]{5,15}$/;
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const SIGNUP_URL = '/users';

const SignUp = () => {
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(
    <AiFillEyeInvisible className="text-[#BDBDBD]" />
  );
  const [confirmType, setConfirmType] = useState('password');
  const [confirmicon, setConfirmIcon] = useState(
    <AiFillEyeInvisible className="text-[#BDBDBD]" />
  );

  const [firstName, setFirstName] = useState('');
  const [validFname, setValidFname] = useState(false);
  const [fnameFocus, setFnameFocus] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');

  const [lastName, setLastName] = useState('');
  const [validLname, setValidLname] = useState(false);
  const [lnameFocus, setLnameFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const isAgent = false;

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = NAME_REGEX.test(lastName);
    setValidLname(result);
  }, [lastName]);

  useEffect(() => {
    setValidFname(NAME_REGEX.test(firstName));
    setValidEmail(EMAIL_REGEX.test(email));
  }, [firstName, email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [lastName, firstName, email, pwd, matchPwd]);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(<AiFillEye className="text-[#BDBDBD]" />);
      setType('text');
    } else {
      setIcon(<AiFillEyeInvisible className="text-[#BDBDBD]" />);
      setType('password');
    }
  };
  const handleConfirmToggle = () => {
    if (confirmType === 'password') {
      setConfirmIcon(<AiFillEye className="text-[#BDBDBD]" />);
      setConfirmType('text');
    } else {
      setConfirmIcon(<AiFillEyeInvisible className="text-[#BDBDBD]" />);
      setConfirmType('password');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg('Invalid Entry');
      return;
    }
    try {
      const response = await axios.post(
        SIGNUP_URL,
        JSON.stringify({
          firstName,
          lastName,
          phoneNumber,
          email,
          password: pwd,
          isAgent,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(JSON.stringify(response));
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else {
        setErrMsg('Registration Failed');
      }
    }
    navigate('/');
  };
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
          <div className="form">
            <div>
              <div className="form_group w-[370px] flex items-center">
                <input
                  type="text"
                  id="firstname"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  aria-describedby="fnote"
                  onFocus={() => setFnameFocus(true)}
                  onBlur={() => setFnameFocus(false)}
                  aria-invalid={validFname ? 'false' : 'true'}
                  className="form_control"
                  placeholder="First name"
                />
              </div>
              <p
                id="fnote"
                className={
                  fnameFocus && firstName && !validFname
                    ? 'instructions'
                    : 'offscreen'
                }
              >
                Name should be above two letters
              </p>
            </div>
            <div>
              <div className="form_group w-[370px] flex items-center">
                <input
                  type="text"
                  id="lastname"
                  autoComplete="off"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  aria-describedby="lnote"
                  onFocus={() => setLnameFocus(true)}
                  onBlur={() => setLnameFocus(false)}
                  aria-invalid={validLname ? 'false' : 'true'}
                  className="form_control"
                  placeholder="Last name"
                />
              </div>
              <p
                id="lnote"
                className={
                  lnameFocus && lastName && !validLname
                    ? 'instructions'
                    : 'offscreen'
                }
              >
                Name should be above two letters
              </p>
            </div>
            <div>
              <div className="form_group w-[370px] flex items-center">
                <input
                  type="text"
                  id="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-describedby="enote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  aria-invalid={email ? 'false' : 'true'}
                  className="form_control"
                  placeholder="Email address"
                />
                <MdVerified className="text-[#BDBDBD]" />
              </div>
              <p
                id="enote"
                className={
                  emailFocus && email && !validEmail
                    ? 'instructions'
                    : 'offscreen'
                }
              >
                Invalid Email
              </p>
            </div>
            <div>
              <div className="form_group w-[370px] flex items-center">
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />
              </div>
            </div>
            <div>
              <div className="form_group w-[370px] flex items-center">
                <input
                  type={type}
                  id="password"
                  autoComplete="off"
                  onChange={(e) => setPwd(e.target.value)}
                  required
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  aria-invalid={pwd ? 'false' : 'true'}
                  className="form_control"
                  placeholder="Password"
                />
                <p onClick={() => handleToggle()}>{icon}</p>
              </div>
              <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
              >
                Password must be 5 to 24 characters
              </p>
            </div>
            <div>
              <div className="form_group w-[370px] flex items-center">
                <input
                  type={confirmType}
                  id="confirm_pwd"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? 'false' : 'true'}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className="form_control"
                  placeholder="Confirm password"
                />
                <p onClick={() => handleConfirmToggle()}>{confirmicon}</p>
              </div>
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? 'instructions' : 'offscreen'
                }
              >
                Must match the first password input field.
              </p>
            </div>
            <div className="checkbox">
              <input type="checkbox" /> I agree to the{' '}
              <span className="text-[#D19439]">terms and conditions</span>
            </div>
          </div>
          <div className="flex gap-5 items-center mt-6">
            {validFname &&
            validLname &&
            validMatch &&
            validEmail &&
            validPwd ? (
              <button className="bg-[#D19439] border-2 border-[#d19439] rounded-[15px] text-white py-2 w-[145px] hover:bg-transparent hover:text-[#d19439] duration-300">
                Sign Up
              </button>
            ) : (
              <button className="bg-[#D19439] border-2 border-[#d19439] opacity-[0.4] rounded-[15px] text-white py-2 w-[145px]">
                Sign Up
              </button>
            )}
            <p>or sign up with</p>
            <img src={google} alt="google logo" />
          </div>
        </form>

        <p className="text-center">
          Already have an account?{' '}
          <Link to="/">
            <span className="text-[#D19439]">Sign In</span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
