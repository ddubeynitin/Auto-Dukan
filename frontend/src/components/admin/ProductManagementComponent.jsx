import React, { useState } from 'react'
import { MdAddCircleOutline, MdFileDownload, MdNotificationsNone, MdSearch, MdSettings, MdTune } from 'react-icons/md'
import AddProducts from './product/AddProducts'

const ProductManagementComponent = () => {
  const [showAddProduct, setShowAddProduct] = useState(false)
  
  if (showAddProduct) {
    return <AddProducts onClose={() => setShowAddProduct(false)} />
  }
  return (
    <>
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden font-barlow">
      <header className="h-16 bg-white border-b border-slate-300 flex items-center justify-between px-8 shrink-0">
        <h1 className="text-lg font-semibold text-orange-600">
          Product Inventory
        </h1>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:bg-slate-100 hover:text-black rounded-full">
            <span className="material-icons-outlined"> <MdNotificationsNone/> </span>
          </button>
          <button onClick={() => setShowAddProduct(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
            <span className="material-icons-outlined text-lg">
              <MdAddCircleOutline/>
            </span>
            Add New Product
          </button>
        </div>
      </header>
      <div className="flex-1 overflow-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white  p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm  border-l-4 border-l-rose-500">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">
              Total Parts
            </p>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-blue-600">
                4,829
              </span>
              <span className="text-primary text-xs font-medium mb-1">
                Items
              </span>
            </div>
          </div>
          <div className="bg-white  p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm  border-l-4 border-l-rose-500">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">
              Low Stock
            </p>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-amber-500">24</span>
              <span className="text-slate-400 text-xs font-medium mb-1">
                Alerts
              </span>
            </div>
          </div>
          <div className="bg-white  p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm border-l-4 border-l-rose-500">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">
              Out of Stock
            </p>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-rose-500">12</span>
              <span className="text-rose-500 text-xs font-medium mb-1">
                Critical
              </span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm  border-l-4 border-l-rose-500">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">
              New Arrivals
            </p>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-emerald-500">186</span>
              <span className="text-emerald-500 text-xs font-medium mb-1">
                Last 30d
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white  rounded-xl border border-slate-200  shadow-sm flex flex-col">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex-1 min-w-[300px] relative">
                <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                  <MdSearch />
                </span>
                <input
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/50 text-slate-700 dark:text-slate-200"
                  placeholder="Search by Part Name, SKU, or Brand..."
                  type="text"
                />
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  <span className="material-icons-outlined text-lg"><MdTune /></span>
                  Advanced Filters
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  <span className="material-icons-outlined text-lg">
                    <MdFileDownload />
                  </span>
                  Export
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm py-2 px-3 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary/50">
                <option>All Categories</option>
                <option>Engine Parts</option>
                <option>Electrical</option>
                <option>Transmission</option>
                <option>Braking System</option>
                <option>Suspension</option>
              </select>
              <select className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm py-2 px-3 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary/50">
                <option>All Brands</option>
                <option>Bosch</option>
                <option>Denso</option>
                <option>Brembo</option>
                <option>Castrol</option>
              </select>
              <select className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm py-2 px-3 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary/50">
                <option>Price Range</option>
                <option>$0 - $100</option>
                <option>$100 - $500</option>
                <option>$500 - $2000</option>
                <option>$2000+</option>
              </select>
              <select className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm py-2 px-3 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary/50">
                <option>Stock Status</option>
                <option>In Stock</option>
                <option>Low Stock</option>
                <option>Out of Stock</option>
              </select>
            </div>
            <div className="flex items-center gap-4 bg-blue-500/20 p-3 rounded-lg border border-primary/10">
              <span className="text-xs font-bold text-blue-600 uppercase">
                Bulk Actions:
              </span>
              <div className="flex gap-2">
                <button className="text-xs font-semibold px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-600 dark:text-slate-400 hover:bg-slate-50">
                  Update Price
                </button>
                <button className="text-xs font-semibold px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-600 dark:text-slate-400 hover:bg-slate-50">
                  Change Category
                </button>
                <button className="text-xs font-semibold px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-rose-600 hover:bg-rose-50">
                  Delete Selected
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/100  border-b border-slate-200">
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    <input
                      className="rounded border-slate-300 text-primary focus:ring-primary"
                      type="checkbox"
                    />
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Part Name &amp; Brand
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    SKU
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                    Price
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-center">
                    Stock
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4">
                    <input
                      className="rounded border-slate-300 text-primary focus:ring-primary"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center">
                        <span className=" text-slate-400">
                          <MdSettings />
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">
                          Performance V8 Piston Set
                        </p>
                        <p className="text-xs text-slate-500">
                          Brand: TechCore
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-slate-500">
                    PIS-V8-0092
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400">
                      Engine
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white text-right">
                    $499.00
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      142
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        In Stock
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="relative inline-block text-left">
                      <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-icons-outlined">
                          more_vert
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4">
                    <input
                      className="rounded border-slate-300 text-primary focus:ring-primary"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center">
                        <span className="material-icons-outlined text-slate-400">
                          bolt
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">
                          High-Output Alternator
                        </p>
                        <p className="text-xs text-slate-500">
                          Brand: ElectroFlow
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-slate-500">
                    ALT-HO-4221
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                      Electrical
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white text-right">
                    $185.50
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-bold text-amber-600">8</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="text-sm text-amber-600 font-medium">
                        Low Stock
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                      <span className="material-icons-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group bg-rose-50/20 dark:bg-rose-900/10">
                  <td className="px-6 py-4">
                    <input
                      className="rounded border-slate-300 text-primary focus:ring-primary"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center">
                        <span className="material-icons-outlined text-slate-400">
                          settings
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">
                          7-Speed Dual Clutch Kit
                        </p>
                        <p className="text-xs text-slate-500">
                          Brand: ShiftMaster
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-slate-500">
                    TRN-DC-7001
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                      Transmission
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white text-right">
                    $1,299.99
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-bold text-rose-600">0</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span className="text-sm text-rose-600 font-medium">
                        Out of Stock
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                      <span className="material-icons-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4">
                    <input
                      className="rounded border-slate-300 text-primary focus:ring-primary"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center">
                        <span className="material-icons-outlined text-slate-400">
                          circle
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">
                          Carbon Ceramic Brake Pads
                        </p>
                        <p className="text-xs text-slate-500">
                          Brand: StopFast
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-slate-500">
                    BRK-CC-5520
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                      Braking
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white text-right">
                    $345.00
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      42
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        In Stock
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                      <span className="material-icons-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-sm text-slate-500">
              Showing 1 to 10 of 4,829 products
            </span>
            <div className="flex items-center gap-2">
              <button
                className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-50"
                disabled=""
              >
                <span className="material-icons-outlined text-lg">
                  chevron_left
                </span>
              </button>
              <div className="flex items-center">
                <button className="w-10 h-10 rounded-lg bg-primary text-white text-sm font-medium">
                  1
                </button>
                <button className="w-10 h-10 rounded-lg text-slate-600 dark:text-slate-400 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800">
                  2
                </button>
                <button className="w-10 h-10 rounded-lg text-slate-600 dark:text-slate-400 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800">
                  3
                </button>
                <span className="px-2 text-slate-400">...</span>
                <button className="w-10 h-10 rounded-lg text-slate-600 dark:text-slate-400 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800">
                  483
                </button>
              </div>
              <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800">
                <span className="material-icons-outlined text-lg">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </main>

    </>
  )
}

export default ProductManagementComponent