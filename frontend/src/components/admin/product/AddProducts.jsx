import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { createProduct } from "../../../services/productService";

const initialForm = {
  name: "",
  imageUrl: "/images/featured_product/tyre_shine.webp",
  sku: "",
  brand: "",
  category: "",
  description: "",
  instruction: "",
  precaution: "",
  partNumber: "",
  type: "OES",
  mrp: "",
  price: "",
  stock: "",
  supplierCode: "0",
  featured: true,
};

const AddProducts = ({ onClose }) => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await createProduct({
        name: formData.name,
        imageUrl: formData.imageUrl,
        category: formData.category,
        brand: formData.brand,
        partNumber: formData.partNumber || formData.sku,
        type: formData.type,
        description: formData.description,
        instruction: formData.instruction,
        precaution: formData.precaution,
        price: Number(formData.price),
        mrp: Number(formData.mrp),
        stock: Number(formData.stock || 0),
        supplierCode: formData.supplierCode,
        featured: formData.featured,
      });
      alert("Product published successfully");
      onClose();
    } catch (error) {
      console.error("Failed to create product:", error);
      alert(error?.response?.data?.message || "Failed to publish product");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden font-barlow">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="text-slate-500 hover:text-primary transition-colors">
              <span className="text-black">
                <MdArrowBack />
              </span>
            </button>
            <h1 className="text-lg font-semibold ">Add New Auto Part</h1>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-500 hover:bg-slate-100 rounded-lg transition-colors">
              Cancel
            </button>
            <button
              onClick={onSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Publishing..." : "Publish Product"}
            </button>
          </div>
        </header>
        <div className="flex-1 overflow-auto bg-slate-50">
          <div className="max-w-5xl mx-auto p-8">
            <form className="space-y-8" onSubmit={onSubmit}>
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-200">
                  <h2 className="text-base font-bold text-slate-900">General Information</h2>
                  <p className="text-sm text-slate-500">Provide the basic details of the auto part.</p>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Product Name</label>
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                      placeholder="e.g. Brembo Front Brake Pad Set"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">SKU / Part Number</label>
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/50 outline-none"
                      placeholder="BP-10293-F"
                      type="text"
                      name="sku"
                      value={formData.sku}
                      onChange={onChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Brand</label>
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/50 outline-none"
                      placeholder="Brembo"
                      type="text"
                      name="brand"
                      value={formData.brand}
                      onChange={onChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/50 outline-none"
                      placeholder="Braking System"
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={onChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Type</label>
                    <select
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/50 outline-none"
                      name="type"
                      value={formData.type}
                      onChange={onChange}
                    >
                      <option value="OEM">OEM</option>
                      <option value="OES">OES</option>
                      <option value="Aftermarket">Aftermarket</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Image URL</label>
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/50 outline-none"
                      placeholder="/images/featured_product/tyre_shine.webp"
                      type="text"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/50 outline-none"
                      placeholder="Enter product description and key features..."
                      rows={4}
                      name="description"
                      value={formData.description}
                      onChange={onChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Instruction</label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/50 outline-none"
                      rows={3}
                      name="instruction"
                      value={formData.instruction}
                      onChange={onChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Precaution</label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/50 outline-none"
                      rows={3}
                      name="precaution"
                      value={formData.precaution}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-200">
                  <h2 className="text-base font-bold text-slate-900">Inventory &amp; Pricing</h2>
                  <p className="text-sm text-slate-500">Manage stock levels and sales prices.</p>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">MRP</label>
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/50 outline-none"
                      placeholder="1499"
                      type="number"
                      name="mrp"
                      value={formData.mrp}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Sale Price</label>
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/50 outline-none"
                      placeholder="675"
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Initial Stock</label>
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/50 outline-none"
                      placeholder="50"
                      type="number"
                      name="stock"
                      value={formData.stock}
                      onChange={onChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Supplier Code</label>
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/50 outline-none"
                      placeholder="0"
                      type="text"
                      name="supplierCode"
                      value={formData.supplierCode}
                      onChange={onChange}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                      <input type="checkbox" name="featured" checked={formData.featured} onChange={onChange} />
                      Mark as featured product
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 pt-6 pb-12">
                <button className="px-6 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" type="button" onClick={onClose}>
                  Discard Changes
                </button>
                <button
                  className="bg-blue-500 text-white px-8 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-600 shadow-md shadow-blue-500/20 transition-all"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Publishing..." : "Publish Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddProducts;
