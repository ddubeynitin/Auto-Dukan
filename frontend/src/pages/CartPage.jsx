import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { clearCart, fetchCart, removeCartItem, updateCartItem } from "../services/cartService";

const CartPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState({ items: [], total: 0 });

  useEffect(() => {
    let isMounted = true;
    fetchCart()
      .then((data) => {
        if (isMounted) setCart(data);
      })
      .catch((error) => {
        console.error("Failed to fetch cart:", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const updateQuantity = async (productId, quantity) => {
    try {
      const data = await updateCartItem({ productId, quantity });
      setCart(data);
    } catch (error) {
      console.error("Failed to update item:", error);
    }
  };

  const deleteItem = async (productId) => {
    try {
      const data = await removeCartItem(productId);
      setCart(data);
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  const clearAll = async () => {
    try {
      const data = await clearCart();
      setCart(data);
    } catch (error) {
      console.error("Failed to clear cart:", error);
    }
  };

  const items = cart.items || [];

  return (
    <>
      <Header />
      <div className="w-full h-auto">
        <div className="w-full flex justify-center items-center ">
          <div className="w-[85%] border-b border-gray-300  h-10 font-barlow font-semibold flex gap-3">
            <Link to={"/"}> Home</Link>
            {">"}
            <span className=" text-orange-500"> Cart </span>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center pt-5">
          <div className="w-[85%] flex flex-col lg:flex-row gap-6">
            <div className="flex-1 h-150 bg-white rounded-sm shadow-sm ">
              <div className="grid grid-cols-12 gap-2 p-2 font-bebas bg-red-100/50 text-lg  uppercase tracking-wider border-b">
                <div className="col-span-1">Product</div>
                <div className="col-span-4 px-4">Description</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-1 text-center">Price</div>
                <div className="col-span-2 text-center">Discount</div>
                <div className="col-span-1 text-center">Sub Total</div>
                <div className="col-span-1 text-center">Remove</div>
              </div>

              <div className="p-4">
                <h2 className=" font-bebas text-lg uppercase">Order Package # 1</h2>
              </div>

              {items.map((item) => (
                <div
                  key={item.productId}
                  className="grid grid-cols-12 gap-2 p-4 font-barlow items-center last:border-b last:border-gray-300"
                >
                  <div className="col-span-1">
                    <div className="border border-orange-400 rounded p-1">
                      <img src={item.imageUrl} alt={item.name} className="w-full h-auto object-contain" />
                    </div>
                  </div>
                  <div className="col-span-4 px-4">
                    <h3 className="text-sm font-semibold text-gray-800 truncate">{item.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Estimate Delivery: <span className="text-orange-500">08-02-2026</span>
                    </p>
                    <p className="text-xs text-gray-400">
                      Supplier Code: <span className="text-orange-500">{item.supplierCode}</span>
                    </p>
                  </div>

                  <div className="col-span-2 flex justify-center items-center gap-3">
                    <button
                      className="text-gray-400 hover:text-black"
                      onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                    >
                      <FaMinus />
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                      className="text-gray-400 hover:text-black"
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                    >
                      <FaPlus />
                    </button>
                  </div>

                  <div className="col-span-1 text-center text-sm font-bold">Rs {item.price}</div>
                  <div className="col-span-2 text-center">
                    <div className="text-sm font-bold text-orange-500">Rs {item.discount}</div>
                    <div className="text-[10px] text-gray-300 line-through">MRP Rs {item.mrp}</div>
                  </div>
                  <div className="col-span-1 text-center text-sm font-bold">Rs {item.subtotal}</div>
                  <div className="col-span-1 flex justify-center">
                    <button
                      className="text-gray-400 hover:text-red-500 border border-gray-300 p-1 rounded"
                      onClick={() => deleteItem(item.productId)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-80 h-fit">
              <div className="bg-white rounded-md shadow-md border border-gray-100 overflow-hidden">
                <div className="bg-red-100/50 p-2 border-b">
                  <h2 className="font-bebas  text-lg uppercase">Cart Total</h2>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-8 border-b pb-4 border-gray-200">
                    <span className="text-xl font-semibold font-barlow">Total:</span>
                    <span className="text-xl font-semibold font-barlow">Rs {cart.total || 0}</span>
                  </div>

                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded transition duration-200 uppercase text-sm mb-3">
                    Checkout
                  </button>

                  <button
                    onClick={() => {
                      clearAll();
                    }}
                    className="w-full bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 font-bold py-3 px-4 rounded transition duration-200 uppercase text-sm mb-3"
                  >
                    Clear Cart
                  </button>
                  <button
                    onClick={() => {
                      navigate("/featured-product");
                    }}
                    className="w-full bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 font-bold py-3 px-4 rounded transition duration-200 uppercase text-sm"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
