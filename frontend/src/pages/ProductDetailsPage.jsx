import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import FeaturedProductComponent from "../components/FeaturedProductComponent";
import PromotionImageComponent from "../components/PromotionImageComponent";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../assets/style/ProductDetailsPage.css";

const ProductDetailsPage = () => {
  const { product_name } = useParams();
  const [details, setDetails] = useState(
    "WASH4SURE Tyre Sine is a tyre dressing with High Gloss and excellent durability. It can be used to protect and dress all tyres, exterior vinyl, leather or rubber parts whenever high gloss is desired. 1 High Gloss and excellent durability 2 Used to protect and dress all tyres, exterior vinyl, leather or rubber parts. 3 Provides high gloss finish",
  );
  const [activeTab, setActiveTab] = useState("description");

  return (
    <>
      <Header />
      <div className="w-full flex justify-center items-center ">
        <div className="w-[85%] border-b border-gray-300 h-10 font-barlow font-bold flex gap-3">
          <Link to={"/"}> Home</Link>
          {">"}{" "}
          <span className=" text-orange-500"> {product_name} </span>
        </div>
      </div>
      <div className="w-full flex justify-center ">
        <div className="w-[85%] h-150  flex gap-5">
          <div className="w-[50%]  h-140  flex flex-col justify-start items-center mt-5 ">
            <div className="w-full h-100  flex justify-center items-center rounded-lg shadow shadow-black">
              <img
                src="/images/featured_product/tyre_shine.webp"
                alt=""
                className="h-full"
              />
            </div>
            <div className="w-full flex justify-start items-center gap-5 mt-5">
              <p className="font-bebas text-2xl ">CATEGORIES:</p>{" "}
              <h1> Car accessories </h1>
            </div>
          </div>
          <div className="w-[50%] h-140  flex flex-col justify-start items-start gap-5 mt-5">
            <div>
              <h1 className="text-2xl font-barlow font-bold">
                { product_name }
              </h1>
              <h3 className="font-barlow">Part Number : AD1507</h3>
              <h3 className="font-barlow">Type : OES</h3>
              <h3 className="font-barlow">Brand : WASH4SURE</h3>
            </div>
            <div className="flex gap-3">
              <h1 className="text-2xl text-orange-500 font-barlow font-bold">
                ₹540.00
              </h1>{" "}
              <h3 className="text-lg line-through text-gray-400">
                MRP ₹1499.00
              </h3>
            </div>
            <div className="">
              <h2 className="font-barlow font-semibold">QTY:</h2>
              <div className="flex gap-3">
                <button className="w-10 h-10 border border-gray-300 rounded-tl-md rounded-bl-lg rounded-tr-0 rounded-br-0">
                  -
                </button>
                <h1 className="w-15 h-10 font-barlow border border-gray-300 rounded-lg text-center p-2">
                  {" "}
                  1{" "}
                </h1>
                <button className="w-10 h-10 border border-gray-300 rounded-tr-md rounded-br-lg rounded-tl-0 rounded-bl-0">
                  +
                </button>
              </div>
            </div>
            <div className="w-full">
              <h2 className="font-barlow font-semibold">Discounted Price:</h2>
              <div className="w-[50%]">
                <table className="w-full font-barlow shadow shadow-gray-300 border-collapse border border-gray-400">
                  <tr>
                    <th className="border border-gray-300">Min</th>
                    <th className="border border-gray-300">Max</th>
                    <th className="border border-gray-300">Price</th>
                  </tr>
                  <tr>
                    <td className="border border-gray-300">1</td>
                    <td className="border border-gray-300">4</td>
                    <td className="border border-gray-300">675.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300">5</td>
                    <td className="border border-gray-300">1000</td>
                    <td className="border border-gray-300">540.00</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-5">
              <button className="w-[48%] h-10 rounded-md bg-orange-500 font-barlow text-white shadow hover:shadow-md transition shadow-black ">
                ADD TO CART{" "}
              </button>
              <button className="w-[48%] h-10 rounded-md bg-blue-900 font-barlow text-white shadow hover:shadow-md transition shadow-black">
                BUY NOW
              </button>
              <button className="w-[48%] h-10 rounded-md  font-barlow shadow hover:shadow-md transition shadow-black">
                ADD TO WISHLIST
              </button>
              <button className="w-[48%] h-10 rounded-md font-barlow  shadow hover:shadow-md transition shadow-black">
                SHARE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center ">
        <div className="w-[85%] border-b border-gray-300 flex flex-col gap-3">
          <div className="flex gap-5 font-bebas text-2xl">
            <button
              className={
                activeTab === "description"
                  ? "border-b-3 border-orange-500"
                  : ""
              }
              onClick={() => {
                setActiveTab("description");
                setDetails(
                  "WASH4SURE Tyre Sine is a tyre dressing with High Gloss and excellent durability. It can be used to protect and dress all tyres, exterior vinyl, leather or rubber parts whenever high gloss is desired. 1 High Gloss and excellent durability 2 Used to protect and dress all tyres, exterior vinyl, leather or rubber parts. 3 Provides high gloss finish",
                );
              }}
            >
              DESCRIPTION
            </button>
            <button
              className={
                activeTab === "instruction"
                  ? "border-b-3 border-orange-500"
                  : ""
              }
              onClick={() => {
                setActiveTab("instruction");
                setDetails(
                  "Safe and ideal for cleaning, polishing & to get gloss finish for all tyre surface. Apply a small quantity to the surface with dry cloth. Dry and buff with Sponge to get black darker look. Designed to resist fingerprints and smearing and long-lasting protection after use.",
                );
              }}
            >
              INSTRUCTION
            </button>
            <button
              className={
                activeTab === "precaution" ? "border-b-3 border-orange-500" : ""
              }
              onClick={() => {
                setActiveTab("precaution");
                setDetails("Use on dry surface. Store in dark, cool place");
              }}
            >
              PRECAUTIONS
            </button>
          </div>
          <div className="border-t border-gray-300 pt-5 pb-5">
            <p>{details}</p>
          </div>
        </div>
      </div>
      <FeaturedProductComponent />
      <PromotionImageComponent />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
