import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../services/productService";
import { addToCart } from "../services/cartService";

const FeaturedProductPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    loadProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      await addToCart({ productId, quantity: 1 });
      alert("Item added to cart");
    } catch (error) {
      console.error("Failed to add item to cart:", error);
      alert("Could not add item to cart");
    }
  };

  return (
    <>
      <Header />
      <div className="h-auto">
        <div className="w-full flex justify-center items-center">
          <div className="w-[85%] border-b pb-2">
            <div className="flex gap-3 justify- items-center">
              <div className="w-6 h-6 border-2 border-blue-800 rounded-full flex justify-center items-center">
                <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
              </div>
              <span className="font-barlow font-bold text-2xl">SHOP BY</span>
              <span className="text-2xl"> FEATURED PRODUCTS </span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-start pt-5">
          <div className="w-[85%] h-auto grid grid-cols-4 gap-5">
            {products.map((product, index) => (
              <div
                key={product._id || product.id || `${product.slug}-${index}`}
                className="w-75 h-80 border pb-5 border-gray-300 flex flex-col justify-center items-center gap-1 p-2 relative rounded-sm overflow-hidden cursor-pointer"
                onClick={() => navigate(`/product/${product.slug}`)}
              >
                <FaHeart className="absolute top-2 right-2 text-2xl" />
                <div className="absolute top-0 left-0 bg-blue-900 text-white p-2 font-barlow text-[10px]">
                  {product.discountPercent}% OFF
                </div>
                <div className="w-full h-50 flex justify-center items-center">
                  <img src={product.imageUrl} alt={product.name} className="w-[75%] h-full bg-blend-darken" />
                </div>
                <h1 className="font-barlow font-bold">{product.name.toUpperCase()}</h1>
                <h1 className="font-barlow font-bold text-orange-500">
                  Rs {product.price}
                  <span className="font-normal text-gray-300 line-through"> MRP Rs {product.mrp}.00</span>
                </h1>
                <button
                  className="w-full h-8 bg-orange-500 text-white font-barlow shadow shadow-black"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleAddToCart(product._id || product.id);
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default FeaturedProductPage;
