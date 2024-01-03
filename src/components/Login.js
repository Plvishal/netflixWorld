import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validation';

function Login() {
  const [isSignUpForm, setIsSignUpForm] = useState();
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignUpForm = () => {
    setIsSignUpForm(!isSignUpForm);
  };
  const handleButtonCLick = () => {
    // checkValidData(email, password);
    console.log(email, password);
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
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-500 rounded-lg"
          />
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
