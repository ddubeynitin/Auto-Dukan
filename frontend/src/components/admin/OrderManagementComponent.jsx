import React from 'react'
import { MdNotificationsNone } from 'react-icons/md'

const OrderManagementComponent = () => {
  const orders = [
    {
      id: 1,
      orderNo: "ORD-2024-001",
      customer: "John Doe",
      email: "john.doe@example.com",
      amount: "$1,299.99",
      status: "Delivered",
      date: "2024-06-15"
    },
    {
      id: 2,
      orderNo: "ORD-2024-002",
      customer: "Jane Smith",
      email: "jane.smith@example.com",
      amount: "$845.50",
      status: "Pending",
      date: "2024-06-16"
    },
    {
      id: 3,
      orderNo: "ORD-2024-003",
      customer: "Robert Johnson",
      email: "robert.johnson@example.com",
      amount: "$2,150.00",
      status: "Processing",
      date: "2024-06-17"
    }
  ];

  return (
    <>
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
      <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 shrink-0">
        <h1 className="text-lg font-semibold text-slate-900 dark:text-white">
          Order Management
        </h1>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
            <span className="material-icons-outlined"><MdNotificationsNone/></span>
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
            <span className="material-icons-outlined text-lg">
              visibility
            </span>
            View Orders
          </button>
        </div>
      </header>
      <div className="flex-1 overflow-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">
              Total Orders
            </p>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                8,246
              </span>
              <span className="text-emerald-500 text-xs font-medium mb-1">
                All Time
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">
              Pending
            </p>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-amber-500">124</span>
              <span className="text-amber-500 text-xs font-medium mb-1">
                Awaiting
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">
              Delivered
            </p>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-emerald-500">7,542</span>
              <span className="text-emerald-500 text-xs font-medium mb-1">
                Completed
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">
              Revenue
            </p>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                $312,540
              </span>
              <span className="text-slate-400 text-xs font-medium mb-1">
                YTD
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex gap-3">
            <div className="flex-1 relative">
              <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50 text-slate-700 dark:text-slate-200"
                placeholder="Search by Order ID or Customer..."
                type="text"
              />
            </div>
            <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm py-2 px-3 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary/50">
              <option>All Status</option>
              <option>Pending</option>
              <option>Processing</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <span className="text-sm font-mono text-slate-600 dark:text-slate-400">{order.orderNo}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{order.customer}</p>
                        <p className="text-xs text-slate-500">{order.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">{order.amount}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-bold uppercase rounded-full ${
                        order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                        order.status === 'Pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                        order.status === 'Processing' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                        'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600 dark:text-slate-400">{order.date}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-icons-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-sm text-slate-500">
              Showing 1 to 10 of {orders.length} orders
            </span>
            <div className="flex items-center gap-2">
              <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-50" disabled="">
                <span className="material-icons-outlined text-lg">chevron_left</span>
              </button>
              <button className="w-10 h-10 rounded-lg bg-primary text-white text-sm font-medium">1</button>
              <button className="w-10 h-10 rounded-lg text-slate-600 dark:text-slate-400 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800">2</button>
              <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800">
                <span className="material-icons-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}

export default OrderManagementComponent