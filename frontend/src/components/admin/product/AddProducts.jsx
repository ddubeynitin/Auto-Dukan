import React from 'react'
import { MdArrowBack } from 'react-icons/md'

const AddProducts = ({ onClose }) => {
  return (
    <>
    <main className="flex-1 flex flex-col min-w-0 overflow-hidden font-barlow">
      <header className="h-16 bg-whiteborder-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="text-slate-500 hover:text-primary transition-colors">
            <span className="text-black"> <MdArrowBack/> </span>
          </button>
          <h1 className="text-lg font-semibold ">
            Add New Auto Part
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            Cancel
          </button>
    
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
            Publish Product
          </button>
        </div>
      </header>
      <div className="flex-1 overflow-auto bg-slate-50 dark:bg-background-dark">
        <div className="max-w-5xl mx-auto p-8">
          <div className="mb-8 border-b border-slate-200 dark:border-slate-800">
            <nav className="flex gap-8">
              <button className="pb-4 text-sm font-semibold step-active">
                General Info
              </button>
              <button className="pb-4 text-sm font-semibold step-inactive">
                Specifications
              </button>
              <button className="pb-4 text-sm font-semibold step-inactive">
                Inventory &amp; Pricing
              </button>
              <button className="pb-4 text-sm font-semibold step-inactive">
                Images
              </button>
            </nav>
          </div>
          <form className="space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  General Information
                </h2>
                <p className="text-sm text-slate-500">
                  Provide the basic details of the auto part.
                </p>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Product Name
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    placeholder="e.g. Brembo Front Brake Pad Set"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    SKU
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary/50 outline-none"
                    placeholder="BP-10293-F"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Brand
                  </label>
                  <select className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary/50 outline-none">
                    <option>Select Brand</option>
                    <option>Brembo</option>
                    <option>Bosch</option>
                    <option>ACDelco</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Category
                  </label>
                  <select className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary/50 outline-none">
                    <option>Select Category</option>
                    <option>Braking System</option>
                    <option>Engine Parts</option>
                    <option>Suspension</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Description
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary/50 outline-none"
                    placeholder="Enter product description and key features..."
                    rows={4}
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  Specifications &amp; Compatibility
                </h2>
                <p className="text-sm text-slate-500">
                  Physical attributes and vehicle fitment data.
                </p>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Dimensions (LxWxH) cm
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary/50 outline-none"
                    placeholder="20 x 10 x 5"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Weight (kg)
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary/50 outline-none"
                    placeholder="1.45"
                    step="0.01"
                    type="number"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Compatibility (Car Model / Year)
                  </label>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        className="flex-1 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary/50 outline-none"
                        placeholder="BMW 3 Series (2015-2021)"
                        type="text"
                      />
                      <button
                        className="p-2 text-slate-400 hover:text-rose-500"
                        type="button"
                      >
                        <span className="material-icons-outlined">delete</span>
                      </button>
                    </div>
                    <button
                      className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                      type="button"
                    >
                      <span className="material-icons-outlined text-sm">
                        add
                      </span>
                      Add another model
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  Inventory &amp; Pricing
                </h2>
                <p className="text-sm text-slate-500">
                  Manage stock levels and sales prices.
                </p>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Base Price ($)
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary/50 outline-none"
                    placeholder="129.99"
                    type="number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Sale Price ($)
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary/50 outline-none"
                    placeholder="99.99"
                    type="number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Initial Stock
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary/50 outline-none"
                    placeholder={50}
                    type="number"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  Product Images
                </h2>
                <p className="text-sm text-slate-500">
                  Upload high-quality images of the part from different angles.
                </p>
              </div>
              <div className="p-6">
                <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-12 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-800/30 hover:border-primary transition-colors cursor-pointer group">
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors mb-4">
                    <span className="material-icons-outlined text-3xl">
                      cloud_upload
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-slate-500">
                    SVG, PNG, JPG or WEBP (max. 5MB)
                  </p>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-4 mt-6">
                  <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 relative group overflow-hidden">
                    <img
                      alt="Preview 1"
                      className="w-full h-full object-cover opacity-50"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwTjp9_9Ihsl-SuqWW2bj22ZDPFGDeeXsdjVXCV92oZdA50-dhTq3PrZpil4WFkf8WMcf-zvQgpQIcAlPzG5BnoZFh4DM6C83Ykhdf5u58JrIJGEbzQnf1nFTsKRxCVNH0eIeTdF-pDonTi9uoFM0KZufUSITjQE-dVZi5cJGoJ3I9AfHjXaC_avAAjD_xr6DDGRCA6eDXjMz68GgwnG8SklgX2n6-M3nAg_vnVQW0K06JR_HVmXgsbTRhpwPPlFtieNaQa7pt_yX_"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <button
                        className="p-1 text-white hover:text-rose-400"
                        type="button"
                      >
                        <span className="material-icons-outlined">delete</span>
                      </button>
                    </div>
                  </div>
                  <div className="aspect-square border border-dashed border-slate-300 dark:border-slate-700 rounded-lg flex items-center justify-center text-slate-400">
                    <span className="material-icons-outlined">add</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 pt-6 pb-12">
              <button
                className="px-6 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-white dark:hover:bg-slate-800 rounded-lg transition-colors"
                type="button"
              >
                Discard Changes
              </button>
              <button
                className="bg-blue-500 text-white px-8 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-600 shadow-md shadow-blue-500/20 transition-all"
                type="submit"
              >
                Publish Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
    </>
  )
}

export default AddProducts