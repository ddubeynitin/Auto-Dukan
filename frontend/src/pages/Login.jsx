import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { auth, googleProvider } from "../config/firebase";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const { uid, displayName, email, photoURL } = result.user;

      localStorage.setItem(
        "auto_dukan_user",
        JSON.stringify({ uid, displayName, email, photoURL })
      );

      navigate("/");
    } catch (error) {
      console.error("Google login failed:", error);
      alert("Google login failed. Please check your Firebase credentials in .env.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full h-120 flex justify-center items-center bg-gray-50">
        <div className="w-112.5 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 relative">
          <h1 className="w-full text-center font-bold text-2xl text-gray-800 mb-6">
            Sign in to Auto-Dukan
          </h1>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full h-12 transition-all rounded-lg hover:text-white text-orange-500 font-bold text-lg mt-6 shadow-md border border-orange-500 hover:bg-orange-600 disabled:opacity-70"
          >
            {isLoading ? "Signing in..." : <span className="flex items-center justify-center gap-2"> <img src="/google.png" alt="Google Icon" className="w-5 h-5" /> Login with Google</span> }
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
