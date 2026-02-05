import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const SubCategoryPage = () => {
  const { category_name } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category_name || "");

  //   // List of available categories
  const categories = [
    "car care",
    "air conditioning",
    "belt & chain drive",
    "body parts",
    "brake system",
    "car accessories",
    "car accessories",
    "car accessories",
    "car accessories",
    "car accessories",
    "car accessories",
    "car accessories",
    "car accessories",
    "car accessories",
    "car accessories",
  ];

  return (
    <>
      <Header />
      <div className="h-120">
        <div className="w-full flex justify-center items-center">
          <div className="w-[85%] border-b flex justify-between border-gray-300 pt-4 pb-4">
            <div className="flex  gap-3 justify-start items-center">
              <div className="w-6 h-6 border-2 border-blue-800 rounded-full flex justify-center items-center">
                <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
              </div>
              <span className="font-barlow font-bold text-lg">SHOP BY</span>{" "}
              <span className="text-lg font-barlow"> CATEGORIES </span>
            </div>
            <div>
              <Menu as="div" className="relative inline-block w-60 ">
                <MenuButton className="inline-flex w-full justify-between gap-x-1.5 font-barlow uppercase rounded-sm bg-white px-3 py-2 shadow-xs outline hover:outline-2 hover:outline-blue-500  data-[state=open]:bg-red-500">
                  {selectedCategory}
                  <ChevronDownIcon
                    aria-hidden="true"
                    className=" size-5 text-black"
                  />
                </MenuButton>

                <MenuItems
                  transition
                  className="menuItemScroll absolute right-0 z-10 mt-2 h-100 overflow-y-auto w-60 origin-top-right bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  style={
                    {
                      scrollbarWidth: "thin",
                      scrollbarColor: "#FF5E00 #eee", //orange thumb and white track
                      scrollbarGutter: "stable", //prevents layout shift when scrollbar appears
                      //hide icon for webkit browsers

                     }
                  }
                >
                  <div className="py-1">
                    {categories.map((category) => (
                      <MenuItem key={category}>
                        {() => (
                          <h1
                            onClick={() => setSelectedCategory(category)}
                            className="font-barlow uppercase px-4 py-2 text-sm text-black hover:bg-blue-500 hover:text-white cursor-pointer"
                          >
                            {category}
                          </h1>
                        )}
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-start pt-5">
          <div className="w-[85%] h-auto ">
            <h1 className="text-lg text-orange-500 font-barlow mb-5 ">
              {category_name.toUpperCase()}
            </h1>

            <div className="w-[85%] h-auto grid grid-cols-4 gap-4">
              <div className="w-50 shrink-0 p-5 transition duration-500 ease-in-out hover:scale-108 hover:shadow-md hover:shadow-orange-500 lg:w-75 h-50 flex flex-col justify-center items-center border-gray-300 bg-white overflow-hidden shadow-sm  shadow-gray-400">
                <div className="w-full h-[80%] flex justify-center items-center p-2 overflow-hidden">
                  <img
                    src="/images/categories/car_care.png"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-lg font-bebas p-2">CAR CARE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SubCategoryPage;
