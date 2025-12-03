import React from "react";

const SideFilter = () => {
  return (
    <div className="mt-3 bg-gray-900 p-4 rounded-xl shadow-m">
      {/* Category Filter */}
      <div className="flex flex-col mb-6">
        <div className="text-white font-semibold mb-3">Category</div>
        {[
          "All",
          "Home Appliances",
          "Home Appliances",
          "Home Appliances",
          "Home Appliances",
        ].map((item, idx) => (
          <label key={idx} className="flex items-center mb-2 cursor-pointer">
            <input type="checkbox" className="accent-red-500 w-4 h-4" />
            <span className="text-gray-200 ml-2">{item}</span>
          </label>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="flex flex-col mb-6">
        <div className="text-white font-semibold mb-3">Brand</div>
        {["All", "Apple", "Samsung"].map((item, idx) => (
          <label key={idx} className="flex items-center mb-2 cursor-pointer">
            <input type="checkbox" className="accent-red-500 w-4 h-4" />
            <span className="text-gray-200 ml-2">{item}</span>
          </label>
        ))}
      </div>

      {/* Price Filter */}
      <div className="flex flex-col">
        <div className="text-white font-semibold mb-3">Price</div>
        <div className="flex items-center mb-2">
          <span className="text-gray-200">From:</span>
          <input
            type="number"
            className="bg-white  ml-2 w-28 h-7 text-center rounded-md "
          />
        </div>
        <div className="flex items-center">
          <span className="text-gray-200">To:</span>
          <input
            type="number"
            className="bg-white  ml-2 w-28 h-7 text-center rounded-md "
          />
        </div>
      </div>
    </div>
  );
};

export default SideFilter;
