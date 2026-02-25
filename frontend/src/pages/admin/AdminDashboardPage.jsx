import React, { useState } from "react";
import { MdOutlineDashboard, MdInventory, MdOutlinePeople, MdOutlineShoppingCart, MdAutoMode } from "react-icons/md";
import UserManagementComponent from "../../components/admin/UserManagementComponent";
import ProductManagementComponent from "../../components/admin/ProductManagementComponent";
import OrderManagementComponent from "../../components/admin/OrderManagementComponent";
import SliderManagementComponent from "../../components/admin/SliderManagementComponent";

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Function to render component based on active tab
  const renderComponent = () => {
    switch (activeTab) {
      case "dashboard":
        return <UserManagementComponent />;
      case "products":
        return <ProductManagementComponent />;
      case "users":
        return <UserManagementComponent />;
      case "orders":
        return <OrderManagementComponent />;
      case "slider":
        return <SliderManagementComponent />;
      default:
        return <UserManagementComponent />;
    }
  };
  return (
    <>
      <div className="flex ">
        {/* Sidebar Navigation */}
        <aside className="w-64 h-screen bg-orange-600 border-slate-200  hidden lg:flex flex-col">
          <div className="p-6 flex items-center gap-3">
            <div className="bg-primary w-10 h-10 rounded-lg flex items-center justify-center text-white">
              <span className="material-icons-outlined"><MdAutoMode/></span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              AutoParts Pro
            </span>
          </div>
          <nav className="flex-1 px-4 space-y-1 mt-4 ">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                activeTab === "dashboard"
                  ? "bg-slate-900 text-slate-200"
                  : "hover:bg-slate-900 hover:text-slate-200 text-slate-900 dark:text-white"
              }`}
            >
              <span className="text-xl">
                <MdOutlineDashboard />
              </span>
              <span className="font-medium text-sm">Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab("products")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                activeTab === "products"
                  ? "bg-slate-900 text-slate-200"
                  : "hover:bg-slate-900 hover:text-slate-200 text-slate-900 dark:text-white"
              }`}
            >
              <span className="text-xl">
                <MdInventory />
              </span>
              <span className="font-medium text-sm">Products</span>
            </button>
            <button
              onClick={() => setActiveTab("users")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                activeTab === "users"
                  ? "bg-slate-900 text-slate-200"
                  : "hover:bg-slate-900 hover:text-slate-200 text-slate-900 dark:text-white"
              }`}
            >
              <span className="text-xl">
                <MdOutlinePeople />
              </span>
              <span className="font-medium text-sm">User Management</span>
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                activeTab === "orders"
                  ? "bg-slate-900 text-slate-200"
                  : "hover:bg-slate-900 hover:text-slate-200 text-slate-900 dark:text-white"
              }`}
            >
              <span className="text-xl">
                <MdOutlineShoppingCart />
              </span>
              <span className="font-medium text-sm">Orders</span>
            </button>
            <button
              onClick={() => setActiveTab("slider")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                activeTab === "slider"
                  ? "bg-slate-900 text-slate-200"
                  : "hover:bg-slate-900 hover:text-slate-200 text-slate-900 dark:text-white"
              }`}
            >
              <span className="text-xl">
                <MdOutlineDashboard />
              </span>
              <span className="font-medium text-sm">Slider</span>
            </button>
          </nav>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 px-3 py-2">
              <img
                alt="Admin"
                className="w-8 h-8 rounded-full border border-slate-200"
                data-alt="Admin user profile picture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjdvIleeuteqYnJ-FdJDX0cIk17aV9vG6GLlmc5vzUTmFPnJLeSCR1Srwi7KeBU2Zge7ZLAAPhaqfFGsTynf1C4y5r9FdWRtP6Ov-WqSRwWOLLxtOxqd88ao_zHFeB3nBxZnakkzoAZNQ8bDsv59aoPjfGExwGVKahiOEGoOWQ1qKzLj4AeoMHYEpYtuUADClD-xzRY6YPbhA2RbYOU_XuIx0-DvDeeQaoxnwEJjAci9f6OHTNoYylfZPoPX22T6BtNsGBFT1VGlE1"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                  Marcus Thorne
                </p>
                <p className="text-[10px] text-slate-500 truncate">
                  Super Admin
                </p>
              </div>
            </div>
          </div>
        </aside>


        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-screen overflow-hidden">
          

          {renderComponent()}
          
        </main>
      </div>
    </>
  );
};

export default AdminDashboardPage;
