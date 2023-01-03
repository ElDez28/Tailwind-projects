import React from "react";
import Hamburger from "./Hamburger";
import ilustration from "../images/illustration-working.svg";
import iconOne from "../images/icon-detailed-records.svg";
import facebook from "../images/icon-facebook.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import { useState } from "react";
const LinkPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <div className=" md:hidden absolute flex items-start justify-center w-screen h-screen">
          <div className=" bg-violet-700 mt-32 w-[90%] flex flex-col justify-center items-center text-white font-bold px-10 py-6 rounded-xl gap-7">
            <h3>Features</h3>
            <h3>Pricing</h3>
            <h3>Resources</h3>
            <div className="bg-white h-[1px] w-full"></div>
            <button>Login</button>
            <button className="bg-teal-400 py-2 px-6 rounded-3xl text-white w-full ">
              Sign up
            </button>
          </div>
        </div>
      )}
      <section className="w-screen mb-20 pb-10">
        <nav className="max-w-7xl mx-auto flex justify-between items-center text-gray-400 py-10 px-8 ">
          <div className="  flex gap-20 items-center ">
            <h2 className="font-bold text-3xl text-teal-400">Shortly</h2>
            <ul className="items-center gap-3 font-medium hidden xl:flex">
              <li className="hover:text-black cursor-pointer duration-200">
                Features
              </li>
              <li className="hover:text-black cursor-pointer duration-200">
                Pricing
              </li>
              <li className="hover:text-black cursor-pointer duration-200">
                Resources
              </li>
            </ul>
          </div>
          <div className="hidden xl:flex gap-2 ">
            <button className="font-medium">Login</button>
            <button className="bg-teal-400 py-2 px-4 rounded-3xl text-white font-medium">
              Sign up
            </button>
          </div>
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}></Hamburger>
        </nav>
        <div className="max-w-7xl flex-col xl:flex-row flex justify-between items-center mx-auto px-8 gap-12">
          <div className="xl:w-[30%] order-last xl:order-first text-center xl:text-left">
            <h1 className="text-5xl font-bold text-gray-800 mb-5">
              More then just shorter links
            </h1>
            <p className="text-gray-300 font-bold mb-5 ">
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </p>
            <button className="bg-teal-400 py-2 px-6 rounded-3xl text-white font-bold text-lg">
              Get Started
            </button>
          </div>
          <div className="w-[32rem]  xl:w-[50%] flex justify-center px-8">
            <img src={ilustration} alt=""></img>
          </div>
        </div>
      </section>
      <section className="w-screen bg-gray-100 pb-20">
        <div className="max-w-4xl lg:mx-auto -translate-y-10 flex flex-col gap-6 mx-20 ">
          <div className="bg-violet-900 flex-col lg:flex-row flex items-center justify-between w-full gap-4 mx-auto p-6 rounded-lg">
            <input
              type="url"
              className=" flex-1 w-full lg:w-auto p-2 rounded-lg focus:outline-none text-yellow-500 font-medium "
            ></input>
            <button className="w-full lg:w-auto bg-teal-400 py-2  px-6  rounded-lg text-white font-light ">
              Shorten it!
            </button>
          </div>
          <div className="flex flex-col text-center bg-white lg:flex-row items-center md:justify-between w-full  mx-auto p-6 rounded-lg">
            <span className="font-bold">http://www.unsplash.com</span>
            <div className="text-center flex flex-col lg:flex-row  lg:items-center">
              <span className="font-bold text-cyan-400 mb-4 lg:mb-0">
                http://www.unsplash.com
              </span>
              <button className="bg-teal-400 py-2 px-6 rounded-lg text-white font-light ml-2">
                Shorten it!
              </button>
            </div>
          </div>
          <div className="flex flex-col text-center bg-white lg:flex-row items-center md:justify-between w-full  mx-auto p-6 rounded-lg">
            <span className="font-bold">http://www.unsplash.com</span>
            <div className="text-center flex flex-col lg:flex-row  lg:items-center">
              <span className="mb-4 lg:mb-0 font-bold text-cyan-400">
                http://www.unsplash.com
              </span>
              <button className="bg-teal-400 py-2 px-6 rounded-lg text-white font-light ml-2">
                Shorten it!
              </button>
            </div>
          </div>
          <div className="flex flex-col text-center bg-white lg:flex-row items-center md:justify-between w-full  mx-auto p-6 rounded-lg">
            <span className="font-bold">http://www.unsplash.com</span>
            <div className="text-center flex flex-col lg:flex-row  lg:items-center">
              <span className="mb-4 lg:mb-0 font-bold text-cyan-400">
                http://www.unsplash.com
              </span>
              <button className="bg-teal-400 py-2 px-6 rounded-lg text-white font-light ml-2">
                Shorten it!
              </button>
            </div>
          </div>
        </div>
        <section className="py-24 bg-gray-100"></section>
        <div className="max-w-2xl mx-auto px-3 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-5">
            Advanced Statistics
          </h2>
          <p className="text-gray-400 font-bold  max-w-xs mx-auto ">
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </div>
      </section>
      <section className="relative pb-32 bg-gray-100">
        <div className="flex max-w-7xl space-y-20 flex-col space-x-0 md:space-x-10 items-start px-6 mx-auto md:flex-row md:space-x-7 relative ">
          <div className="absolute w-2 h-[90%]  -ml-2 bg-cyan-600 md:hidden top-20 left-[51%]"></div>
          <div className=" md:w-1/3 z-10 flex flex-col gap-4 bg-white ">
            <div className="flex justify-center align-center w-full">
              <div className=" p-6 rounded-full bg-cyan-900 -mt-12">
                <img src={iconOne} alt=""></img>
              </div>
            </div>
            <h2 className="text-center font-bold text-3xl">Hello</h2>
            <p className="text-center px-6 pb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
              aliquam amet dolor cupiditate eveniet quis porro aperiam tempore
              quaerat saepe expedita, quae vero. Sed velit sunt ducimus pariatur
              aspernatur quibusdam?
            </p>
          </div>
          <div className=" md:w-1/3  z-10 flex flex-col gap-4 bg-white md:translate-y-10">
            <div className="flex justify-center align-center w-full">
              <div className=" p-6 rounded-full bg-cyan-900 -mt-12">
                <img src={iconOne} alt=""></img>
              </div>
            </div>
            <h2 className="text-center font-bold text-3xl">Hello</h2>
            <p className="text-center px-6 pb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
              aliquam amet dolor cupiditate eveniet quis porro aperiam tempore
              quaerat saepe expedita, quae vero. Sed velit sunt ducimus pariatur
              aspernatur quibusdam?
            </p>
          </div>
          <div className=" md:w-1/3 z-10 flex flex-col gap-4 bg-white md:translate-y-16 ">
            <div className="flex justify-center align-center w-full">
              <div className=" p-6 rounded-full bg-cyan-900 -mt-12">
                <img src={iconOne} alt=""></img>
              </div>
            </div>
            <h2 className="text-center font-bold text-3xl">Hello</h2>
            <p className="text-center px-6 pb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
              aliquam amet dolor cupiditate eveniet quis porro aperiam tempore
              quaerat saepe expedita, quae vero. Sed velit sunt ducimus pariatur
              aspernatur quibusdam?
            </p>
          </div>
          <div className="w-10/12 mt-28 top-[40%]  left-16  h-3 hidden absolute md:block bg-cyan-600 "></div>
        </div>
      </section>
      <section id="cta" className="bg-[#22223b] py-24">
        <div className="flex items-center justify-center flex-col gap-6 w-full">
          <h2 className="font-bold text-white text-4xl">
            Boost your links today{" "}
          </h2>
          <button className="bg-teal-400 py-2 px-6 rounded-3xl text-white text-xl font-medium">
            Sign up
          </button>
        </div>
      </section>
      <footer className="bg-[#22223b] py-10 flex justify-center items-center flex-col md:flex-row gap-10 items-center md:justify-between text-white px-20 ">
        <h2 className="text-4xl font-bold text-center text-[#4a4e69]">
          Shortly
        </h2>

        <ul className=" text-center md:text-left">
          <li className="font-bold text-bold mb-2 text-lg text-center md:text-left">
            Features
          </li>
          <li>Link Shorthening</li>
          <li>Branded Links</li>
          <li>Analitytics</li>
        </ul>
        <ul className=" text-center md:text-left">
          <li className="font-bold text-bold mb-2 text-lg text-center md:text-left">
            Resources
          </li>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul className=" text-center md:text-left">
          <li className="font-bold text-bold mb-2 text-lg">Company</li>
          <li>About</li>
          <li>Our team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-4 md:flex-col">
          <img src={facebook} alt=""></img>
          <img src={pinterest} alt=""></img>
          <img src={instagram} alt=""></img>
          <img src={twitter} alt=""></img>
        </div>
      </footer>
    </>
  );
};

export default LinkPage;
