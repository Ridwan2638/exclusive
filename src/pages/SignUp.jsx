import React from "react";
import SignPics from "../assets/dl.beatsnoop 1.png";
import { Link } from "react-router-dom";
import Login from "./Login";
import { GoogleLogin } from "@react-oauth/google";

const SignUp = () => {
  return (
    <div className="flex mt-[50px] ml-0 mb-[100px] mr-[100px] justify-between font-Poppins">
      <div>
        <img src={SignPics} alt="" />
      </div>
      <div className="mt-[100px]">
        <form action="">
          <h1 className="font-medium text-[36px] font-Inter">
            Create an account
          </h1>
          <p className="text-[16px] font-medium">Enter your details below</p>
          <div className="mt-[50px]">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="outline-none text-[16px] font-regular"
              />
              <hr className="mt-2" />
            </div>
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
          <button type="submit" className="text-[16px] font-medium bg-[#DB4444] py-5 w-full rounded text-white mt-[50px]">Create Account</button>
        </form>
        <GoogleLogin className="w-full mt-5 py-5" onSuccess={(CredentialResponse)=>{
          console.log(CredentialResponse)
        }} onError={() => {
          console.log("Login Failed")
        }} />
        <p className="font-regular text-[16px] mt-4 m-auto ">Already have account?  <Link to='/Login' className="font-medium text-[16px] underline underline-offset-[10px]">Log in</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
