import React from "react";
import SignPics from "../assets/dl.beatsnoop 1.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex mt-[50px] ml-0 mb-[100px] mr-[100px] justify-between font-Poppins">
      <div>
        <img src={SignPics} alt="" />
      </div>
      <div className="mt-[100px]">
        <form action="">
          <h1 className="font-medium text-[36px] font-Inter">
            Log in to Exclusive
          </h1>
          <p className="text-[16px] font-medium">Enter your details below</p>
          <div className="mt-[50px]">
            <div className="mt-10">
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="outline-none text-[16px] font-regular"
              />
              <hr className="mt-2" />
            </div>
            <div className="mt-10">
              <input
                type="text"
                placeholder="Password"
                className="outline-none text-[16px] font-regular"
              />
              <hr className="mt-2" />
            </div>
          </div>
          <div className="flex justify-between mt-[50px] items-center">
            <button
              type="submit"
              className="text-[16px] font-medium bg-[#DB4444] py-4 px-10 rounded text-white"
            >
              Log In
            </button>
            <div>
              <a href="" className="text-[#DB4444] font-regular text-[16px]" >Forget Password?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
