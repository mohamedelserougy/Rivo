import React from "react";

const RateItem = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl shadow-lg mt-4 transition-transform duration-300 border border-gray-700">
      <div className="flex items-center justify-between mb-2">
        <p className="font-semibold text-lg">Ahmed Mahmoud</p>
        <span className="text-yellow-400 font-bold">★ 4.3</span>
      </div>

      <p className="text-gray-300 leading-6">
        A very good product for its price. Works great and includes an extra
        controller.
      </p>
    </div>
  );
};

export default RateItem;
