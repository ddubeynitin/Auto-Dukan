import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import FeaturedProductComponent from "../components/FeaturedProductComponent";
import PromotionImageComponent from "../components/PromotionImageComponent";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../assets/style/ProductDetailsPage.css";
import { getProductBySlug } from "../services/productService";
import { addToCart } from "../services/cartService";

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [details, setDetails] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductBySlug(slug);
        setProduct(data);
        setDetails(data.description || "");
      } catch (error) {
        console.error("Failed to load product:", error);
      }
    };

    loadProduct();
  }, [slug]);

  const updateTab = (tabName) => {
    if (!product) return;
    setActiveTab(tabName);

    if (tabName === "description") setDetails(product.description || "");
    if (tabName === "instruction") setDetails(product.instruction || "");
    if (tabName === "precaution") setDetails(product.precaution || "");
  };

  const handleAddToCart = async () => {
    if (!product) return;
    try {
      await addToCart({ productId: product.id, quantity });
      alert("Item added to cart");
    } catch (error) {
      console.error("Failed to add item to cart:", error);
      alert("Could not add item to cart");
    }
  };

  if (!product) {
    return (
      <>
        <Header />
        <div className="w-full h-50 flex justify-center items-center font-barlow">Loading product...</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="w-full flex justify-center items-center ">
        <div className="w-[85%] border-b border-gray-300 h-10 font-barlow font-bold flex gap-3">
          <Link to={"/"}> Home</Link>
          {">"} <span className=" text-orange-500"> {product.name} </span>
        </div>
      </div>
      <div className="w-full flex justify-center ">
        <div className="w-[85%] h-150  flex gap-5">
          <div className="w-[50%]  h-140  flex flex-col justify-start items-center mt-5 ">
            <div className="w-full h-100  flex justify-center items-center rounded-lg shadow shadow-black">
              <img src={product.imageUrl} alt={product.name} className="h-full" />
            </div>
            <div className="w-full flex justify-start items-center gap-5 mt-5">
              <p className="font-bebas text-2xl ">CATEGORIES:</p> <h1>{product.category}</h1>
            </div>
          </div>
          <div className="w-[50%] h-140  flex flex-col justify-start items-start gap-5 mt-5">
            <div>
              <h1 className="text-2xl font-barlow font-bold">{product.name}</h1>
              <h3 className="font-barlow">Part Number : {product.partNumber || "-"}</h3>
              <h3 className="font-barlow">Type : {product.type || "-"}</h3>
              <h3 className="font-barlow">Brand : {product.brand || "-"}</h3>
            </div>
            <div className="flex gap-3">
              <h1 className="text-2xl text-orange-500 font-barlow font-bold">Rs {product.price.toFixed(2)}</h1>
              <h3 className="text-lg line-through text-gray-400">MRP Rs {product.mrp.toFixed(2)}</h3>
            </div>
            <div className="">
              <h2 className="font-barlow font-semibold">QTY:</h2>
              <div className="flex gap-3">
                <button
                  className="w-10 h-10 border border-gray-300 rounded-tl-md rounded-bl-lg rounded-tr-0 rounded-br-0"
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                >
                  -
                </button>
                <h1 className="w-15 h-10 font-barlow border border-gray-300 rounded-lg text-center p-2">{quantity}</h1>
                <button
                  className="w-10 h-10 border border-gray-300 rounded-tr-md rounded-br-lg rounded-tl-0 rounded-bl-0"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="w-full">
              <h2 className="font-barlow font-semibold">Discounted Price:</h2>
              <div className="w-[50%]">
                <table className="w-full font-barlow shadow shadow-gray-300 border-collapse border border-gray-400">
                  <tbody>
                    <tr>
                      <th className="border border-gray-300">Min</th>
                      <th className="border border-gray-300">Max</th>
                      <th className="border border-gray-300">Price</th>
                    </tr>
                    <tr>
                      <td className="border border-gray-300">1</td>
                      <td className="border border-gray-300">4</td>
                      <td className="border border-gray-300">{product.mrp.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300">5</td>
                      <td className="border border-gray-300">1000</td>
                      <td className="border border-gray-300">{product.price.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-5">
              <button
                className="w-[48%] h-10 rounded-md bg-orange-500 font-barlow text-white shadow hover:shadow-md transition shadow-black "
                onClick={handleAddToCart}
              >
                ADD TO CART
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
            <button className={activeTab === "description" ? "border-b-3 border-orange-500" : ""} onClick={() => updateTab("description")}>
              DESCRIPTION
            </button>
            <button className={activeTab === "instruction" ? "border-b-3 border-orange-500" : ""} onClick={() => updateTab("instruction")}>
              INSTRUCTION
            </button>
            <button className={activeTab === "precaution" ? "border-b-3 border-orange-500" : ""} onClick={() => updateTab("precaution")}>
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
