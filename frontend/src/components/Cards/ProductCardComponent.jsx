import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaRegHeart } from "react-icons/fa";

const ProductCardComponent = ({ products = [], onAddToCart }) => {
  const navigate = useNavigate();

  return (
    <>
        {products.map((product, index) => (
          <div key={product.id + '-' + index} onClick={() => navigate(`/product/${product.slug}`)} className="w-59 shrink-0 h-37 rounded-2xl bg-white flex flex-wrap  shadow-md shadow-gray-300 p-2 cursor-pointer">
            <div className="w-full h-[20%] flex justify-between items-center">
              <FaRegHeart className="text-2xl" />
              <p className=" bg-blue-800 w-25 text-sm rounded-2xl text-center text-white font-bebas">
                {product.discountPercent}% OFF
              </p>
            </div>
            <div className="w-full h-[80%] flex justify-between items-center gap-2">
              <div className="w-[30%]">
                <img src={product.imageUrl} alt={product.name} className="" />
              </div>
              <div className="w-[70%]">
                <p className="font-bebas truncate" >{product.name.toUpperCase()}</p>
                <p className=" text-orange-500 font-sans">
                  Rs {product.price}{" "}
                  <span className=" line-through text-gray-400">
                    {" "}
                    MRP Rs {product.mrp}{" "}
                  </span>
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onAddToCart) onAddToCart(product.id);
                  }}
                  className="flex justify-center items-center font-bebas bg-orange-500 w-[80%]  text-sm  text-white rounded-sm shadow-md shadow-black gap-2"
                >
                  ADD TO CART <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
      ))}
    </>
  );
};

export default ProductCardComponent;
