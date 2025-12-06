import React from "react";
import { Link } from "react-router-dom";
import mobile from "../../assets/react.svg";

const AdminAllOrdersItem = () => {
  return (
    <Link
      to="/admin/allorders/23"
      className="
        flex flex-col sm:flex-row
        bg-white rounded-xl shadow-md
        overflow-hidden
        transition-transform duration-300
        hover:scale-105
        w-full
      "
    >
      {/* Product Image */}
      <img
        src={mobile}
        alt="Product"
        className="w-full sm:w-40 h-[197px] object-cover"
      />

      {/* Order Details */}
      <div className="flex-1 p-4 flex flex-col justify-between gap-3">
        {/* Order Number & Remove */}
        <div className="flex justify-between items-center">
          <div className="text-gray-800 font-medium">Order #2321</div>
          <button className="text-red-500 font-medium hover:underline cursor-pointer">
            Remove
          </button>
        </div>

        {/* Product Title & Rating */}
        <div className="flex justify-between items-start">
          <div className="text-gray-700 text-sm md:text-base">
            iPhone XR 128GB 4G LTE with FaceTime App - Red
          </div>
          <div className="text-yellow-500 font-medium ml-2">4.5</div>
        </div>

        {/* Brand & Color */}
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Brand:</span>
          <span className="font-semibold text-gray-800">Apple</span>
          <span
            className="w-5 h-5 rounded-full border"
            style={{ backgroundColor: "#E52C2C" }}
          ></span>
        </div>

        {/* Quantity & Price */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Quantity</span>
            <input
              type="number"
              className="w-12 h-6 border rounded px-1"
              defaultValue={1}
            />
          </div>
          <div className="font-semibold text-gray-800">3000 EGP</div>
        </div>
      </div>
    </Link>
  );
};

export default AdminAllOrdersItem;
