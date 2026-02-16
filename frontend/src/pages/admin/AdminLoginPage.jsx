import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    console.log("Admin Login Attempted:");

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admins/login",
        { email, password },
      );
      console.log("Admin Login Response:", response.data);
        if (response.data.success) {
            alert("Login successful!");
            // Navigate to admin dashboard or another page
            navigate("/admin/admin-dashboard");
        } else {
            alert("Login failed: " + response.data.message);
        }
    } catch (error) {
      console.error("Admin Login Error:", error);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
        <div>
          {/* //logo */}
          <div className="w-80 p-2 mb-6">
            <img src="/images/logo.png" alt="logo" className="w-full h-fit" />
          </div>
        </div>
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-barlow font-bold text-center">
            Admin Login
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button
              onClick={handleAdminLogin}
              className="w-full py-2 font-barlow font-medium text-lg bg-orange-600 text-white rounded hover:bg-orange-700 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLoginPage;
