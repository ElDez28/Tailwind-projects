import React from "react";
import header from "../images/bg-header-desktop.png";
import logo from "../images/logo.svg";
import mac from "../images/image-computer.png";
import device from "../images/image-devices.png";
import blacklist from "../images/icon-blacklist.svg";
const LandingPage = () => {
  return (
    <>
      <div className="w-full">
        <section className="max-w-6xl mx-auto flex flex-col justify-center">
          <div className="flex justify-center align-center w-full mt-[10rem] mb-6">
            <img alt="" src={logo}></img>
          </div>
          <h1 className="text-center text-3xl md:text-5xl text-gray-700 body-font font-display mb-6">
            A history of everything you copy
          </h1>
          <p className="text-center text-gray-400 font-display mb-8">
            Clipboard allows you to trak and organize everything you copy.{" "}
            <br /> Instantly access your clipboard on all your devices.
          </p>
          <div className="flex flex-col md:flex-row justify-center w-[80%]  mx-auto gap-2 mb-40">
            <button className=" rounded-3xl bg-teal-700 py-2 px-4 text-white duration-500 hover:opacity-80 ">
              Download for IOS
            </button>
            <button className=" rounded-3xl bg-blue-500 py-2 px-4 text-white duration-500 hover:opacity-80">
              Download for Mac
            </button>
          </div>
        </section>
        <section className="max-w-6xl mx-auto flex flex-col justify-center px-20">
          <h1 className="text-center text-5xl text-gray-700 body-font font-display mb-6">
            Keep track of your snippets
          </h1>
          <p className="max-w-3xl mx-auto text-center text-gray-400 font-display mb-40">
            Clipboard instantly stores any item you copy on the cloud, meaning
            you can access your snippets immediatly on all of your devices. Our
            Mac and IOS app will help you organize everything
          </p>
        </section>
        <section className="max-w-6xl mx-auto my-10 px-10 flex flex-col justify-center ">
          <div className="flex flex-col md:flex-row md:space-x-32 relative">
            <div className="md:w-[50%]">
              <img
                src={mac}
                className="md:absolute top:0 right-[50%]"
                alt=""
              ></img>
            </div>
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:text-left md:pl-16  md:w-[50%]">
              <div className="text-center md:text-left">
                <h3 className="mb-2 text-2xl font-bold text-gray-600">
                  Quick Search
                </h3>
                <p className="max-w-md   text-gray-400 text-base">
                  Easy search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="mb-2 text-2xl font-bold text-gray-600">
                  Quick Search
                </h3>
                <p className="max-w-md text-gray-400 text-base">
                  Easy search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              <div className="text-center md:text-left ">
                <h3 className="mb-2 text-2xl font-bold text-gray-600 ">
                  Quick Search
                </h3>
                <p className="max-w-md text-gray-400 text-base">
                  Easy search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto  px-10 flex flex-col  items-center h-screen">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-center text-5xl text-gray-700 body-font font-display mb-6">
              Access clipboard anywhere
            </h1>
            <p className="max-w-md text-gray-400 text-base text-center mb-20">
              Easy search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>

          <div>
            <img
              className=" w-[100%] mx-auto object-fit"
              src={device}
              alt=""
            ></img>
          </div>
        </section>
        <section className="max-w-6xl mx-auto my-10 px-10 flex flex-col  items-center h-screen">
          <div className="">
            <h1 className="text-center text-5xl text-gray-700 body-font font-display mb-6">
              Supercharge your workflow
            </h1>
            <p className="max-w-3xl mx-auto text-center text-gray-400 font-display mb-40">
              we'we got the tools for boost your productivity
            </p>
          </div>
          <div className="flex justify-center items-center flex-col md:flex-row space-y-8 md:space-y-0 w-[50%] md:w-[100%] mx-auto">
            <div className="flex flex-col justify-center items-center space-y-4 ">
              <img alt="" src={blacklist}></img>
              <h3 className="font-bold text-xl text-gray-600">
                Create blacklist
              </h3>
              <p className="text-center text-gray-400">
                Easy search your snippets by content, category, web address,
                application, and more
              </p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-4">
              <img alt="" src={blacklist}></img>
              <h3 className="font-bold text-xl text-gray-600">
                Create blacklist
              </h3>
              <p className="text-center text-gray-400">
                Easy search your snippets by content, category, web address,
                application, and more
              </p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-4">
              <img alt="" src={blacklist}></img>
              <h3 className="font-bold text-xl text-gray-600">
                Create blacklist
              </h3>
              <p className="text-center text-gray-400">
                Easy search your snippets by content, category, web address,
                application, and more
              </p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-4">
              <img alt="" src={blacklist}></img>
              <h3 className="font-bold text-xl text-gray-600">
                Create blacklist
              </h3>
              <p className="text-center text-gray-400">
                Easy search your snippets by content, category, web address,
                application, and more
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
