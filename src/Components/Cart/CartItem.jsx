import React from "react";
import { Trash } from "lucide-react";
import image from "/src/assets/react.svg";

const CartItem = () => {
  return (
    <div className="flex gap-4 p-4 bg-white shadow rounded-xl my-3">
      {/* Product Image */}
      <img
        src={image}
        alt="product"
        className="w-40 h-48 object-cover rounded-xl"
      />

      {/* Content */}
      <div className="flex flex-col w-full">
        {/* Category + Delete */}
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-sm">Electronics</div>

          <button className="flex items-center gap-1 cursor-pointer text-red-500 hover:text-red-700">
            <Trash />
            <span className="text-sm font-medium">Remove</span>
          </button>
        </div>

        {/* Title + Rating */}
        <div className="flex items-start gap-2 mt-2">
          <div className="text-gray-800 font-semibold text-sm leading-5 w-[80%]">
            iPhone XR with 128GB Storage, 4G LTE support, and Face ID
          </div>
          <div className="text-yellow-500 font-bold">4.5</div>
        </div>

        {/* Brand */}
        <div className="mt-2">
          <span className="text-gray-500 text-sm">Brand:</span>
          <span className="text-gray-800 font-medium ml-1">Apple</span>
        </div>

        {/* Color */}
        <div className="flex mt-2">
          <div
            className="w-5 h-5 rounded-full border"
            style={{ backgroundColor: "#E52C2C" }}
          ></div>
        </div>

        {/* Quantity + Price */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center">
            <span className="text-gray-500 text-sm">Quantity:</span>
            <input
              type="number"
              className="w-12 h-7 ml-2 border rounded text-center"
            />
          </div>

          <div className="text-gray-900 text-lg font-semibold">3000 EGP</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
