import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaHeart } from "react-icons/fa";

const ProductCardComponent = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "tyre shine (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 160,
      MRP: 1499,
      discount: "54% OFF",
    },
    {
      id: 1,
      name: "Effortless One Step Rubbing Compound - 500 GM",
      image: "/images/featured_product/tyre_shine.webp",
      price: 160,
      MRP: 1499,
      discount: "54% OFF",
    },
    {
      id: 1,
      name: "tyre shine (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 160,
      MRP: 1499,
      discount: "54% OFF",
    },
    {
      id: 1,
      name: "tyre shine (5 LTR)",
      image: "./images/featured_product/tyre_shine.webp",
      price: 160,
      MRP: 1499,
      discount: "54% OFF",
    },
    {
      id: 1,
      name: "tyre shine (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 160,
      MRP: 1499,
      discount: "54% OFF",
    },
    {
      id: 1,
      name: "tyre shine (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 160,
      MRP: 1499,
      discount: "54% OFF",
    },
    {
      id: 1,
      name: "tyre shine (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 160,
      MRP: 1499,
      discount: "54% OFF",
    },
    {
      id: 1,
      name: "tyre shine (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 160,
      MRP: 1499,
      discount: "54% OFF",
    },
    {
      id: 1,
      name: "tyre shine (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 160,
      MRP: 1499,
      discount: "54% OFF",
    },
    {
      id: 1,
      name: "tyre shine (5 LTR)",
      image: "/images/featured_product/tyre_shine.webp",
      price: 160,
      MRP: 1499,
      discount: "54% OFF",
    },
  ];

  return (
    <>
      {featuredProducts.map((product) => (
          <div onClick={() => window.open(`/product/${product.name}`, '_blank')} className="w-62 shrink-0 h-37 rounded-2xl bg-white flex flex-wrap  shadow-md shadow-gray-300 p-2">
            <div className="w-full h-[20%] flex justify-between items-center">
              <FaHeart className="text-2xl" />
              <p className=" bg-blue-800 w-25 text-sm rounded-2xl text-center text-white font-bebas">
                {product.discount}
              </p>
            </div>
            <div className="w-full h-[80%] flex justify-between items-center gap-2">
              <div className="w-[30%]">
                <img src={product.image} alt="" srcset="" className="" />
              </div>
              <div className="w-[70%]">
                <p className="font-bebas">{product.name.toUpperCase()}</p>
                <p className=" text-orange-500 font-sans">
                  Rs {product.price}{" "}
                  <span className=" line-through text-gray-400">
                    {" "}
                    MRP Rs {product.MRP}{" "}
                  </span>
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    alert("Add to cart");
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
