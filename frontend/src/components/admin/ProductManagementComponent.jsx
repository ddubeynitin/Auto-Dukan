import React, { useEffect, useMemo, useState } from "react";
import { MdAddCircleOutline, MdNotificationsNone, MdSearch } from "react-icons/md";
import AddProducts from "./product/AddProducts";
import { getAdminProducts } from "../../services/productService";

const ProductManagementComponent = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const loadProducts = async () => {
    try {
      const data = await getAdminProducts();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch admin products:", error);
    }
  };

  useEffect(() => {
    let isMounted = true;
    getAdminProducts()
      .then((data) => {
        if (isMounted) setProducts(data);
      })
      .catch((error) => {
        console.error("Failed to fetch admin products:", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return products;
    const q = searchTerm.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(q) ||
        product.brand.toLowerCase().includes(q) ||
        (product.partNumber || "").toLowerCase().includes(q),
    );
  }, [products, searchTerm]);

  const lowStockCount = products.filter((product) => Number(product.stock) > 0 && Number(product.stock) < 10).length;
  const outOfStockCount = products.filter((product) => Number(product.stock) <= 0).length;

  if (showAddProduct) {
    return (
      <AddProducts
        onClose={() => {
          setShowAddProduct(false);
          loadProducts();
        }}
      />
    );
  }
  const inStockCount = products.filter((product) => Number(product.stock) > 0).length;

  return (
    <>
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden font-barlow">
        <header className="h-16 bg-white border-b border-slate-300 flex items-center justify-between px-8 shrink-0">
          <h1 className="text-lg font-semibold text-orange-600">Product Inventory</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 hover:text-black rounded-full">
              <span className="material-icons-outlined">
                <MdNotificationsNone />
              </span>
            </button>
            <button
              onClick={() => setShowAddProduct(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <span className="material-icons-outlined text-lg">
                <MdAddCircleOutline />
              </span>
              Add New Product
            </button>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white  p-5 rounded-xl border border-slate-200 shadow-sm  border-l-4 border-l-rose-500">
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">Total Parts</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-blue-600">{products.length}</span>
                <span className="text-primary text-xs font-medium mb-1">Items</span>
              </div>
            </div>
            <div className="bg-white  p-5 rounded-xl border border-slate-200 shadow-sm  border-l-4 border-l-rose-500">
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">In Stock</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-emerald-500">{inStockCount}</span>
                <span className="text-slate-400 text-xs font-medium mb-1">Active</span>
              </div>
            </div>
            <div className="bg-white  p-5 rounded-xl border border-slate-200 shadow-sm border-l-4 border-l-rose-500">
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">Low Stock</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-amber-500">{lowStockCount}</span>
                <span className="text-amber-500 text-xs font-medium mb-1">Alerts</span>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm  border-l-4 border-l-rose-500">
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">Out of Stock</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-rose-500">{outOfStockCount}</span>
                <span className="text-rose-500 text-xs font-medium mb-1">Critical</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <div className="p-6 border-b border-slate-200 flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex-1 min-w-[300px] relative">
                  <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                    <MdSearch />
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/50 text-slate-700"
                    placeholder="Search by Part Name, SKU, or Brand..."
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/100  border-b border-slate-200">
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Part Name &amp; Brand</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Part Number</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Price</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-center">Stock</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center overflow-hidden">
                            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{product.name}</p>
                            <p className="text-xs text-slate-500">Brand: {product.brand || "-"}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-slate-500">{product.partNumber || "-"}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-slate-100 text-slate-700">
                          {product.category || "general"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900 text-right">Rs {product.price}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-slate-600">{product.stock}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              Number(product.stock) <= 0
                                ? "bg-rose-500"
                                : Number(product.stock) < 10
                                  ? "bg-amber-500"
                                  : "bg-emerald-500"
                            }`}
                          />
                          <span className="text-sm text-slate-700">
                            {Number(product.stock) <= 0 ? "Out of Stock" : Number(product.stock) < 10 ? "Low Stock" : "In Stock"}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-sm text-slate-500">Showing {filteredProducts.length} products</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductManagementComponent;
