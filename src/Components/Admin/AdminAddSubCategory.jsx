import React from "react";

const AdminAddSubCategory = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Page Title */}
      <h2 className="text-xl font-semibold text-gray-900 pb-4">
        Add New Subcategory
      </h2>

      {/* Subcategory Input & Parent Category Select */}
      <div className="flex flex-col gap-3 sm:w-8/12">
        <input
          type="text"
          placeholder="Subcategory Name"
          className="px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-black/70"
        />

        <select
          name="parentCategory"
          className="px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-black/70"
        >
          <option value="val">Category 1</option>
          <option value="val2">Category 2</option>
          <option value="val3">Category 3</option>
          <option value="val4">Category 4</option>
        </select>
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

export default AdminAddSubCategory;
