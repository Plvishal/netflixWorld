import React, { cloneElement, useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';

function Login() {
  const [isSignUpForm, setIsSignUpForm] = useState();
  const [errMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignUpForm = () => {
    setIsSignUpForm(!isSignUpForm);
  };
  const handleButtonCLick = () => {
    //1.  check validation
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMessage(msg);
    console.log(isSignUpForm);
    if (msg) return;
    //2.  Sign up & sign in
    if (!isSignUpForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log(user);
        })
        .catch((error) => {
          const erorCode = error.code;
          const errorMsg = error.message;
          setErrorMessage(erorCode + '-' + errorMsg);
        });
    } else {
      // sign in logic
      console.log('you enter login page');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <Header />
        <div className=" absolute ">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="bg-full"
          />
        </div>
        <form
          className=" w-3/12 absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg"
          onSubmit={handleSubmit}
        >
          <h1 className="font-bold text-3xl py-4 ">
            {isSignUpForm ? 'Sign In' : 'Sign Up'}
          </h1>
          {!isSignUpForm && (
            <input
              type="text"
              placeholder="Full Name   "
              className="p-4 my-4 w-full bg-gray-500 rounded-lg"
            />
          )}

          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-500 rounded-lg"
            ref={email}
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-500 rounded-lg"
          />
          <p className="text-red-500 text-lg font-bold">{errMessage}</p>
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonCLick}
          >
            {isSignUpForm ? 'Sign In' : 'Sign Up'}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignUpForm}>
            {isSignUpForm
              ? 'Now to Netflix? Sign Up Now'
              : 'Already registered? Sign In Now'}
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
