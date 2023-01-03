import React from "react";

const productDetail = () => {
  return (
    <div className="flex items-center space-y-5  justify-center bg-white-700 flex-col md:space-x-10 md:space-y-0 md:flex-row  bg-white p-8 rounded-3xl">
      <div className="flex  justify-center  ">
        <img
          className="object-cover w-60 rounded-lg hover:scale-105 duration-200 "
          alt=""
          src="https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
        ></img>
      </div>
      <div className=" flex flex-col p-6 items-center md:items-start">
        <span className="text-center w-[50%] pt-1 pb-1 pl-2 pr-2 bg-black text-xs rounded-xl">
          Free Shipping
        </span>
        <h3 className="text-lg mb-2 text-black font-bold">
          Man's shoes made of finest leader
        </h3>

        <span>
          <s className="text-black">$799</s>
        </span>
        <h2 className="text-3xl text-black font-bold">$599</h2>
        <span className="text-xs  text-[#adb5bd]">
          The offer is valid until october 28 or until the stocks last!
        </span>
        <button className="w-full text-center bg-violet-700 p-2 rounded-lg mt-4 mb-4">
          Add to Cart
        </button>
        <span className="text-xs text-[#adb5bd] flex items-center space-x-2 group ">
          <div className="rounded-[50%] bg-green-600 w-2 h-2 group-hover:animate-ping"></div>
          <span>50+ pieces in stock</span>
        </span>
        <div className=" w-full flex flex-col md:flex-row md:space-x-2 ">
          <button className="w-full text-center border border-slate-100 border-1 p-2 text-sm rounded-lg text-black mt-4 hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
            Add to cart
          </button>
          <button className="w-full text-center border border-slate-100 border-1 p-2 text-sm rounded-lg text-black mt-4 hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
            Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default productDetail;
