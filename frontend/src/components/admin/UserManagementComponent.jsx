import React from 'react'
import { MdNotificationsNone } from 'react-icons/md'
import { IoPersonAdd } from 'react-icons/io5'

const UserManagementComponent = () => {

    const users = [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com" ,
          role: "Customer",
          lastLogin: "2024-06-15 14:32",
          status: "Active"
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane.smith@example.com",
          role: "Vendor",
          lastLogin: "2024-06-14 10:15",
          status: "Active"
        },
        {
          id: 3,
          name: "Robert Johnson",
          email: "robert.johnson@example.com",
          role: "Admin",
          lastLogin: "2024-06-13 09:45",
          status: "Inactive"
        }
      ];

  return (
    <>
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden font-barlow">
      <header className="h-16 bg-white  border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
        <h1 className="text-lg font-semibold text-orange-600 ">
          User Management
        </h1>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:bg-slate-100 hover:text-black rounded-full">
            <span className="material-icons-outlined"><MdNotificationsNone/></span>
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
            <span className="material-icons-outlined text-lg">
              <IoPersonAdd />
            </span>
            Add New User
          </button>
        </div>
      </header>
      <div className="flex-1 overflow-auto p-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-400 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">
                  Total Users
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    12,482
                  </span>
                  <span className="text-emerald-500 text-xs font-medium mb-1">
                    +4.2%
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">
                  Active Now
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    842
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mb-2" />
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">
                  Vendors
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    156
                  </span>
                  <span className="text-slate-400 text-xs font-medium mb-1">
                    Stable
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">
                  Suspended
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    14
                  </span>
                  <span className="text-rose-500 text-xs font-medium mb-1">
                    -2.1%
                  </span>
                </div>
              </div>
            </div>
            {/* Filters and Table Container */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
              {/* Filters */}
              <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex-1 relative">
                  <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                    search
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50 text-slate-700 dark:text-slate-200"
                    placeholder="Search by name, email, or ID..."
                    type="text"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm py-2 px-3 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary/50">
                    <option>All Roles</option>
                    <option>Admin</option>
                    <option>Customer</option>
                    <option>Vendor</option>
                  </select>
                  <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm py-2 px-3 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary/50">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Suspended</option>
                  </select>
                  <button className="p-2 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">
                    <span className="material-icons-outlined">filter_list</span>
                  </button>
                </div>
              </div>
              {/* User Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        <input
                          className="rounded border-slate-300 text-primary focus:ring-primary"
                          type="checkbox"
                        />
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Last Login
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


                    {users.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                      <td className="px-6 py-4">
                        <input
                          className="rounded border-slate-300 text-primary focus:ring-primary"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            alt="User avatar"
                            className="w-10 h-10 rounded-full"
                            data-alt="Male customer profile picture"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwTjp9_9Ihsl-SuqWW2bj22ZDPFGDeeXsdjVXCV92oZdA50-dhTq3PrZpil4WFkf8WMcf-zvQgpQIcAlPzG5BnoZFh4DM6C83Ykhdf5u58JrIJGEbzQnf1nFTsKRxCVNH0eIeTdF-pDonTi9uoFM0KZufUSITjQE-dVZi5cJGoJ3I9AfHjXaC_avAAjD_xr6DDGRCA6eDXjMz68GgwnG8SklgX2n6-M3nAg_vnVQW0K06JR_HVmXgsbTRhpwPPlFtieNaQa7pt_yX_"
                          />
                          <div>
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">
                              Alex Johnson
                            </p>
                            <p className="text-xs text-slate-500">
                              alex.j@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                          Customer
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        2 hours ago
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-sm text-slate-700 dark:text-slate-300">
                            Active
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            className="p-1.5 text-slate-400 hover:text-primary transition-colors"
                            title="Edit Profile"
                          >
                            <span className="material-icons-outlined text-lg">
                              edit
                            </span>
                          </button>
                          <button
                            className="p-1.5 text-slate-400 hover:text-primary transition-colors"
                            title="View Orders"
                          >
                            <span className="material-icons-outlined text-lg">
                              visibility
                            </span>
                          </button>
                          <button
                            className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors"
                            title="Ban User"
                          >
                            <span className="material-icons-outlined text-lg">
                              block
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    ))}

                    

                  </tbody>
                </table>
              </div>
              {/* Pagination */}
              <div className="p-4 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Showing 1 to 10 of 12,482 users
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
                      1248
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

export default UserManagementComponent

