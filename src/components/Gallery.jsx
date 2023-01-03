import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
const Gallery = () => {
  return (
    <div className=" mx-auto bg-white flex  rounded-2xl flex-col p-10">
      <div className="flex space-x-4 w-full justify-end mb-20 ">
        <Link className="border border-b-[.5px] border-white hover:border-b-[.5px] hover:border-b-gray-500 ">
          Vector
        </Link>
        <Link className="border border-b-[.5px] border-white hover:border-b-[.5px] hover:border-b-gray-500">
          Ilustrations
        </Link>
        <Link className="border border-b-[.5px] border-white hover:border-b-[.5px] hover:border-b-gray-500">
          Images
        </Link>
        <Link className="border border-b-[.5px] border-white hover:border-b-[.5px] hover:border-b-gray-500">
          Icons
        </Link>
      </div>
      <div className="flex justify-between mb-20">
        <div className="flex items-end">
          <input
            type="search"
            placeholder="Search"
            className=" border-b-[.5px] border-gray  focus:outline-none text-md"
          ></input>
          <SearchIcon
            style={{ fill: "gray" }}
            className=" !text-2xl"
          ></SearchIcon>
        </div>
        <button className=" text-center border border-slate-100 border-1 p-2 text-sm rounded-lg bg-black text-white hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
          Add to wishlist
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-4 justify-items-center">
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1672138087164-136de70cabe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="w-60 "
          ></img>
          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
            <div className="flex justify-between w-full">
              <div className="font-normal">
                <p className="text-sm">Abstract Painting</p>
                <p className="text-xs">245 likes - 35 Shares</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1672138087164-136de70cabe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="w-60 "
          ></img>
          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
            <div className="flex justify-between w-full">
              <div className="font-normal">
                <p className="text-sm">Abstract Painting</p>
                <p className="text-xs">245 likes - 35 Shares</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1672138087164-136de70cabe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="w-60 "
          ></img>
          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
            <div className="flex justify-between w-full">
              <div className="font-normal">
                <p className="text-sm">Abstract Painting</p>
                <p className="text-xs">245 likes - 35 Shares</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1672138087164-136de70cabe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="w-60 "
          ></img>
          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
            <div className="flex justify-between w-full">
              <div className="font-normal">
                <p className="text-sm">Abstract Painting</p>
                <p className="text-xs">245 likes - 35 Shares</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group ">
          <img
            src="https://images.unsplash.com/photo-1672138087164-136de70cabe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="w-60 "
          ></img>
          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
            <div className="flex justify-between w-full">
              <div className="font-normal">
                <p className="text-sm">Abstract Painting</p>
                <p className="text-xs">245 likes - 35 Shares</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1672138087164-136de70cabe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="w-60 "
          ></img>
          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
            <div className="flex justify-between w-full">
              <div className="font-normal">
                <p className="text-sm">Abstract Painting</p>
                <p className="text-xs">245 likes - 35 Shares</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1672138087164-136de70cabe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="w-60 "
          ></img>
          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
            <div className="flex justify-between w-full">
              <div className="font-normal">
                <p className="text-sm">Abstract Painting</p>
                <p className="text-xs">245 likes - 35 Shares</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1672138087164-136de70cabe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="w-60 "
          ></img>
          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
            <div className="flex justify-between w-full">
              <div className="font-normal">
                <p className="text-sm">Abstract Painting</p>
                <p className="text-xs">245 likes - 35 Shares</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1672138087164-136de70cabe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="w-60 "
          ></img>
          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
            <div className="flex justify-between w-full">
              <div className="font-normal">
                <p className="text-sm">Abstract Painting</p>
                <p className="text-xs">245 likes - 35 Shares</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
