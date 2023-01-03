import React from "react";

import interactive from "../images/image-interactive.jpg";
import curiosity from "../images/image-curiosity.jpg";
import curiosity2 from "../images/image-curiosity2.jpg";
import { useState } from "react";
import styles from "./Styles";
import Hamburger from "./Hamburger";
const Studio = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className=" hero w-screen h-[80vh] mb-32 ">
        <div className="max-w-[80%] mx-auto h-full ">
          <nav className=" mx-auto flex items-center justify-between p-4 text-gray-200">
            <div
              className={`${
                !isOpen && "hidden"
              } inset-0 bg-black absolute min-h-screen `}
            ></div>
            <div>
              <h1 className="text-2xl font-bold text-gray-200">loopstudios</h1>
            </div>
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}></Hamburger>
            <ul className="gap-4 hidden md:flex">
              <li>About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
          </nav>
          <div className="  w-full md:w-[40%] flex  ">
            <h1 className="border border-white text-5xl text-white py-10 px-10 mt-32  ">
              IMPRESIVE EXPERIENCE THAT DELIVER
            </h1>
          </div>
        </div>
      </section>
      <section className="w-screen mb-32 ">
        <div className="relative flex flex-col max-w-6xl mx-auto my-32 px-6 md:flex-row md:px-0">
          <img className="mb-8 " alt="" src={interactive}></img>
          <div className="top-48  pr-0 bg-white md:absolute md:right-0 md:py-20 md:px-20  md:w-[640px]">
            <h2 className="text-center text-3xl mb-2">
              THE LEADER IN INTERACTIVE VR
            </h2>
            <p className="text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              eius cumque aspernatur rerum quos, doloribus quia perferendis
              molestiae nam velit libero saepe consequatur ad tempore asperiores
              culpa, repudiandae itaque a?
            </p>
          </div>
        </div>
      </section>
      <section className="w-screen mb-32 mt-32 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center md:justify-between items-center px-4 mb-20">
            <h1 className="text-4xl">OUR CREATIONS</h1>
            <button className={styles.btn}>SEE ALL</button>
          </div>
          <div className="grid max-w-md md:max-w-full grid-cols-1 md:grid-cols-4 gap-4 justify-items-center mx-auto relative  ">
            <div className=" group overflow-hidden relative ">
              <img
                className="object-cover  w-full hidden md:block cursor-pointer group-hover:scale-110 duration-500 "
                src={curiosity}
                alt=""
              ></img>

              <img
                className="object-cover w-full block md:hidden"
                src={curiosity2}
                alt=""
              ></img>
              <div className={styles.gradient}></div>
              <h5 className={styles.text}>HELLO</h5>
            </div>
            <div>
              <img
                className="object-cover w-full hidden md:block"
                src={curiosity}
                alt=""
              ></img>
              <img
                className="object-cover w-full block md:hidden"
                src={curiosity2}
                alt=""
              ></img>
            </div>
            <div>
              <img
                className="object-cover w-full hidden md:block"
                src={curiosity}
                alt=""
              ></img>
              <img
                className="object-cover w-full block md:hidden"
                src={curiosity2}
                alt=""
              ></img>
            </div>
            <div>
              <img
                className="object-cover w-full hidden md:block"
                src={curiosity}
                alt=""
              ></img>
              <img
                className="object-cover w-full block md:hidden"
                src={curiosity2}
                alt=""
              ></img>
            </div>
            <button className="bg-white hover:bg-black text-black hover:text-white transition-all border border-black py-2 w-full px-6 md:hidden">
              SEE ALL
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Studio;
