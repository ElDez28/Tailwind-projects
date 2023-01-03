import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CancelIcon from "@mui/icons-material/Cancel";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
const Modal = () => {
  return (
    <div className=" w-[70%] md:w-auto flex rounded-3xl overflow-hidden bg-white items-center relative">
      <div className="p-12">
        <h2 className="text-3xl font-bold mb-10">Log In</h2>
        <p className="mb-10">
          Log in to your account to upload or download pictures videos or music
        </p>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full mb-10 border focus:outline-none  p-3"
        ></input>
        <div className="flex justify-between items-center w-full mb-10">
          <Link className="text-teal-700">Forgot Password</Link>
          <button className="border py-3 px-5 bg-cyan-700 text-white rounded-lg">
            Next <ArrowForwardIcon></ArrowForwardIcon>
          </button>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mb-4"></div>
        <p className="text-center mb-4">Or login with</p>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-1 border p-2 ">
            <FacebookIcon className="text-blue-700 rounded-xl"></FacebookIcon>
            <span>Facebook</span>
          </div>
          <div className="flex items-center space-x-1 border p-2 rounded-lg">
            <GoogleIcon className="text-yellow-400 rounded-xl"></GoogleIcon>
            <span>Google</span>
          </div>
        </div>
      </div>
      <div className="hidden md:block relative">
        <img
          src="https://images.unsplash.com/photo-1531694611353-d4758f86fa6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="object-cover w-[450px]"
        ></img>
      </div>
      <div className="absolute right-2 top-1 cursor-pointer">
        <CancelIcon></CancelIcon>
      </div>
    </div>
  );
};

export default Modal;
