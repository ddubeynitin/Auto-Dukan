import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ProductCardComponent from "./Cards/ProductCardComponent";
import { useNavigate } from "react-router-dom";

const FeaturedProductComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full lg:h-140 h-90 overflow-hidden">
      <div className="w-full h-[25%] flex justify-around items-end">
        <div className="w-[85%] h-[80%] flex justify-between items-center">
          <p className="lg:text-4xl text-2xl text-black font-bebas">
            FEATURED PRODUCT LIST
          </p>

          <button onClick={() => { navigate('/featured-product')}} className="h-10 w-30  flex justify-center items-center gap-2 text-white font-bebas rounded-lg bg-orange-500">
            View all <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="w-full lg:h-[75%] flex justify-center items-start overflow-hidden">
        <div className="lg:w-[85%] h-[80%] flex flex-nowrap lg:grid lg:grid-cols-5 lg:grid-rows-2 grid-cols-3 lg:gap-5 overflow-x-auto pl-5 pr-5 gap-5">
          {/* Product Card */}
          <ProductCardComponent/>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductComponent;
