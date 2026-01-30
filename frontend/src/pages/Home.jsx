import React from "react";
import { FaArrowRight, FaDollarSign, FaRocket } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import "../Home.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CategoriesComponent from "../components/CategoriesComponent";
import FeaturedProductComponent from "../components/FeaturedProductComponent";
import OurServicesComponent from "../components/OurServicesComponent";
import PromotionImageComponent from "../components/PromotionImageComponent";

const Home = () => {
  const brands = [
    { id: 1, image: "./images/brands/OEM/Maruti.png" },
    { id: 1, image: "./images/brands/OEM/Hyundai.png" },
    { id: 1, image: "./images/brands/OEM/SKODA.png" },
    { id: 1, image: "./images/brands/OEM/VW.png" },
    { id: 1, image: "./images/brands/OEM/HONDA.png" },
    { id: 1, image: "./images/brands/OEM/nissan.png" },
    { id: 1, image: "./images/brands/OEM/FORD.png" },
    { id: 1, image: "./images/brands/OEM/MAHINDRA.png" },
    { id: 1, image: "./images/brands/OEM/TOYOTA.png" },
    { id: 1, image: "./images/brands/OEM/Tata.png" },
  ];

  const AboutCardData = [
    {
      id: 1,
      name: "genuine parts",
      icon: "./icon-img/genuine_parts.png",
      content:
        "At AutoDukan, we recognize the paramount significance of quality and reliability in the realm of vehicle maintenance and enhancement.",
    },
    {
      id: 2,
      name: "maximum availability",
      icon: "./icon-img/maximum_availibility.png",
      content:
        "At Autodukan, we guarante maximum availability of products. Shop with confidence, we have everything you need, whenever you need it.",
    },
    {
      id: 3,
      name: "best retes",
      icon: "./icon-img/best_rates.png",
      content:
        "At Autodukan, we offer the best rates on all products. Enjoy unbeatable prices without compromising quality. Your satisfaction is our commitment.",
    },
    {
      id: 4,
      name: "on time delivery",
      icon: "./icon-img/on_time_delivery.png",
      content:
        "At Autodukan, we provide the fastest delivery. Receive your orders promptly, ensuring you get what you need when you need it.",
    },
  ];

  return (
    <>
      <Header />

      {/* Image Component */}
      <div className=" bg-[url(/images/img1.png)] w-full lg:h-130 h-35 bg-cover bg-center flex justify-start items-center"></div>

      {/* search vehicle component*/}
      <div className="lg:w-100 h-100 mx-5 bg-white rounded-2xl p-5 static lg:absolute top-45 left-20 right-0">
        <div className="text-center text-2xl font-barlow  font-bold">
          {" "}
          <span className="text-orange-500">SEARCH</span> BY VEHICLE
        </div>
        <div className="flex-wrap justify-center items-center grid grid-cols-2 gap-5 my-5">
          <select
            name="brand"
            id="brand"
            className="w-full h-10 px-3 py-2 appearance-none rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-200"
          >
            <option value="">Select Car Brand</option>
            <option value="maruti">MARUTI</option>
          </select>

          <select
            name="model"
            id="model"
            className="w-full h-10 px-3 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-200"
          >
            <option value="">Select Car Model</option>
            <option value="maruti">MARUTI</option>
          </select>

          <select
            name="year"
            id="year"
            className="w-full h-10 px-3 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-200"
          >
            <option value="">Select Year</option>
            <option value="2023">2023</option>
          </select>

          <select
            name="variant"
            id="variant"
            className="w-full h-10 px-3 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-200"
          >
            <option value="">Select Variant</option>
            <option value="petrol">Petrol</option>
          </select>

          <button className="w-full bg-orange-500 h-10 col-span-2 rounded-lg text-white font-barlow font-semibold shadow shadow-black">
            Search
          </button>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-100 rounded-2xl p-5">
          <h1 className="text-lg font-barlow font-bold">
            SEARCH BY NUMBER PLATE
          </h1>
          <div className="flex gap-3 justify-center items-center">
            <div className="w-44 h-8 border-3 border-gray-300 flex">
              <div className=" h-7.75 p-1.5">
                <img src="./images/ind.png" alt="" className="w-full h-full" />
              </div>
              <input
                type="text"
                placeholder="MH01XY0001"
                className="w-full h-7 border-0 focus:outline-0 font-barlow text-[22px] uppercase"
              />
            </div>
            <button className="text-white bg-orange-500 w-28 h-9.5 rounded-lg font-barlow">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Category Component */}
      <CategoriesComponent />

      {/* Featured product list */}
      <FeaturedProductComponent />

      {/* Our Services */}
      <OurServicesComponent />

      {/* Popular OEM brands */}
      <div className="w-full h-120 bg-white-200 overflow-hidden">
        <div className="w-full h-[25%] flex justify-around items-end ">
          <div className="w-[85%] h-[80%] flex justify-between items-center">
            <p className="text-4xl text-black font-bebas">POPULAR OEM BRANDS</p>
            <button className="h-10 w-30  flex justify-center items-center gap-2 text-white font-bebas rounded-lg bg-orange-500">
              View all <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="w-full h-[75%] flex justify-center items-start">
          <div className="w-[85%] h-[80%] lg:grid lg:grid-cols-5 lg:grid-rows-2 grid-cols-3 lg:gap-5">
            {/* Product Card */}
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="w-62 h-30 rounded-2xl bg-white flex justify-center items-center border-2 border-gray-300"
              >
                <div className="w-[40%] h-full flex justify-center items-center">
                  <img src={brand.image} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Popular OES brands */}
      <div className="w-full h-120 bg-white-200 overflow-hidden">
        <div className="w-full h-[25%] flex justify-around items-end ">
          <div className="w-[85%] h-[80%] flex justify-between items-center">
            <p className="text-4xl text-black font-bebas">POPULAR OES BRANDS</p>
            <button className="h-10 w-30  flex justify-center items-center gap-2 text-white font-bebas rounded-lg bg-orange-500">
              View all <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="w-full h-[75%] flex justify-center items-start">
          <div className="w-[85%] h-[80%] lg:grid lg:grid-cols-5 lg:grid-rows-2 grid-cols-3 lg:gap-5">
            {/* Product Card */}
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="w-62 h-30 rounded-2xl bg-white flex justify-center items-center border-2 border-gray-300"
              >
                <div className="w-[40%] h-full flex justify-center items-center">
                  <img src={brand.image} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="w-full lg:h-120 bg-white-200">
        <h1 className="w-full text-center p-5 lg:text-4xl text-2xl font-bebas">
          WHY CHOOSE US
        </h1>
        <div className="w-full h-full lg:flex justify-center items-start gap-5 p-5 ">
          {/*card  */}
          {AboutCardData.map((card_info) => (
            <div
              key={card_info.id}
              className="lg:w-77 w-full h-70 mt-3 bg-white rounded-xl overflow-hidden border border-gray-300"
            >
              <div className="w-full h-[50%]  p-4 flex justify-between ">
                <img src={card_info.icon} alt="" />
                <h2 className="text-6xl font-bebas text-gray-200">
                  {"0" + card_info.id}
                </h2>
              </div>
              <div className="w-full h-[50%]  p-4 leading-2">
                <h2 className="text-orange-500 text-xl font-bebas ">
                  {card_info.name.toUpperCase()}
                </h2>{" "}
                <br />
                <p className="leading-5 text-gray-500 text-sm font-barlow">
                  {card_info.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download image */}
      <PromotionImageComponent/>

      {/* Become a seller  */}
      <div className="w-full h-120 bg-linear-to-br from-orange-600 to-blue-800  overflow-hidden bg-red-400 flex justify-center items-center ">
        <div className="w-[80%] flex">
          <div className="lg:w-[50%] h-100  flex flex-col justify-center items-start lg:indent-5 gap-5">
            <h2 className="text-3xl text-white font-barlow font-bold">
              Become a Seller at AutoDukan
            </h2>
            <p className="text-white text-[10px] font-barlow font-bold">
              Join our growing marketplace and reach thousands of customers.
              Start your selling journey today!
            </p>
            <div className="flex flex-col gap-5 text-white">
              <span className="flex items-center gap-3 lg:indent-0">
                <div className="bg-gray-100/15 p-3 rounded-full lg:mx-5">
                  <FaDollarSign />
                </div>
                Earn more with competitive incentives <br />
              </span>
              <span className="flex items-center gap-3 lg:indent-0">
                <div className="bg-gray-100/15 p-3 rounded-full lg:mx-5">
                  <IoIosPeople />
                </div>
                Reach thousands of customers <br />
              </span>
              <span className="flex items-center gap-3 lg:indent-0">
                <div className="bg-gray-100/15 p-3 rounded-full lg:mx-5">
                  <FaRocket />
                </div>
                Easy to start selling
              </span>
            </div>
            <button className="flex items-center gap-4 bg-white p-4 rounded-4xl text-sm shadow shadow-black text-blue-700 lg:mx-5">
              START SELLING NOW <FaArrowRight />
            </button>
          </div>
          <div className="w-[50%] h-100  lg:flex justify-center items-center relative hidden">
            <div className=" w-[65%] h-100 rounded-2xl bg-white/8 backdrop-blur-2xl shadow shadow-gray-700 hover:rotate-3 transition">
              <img src="./images/auto_parts.png" alt="" />
            </div>
            <div className="bg-blue-800 text-white text-center font-barlow p-3 rounded-2xl absolute -bottom-5 right-20 ">
              <h1>
                <span className="font-bold">1000+</span> <br /> Active Sellers
              </h1>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
