import React from "react";
import laptops from "../../assets/react.svg";

const DiscountSection = () => {
  return (
    <div className="bg-black/85 rounded-xl p-6 my-6 mx-4 flex flex-col md:flex-row items-center justify-evenly text-center md:text-left gap-4 md:gap-0">
      {/* Discount Text */}
      <div className="text-white text-lg md:text-2xl font-semibold">
        Up to 30% off on laptops
      </div>

      {/* Discount Image */}
      <div className="flex justify-center md:justify-end">
        <img
          src={laptops}
          alt="Laptops"
          className="w-48 md:w-64 object-contain"
        />
      </div>
    </div>
  );
};

export default DiscountSection;
