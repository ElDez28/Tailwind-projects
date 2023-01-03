import React from "react";

const Hamburger = (props) => {
  return (
    <div className="block xl:hidden">
      <button
        className={`${
          props.isOpen && "open"
        } z-40 block xl:hidden focus:outline-none cursor:pointer w-[24px] h-[24px] transition-all duration-200 relative`}
        onClick={() => props.setIsOpen((prev) => !prev)}
      >
        <span className="hamburger-top absolute w-[24px] h-[2px] top-0 left-0 bg-black rotate(0) transition-all duration-500"></span>
        <span className="hamburger-middle absolute w-[24px] h-[2px] top-0 left-0 bg-black rotate(0) transition-all duration-500 translate-y-[7px]"></span>
        <span className="hamburger-bottom absolute w-[24px] h-[2px] top-0 left-0 bg-black rotate(0) transition-all duration-500 translate-y-[14px]"></span>
      </button>
    </div>
  );
};

export default Hamburger;
