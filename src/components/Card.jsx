import React from "react";

const Card = (props) => {
  return (
    <div
      className={`flex lg:w-[20%] flex-col items-center border-8 border-[${props.border}] rounded-xl`}
    >
      <div
        className={` flex flex-col items-y-4 text-center w-full border-b-[.5px] border-[${props.border}] space-y-8 p-8 `}
      >
        <h2 className="text-white ">{props.title}</h2>
        <div className="flex flex-col">
          <p className="lg:text-5xl text-4xl font-serif">{props.gb}</p>
          <span className="mb-8">${props.price}/month</span>
          <button
            className={`mb-8 p-2 w-full border-[${props.button}] border border-1 rounded-lg bg-[${props.button}]`}
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center p-6">
        <p>{props.gb} of storage</p>
        <p>Options to add members</p>
        <p>Extra member benefit</p>
      </div>
    </div>
  );
};

export default Card;
