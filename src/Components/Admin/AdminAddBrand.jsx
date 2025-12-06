import React from "react";
import avatar from "../../assets/react.svg";

const AdminAddBrand = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Page Title */}
      <h2 className="text-xl font-semibold text-gray-900 pb-4">
        Add New Brand
      </h2>

      {/* Brand Image and Input */}
      <div className="flex flex-col gap-3 sm:w-8/12">
        <label className="text-gray-700 font-medium">Brand Image</label>
        <img
          src={avatar}
          alt="Brand"
          className="w-[120px] h-[100px] object-cover rounded"
        />
        <input
          type="text"
          placeholder="Brand Name"
          className="mt-3 px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-black/70"
        />
      </div>

      {/* Save Button */}
      <div className="sm:w-8/12 flex justify-end">
        <button className="px-4 py-1 rounded bg-black/90 text-white font-semibold hover:bg-black/70 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AdminAddBrand;
