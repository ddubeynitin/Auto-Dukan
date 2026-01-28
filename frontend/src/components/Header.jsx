import React from 'react'
import {
  FaCar,
  FaCartPlus,
  FaCrown,
  FaHeart,
  FaMapPin,
  FaMicrophone,
  FaSearch,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full lg:h-30 h-50">
        <div className="fixed bg-white flex justify-center items-center flex-col w-full z-50">
          <div className="lg:w-[70%] w-full flex justify-between items-center gap-4">
            <div className="w-full flex justify-center items-center">
              <p className="w-full flex lg:justify-start justify-center items-center text-sm pt-2 ">
                <FaMapPin className="text-orange-400" /> Surat &nbsp;{" "}
                <span className="text-orange-500 font-bold">Petrol:</span>{" "}
                &nbsp; Rs 0 &nbsp;{" "}
                <span className="text-orange-400 font-bold">Diesel:</span>{" "}
                &nbsp; Rs 0
              </p>
            </div>

            <div className="w-[20%] absolute lg:static top-10 right-5 flex justify-end items-center ">
              <div className=" flex h-8 justify-center items-center gap-5 pr-5">
                <FaHeart />
                <FaCartPlus />
                <FaCar />
              </div>
            </div>
          </div>

          <div className="w-full lg:flex justify-center items-center gap-4 p-2">
            <div className=" ">
              <img
                src="images/logo.png"
                alt="logo"
                className="lg:w-60  lg:h-15 h-12"
              />
            </div>
            <div className=" lg:flex justify-start items-center lg:w-[40%] w-full p-2">
              <div className="h-10 lg:w-[80%] w-full flex justify-center items-center rounded-full gap-2 bg-gray-100 overflow-hidden">
                <input
                  type="text"
                  className="p-2 w-full focus:outline-none"
                  placeholder="Search"
                />
                <FaMicrophone className="text-orange-500" />
                <div className="h-8 w-10 bg-orange-500 rounded-full flex justify-center items-center">
                  <FaSearch className=" text-white" />
                </div>
              </div>
            </div>
            <div className="flex lg:justify-center justify-between items-center  gap-4 p-2">
              <button className="w-30 h-8 flex justify-center items-center gap-2 border border-orange-500 p-2 rounded-lg">
                {" "}
                <FaCrown className="text-orange-500" /> Prime
              </button>
              <button className="w-30 h-8 border flex justify-center items-center border-orange-500 p-2 rounded-lg bg-orange-500 text-white">
                Log In
              </button>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header