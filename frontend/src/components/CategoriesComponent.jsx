import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CategoriesComponent = () => {
  const categories = [
    {
      id: 1,
      name: "CAR care",
      image: "./images/categories/car_care.png",
    },
    {
      id: 2,
      name: "AIR CONDITIONING",
      image: "./images/categories/air_conditioning.png",
    },
    {
      id: 3,
      name: "BELT & CHAIN DRIVE",
      image: "./images/categories/belt_and_chain_drive.png",
    },
    {
      id: 4,
      name: "BODY parts",
      image: "./images/categories/body_parts.png",
    },
    {
      id: 5,
      name: "BRAKE SYSTEM",
      image: "./images/categories/brake_system.png",
    },
    {
      id: 6,
      name: "CAR ACCESSORIES",
      image: "./images/categories/car_accessories.png",
    },
  ];

  return (
    <div className="w-full lg:h-120 h-100 bg-gray-100">
      <div className="w-full lg:h-[30%] h-[20%] flex justify-around items-end ">
        <div className="w-[85%] h-[80%] flex justify-between items-end">
          <p className="lg:text-4xl text-2xl text-black font-bebas">
            SHOP BY CATEGORIES
          </p>
          <button className="h-10 w-30  flex justify-center items-center gap-2 text-white font-bebas rounded-lg bg-orange-500">
            View all <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="w-full h-[70%]  flex justify-center items-center gap-5 overflow-hidden">
        <div className="lg:w-[85%] h-[80%] flex flex-nowrap lg:justify-between justify-start items-center overflow-x-auto gap-5  pl-5 pr-5">
          {/* Categories Cards */}
          {categories.map((Category) => (
            <div
              key={Category.id}
              className="w-50 shrink-0 p-10  border lg:w-45 h-45 rounded-2xl flex flex-col justify-center items-center border-gray-300 bg-white overflow-hidden shadow-sm  shadow-gray-400"
            >
              <div className="w-full h-[80%] flex justify-center items-center p-2">
                <img src={Category.image} className="w-full" />
              </div>
              <div className="w-full h-10  text-center">
                <p className="text-lg font-bebas p-2">
                  {Category.name.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesComponent;
