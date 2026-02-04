import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaHeart } from "react-icons/fa";

const FeaturedProductPage = () => {

  const featuredProducts = [
    {
      id: 1,
      name: "TYRE SHINE (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 675,
      mrp: 1499,
      discount: 54,
    },
    {
      id: 1,
      name: "TYRE SHINE (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 675,
      mrp: 1499,
      discount: 54,
    },
    {
      id: 2,
      name: "TYRE SHINE (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 675,
      mrp: 1499,
      discount: 54,
    },
    {
      id: 3,
      name: "TYRE SHINE (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 675,
      mrp: 1499,
      discount: 54,
    },
    {
      id: 4,
      name: "TYRE SHINE (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 675,
      mrp: 1499,
      discount: 54,
    },
    {
      id: 4,
      name: "TYRE SHINE (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 675,
      mrp: 1499,
      discount: 54,
    },
    {
      id: 4,
      name: "TYRE SHINE (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 675,
      mrp: 1499,
      discount: 54,
    },
    {
      id: 4,
      name: "TYRE SHINE (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 675,
      mrp: 1499,
      discount: 54,
    },
    {
      id: 4,
      name: "TYRE SHINE (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 675,
      mrp: 1499,
      discount: 54,
    },
    {
      id: 4,
      name: "TYRE SHINE (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 675,
      mrp: 1499,
      discount: 54,
    },
    {
      id: 4,
      name: "TYRE SHINE (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 675,
      mrp: 1499,
      discount: 54,
    },
    {
      id: 4,
      name: "TYRE SHINE (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 675,
      mrp: 1499,
      discount: 54,
    },
    {
      id: 4,
      name: "TYRE SHINE (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 675,
      mrp: 1499,
      discount: 54,
    },
    {
      id: 4,
      name: "TYRE SHINE (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 675,
      mrp: 1499,
      discount: 54,
    },
    {
      id: 4,
      name: "TYRE SHINE (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 675,
      mrp: 1499,
      discount: 54,
    },
    {
      id: 4,
      name: "TYRE SHINE (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 675,
      mrp: 1499,
      discount: 54,
    },
    // Add more products as needed
  ];

  return (
    <>
      <Header />
      <div className="h-120">

      <div className="w-full flex justify-center items-center">
        <div className="w-[85%] border-b pb-2">
          <div className="flex gap-3 justify- items-center">
            <div className="w-6 h-6 border-2 border-blue-800 rounded-full flex justify-center items-center">
              <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
            </div>
            {/* <input type="radio" name="" id="" disabled={true} className='border border-amber-400 bg-amber-400'/> */}
            <span className="font-barlow font-bold text-2xl">SHOP BY</span> <span className="text-2xl"> FEATURED PRODUCTS </span>
          </div>
        </div>
      </div>
        <div className="w-[85%] h-auto grid grid-cols-4 gap-5">
      <div className="w-full h-auto flex justify-center items-start pt-5">

          {featuredProducts.map((product) => (
            <div className="w-75 h-80 border pb-5  border-gray-300 flex flex-col justify-center items-center gap-1 p-2 relative rounded-sm overflow-hidden">
            <FaHeart className="absolute top-2 right-2 text-2xl" />
            <div className="absolute  top-0 left-0 bg-blue-900 text-white p-2 font-barlow text-[10px]">
              {" "}
              {product.discount}% OFF{" "}
            </div>
            <div className="w-full h-50  flex justify-center items-center">
              <img
                src={product.image}
                alt=""
                className="w-[75%] h-full bg-blend-darken"
                />
            </div>
            <h1 className="font-barlow font-bold">{product.name}</h1>
            <h1 className="font-barlow font-bold text-orange-500">
              ₹{product.price}{" "}
              <span className="font-normal text-gray-300 line-through">
                MRP ₹{product.mrp}.00
              </span>
            </h1>
            <button className="w-full h-8 bg-orange-500 text-white font-barlow shadow shadow-black">
              ADD TO CART
            </button>
          </div>
          ))}

          
        </div>
      </div>
     </div>
      <Footer />
    </>
  );
};

export default FeaturedProductPage;
