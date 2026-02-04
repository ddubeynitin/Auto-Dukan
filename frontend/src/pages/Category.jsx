import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Category = () => {
  const category = [
    {
      id: 1,
      name: "CAR care",
      image: "./images/categories/car_care.png",
    },
    {
      id: 2,
      name: "air conditioning",
      image: "./images/categories/air_conditioning.png",
    },
    {
      id: 3,
      name: "belt & chain drive",
      image: "./images/categories/belt_and_chain_drive.png",
    },
    {
      id: 3,
      name: "body parts",
      image: "./images/categories/body_parts.png",
    },
    {
      id: 4,
      name: "brake system",
      image: "./images/categories/brake_system.png",
    },
    {
      id: 5,
      name: "CAR accessories",
      image: "./images/categories/car_accessories.png",
    },
  ];

  return (
    <>
      <Header />
      <div>
        
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[85%] border-b border-gray-300 pb-2">
          <div className="flex gap-3 justify- items-center">
            <div className="w-6 h-6 border-2 border-blue-800 rounded-full flex justify-center items-center">
              <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
            </div>
            {/* <input type="radio" name="" id="" disabled={true} className='border border-amber-400 bg-amber-400'/> */}
            <span className="font-barlow font-bold text-lg">SHOP BY</span>{" "}
            <span className="text-lg font-barlow"> CATEGORY </span>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center items-start pt-5">
        <div className="w-[85%] h-auto grid grid-cols-4 gap-4">
          {category.map((Category) => (
            <div
              key={Category.id}
              className="w-50 shrink-0 p-5 transition duration-500 ease-in-out hover:scale-108 hover:shadow-md hover:shadow-orange-500 lg:w-75 h-50 flex flex-col justify-center items-center border-gray-300 bg-white overflow-hidden shadow-sm  shadow-gray-400"
            >
              <div className="w-full h-[80%] flex justify-center items-center p-2 overflow-hidden">
                <img src={Category.image} className="w-full h-full object-contain" />
              </div>
                <p className="text-lg font-bebas p-2">
                  {Category.name.toUpperCase()}
                </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
