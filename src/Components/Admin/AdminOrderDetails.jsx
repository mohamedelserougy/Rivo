import React from "react";
import CartItem from "../Cart/CartItem";

const AdminOrderDetails
 = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Order Title */}
      <h2 className="text-xl font-semibold text-gray-900">Order Details #55</h2>

      {/* Cart Items */}
      <CartItem />
      <CartItem />
      <CartItem />

      {/* Customer Details */}
      <div className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Customer Details
        </h3>

        {/* Name */}
        <div className="flex gap-2 items-center">
          <span className="text-gray-700 font-medium">Name:</span>
          <span className="text-gray-400">Ahmed Abdalla</span>
        </div>

        {/* Phone */}
        <div className="flex gap-2 items-center">
          <span className="text-gray-700 font-medium">Phone:</span>
          <span className="text-gray-400">0021313432423</span>
        </div>

        {/* Email */}
        <div className="flex gap-2 items-center">
          <span className="text-gray-700 font-medium">Email:</span>
          <span className="text-gray-400">ahmed@gmail.com</span>
        </div>

        {/* Total */}
        <div className="border px-4 py-2 text-center font-semibold text-gray-800">
          Total: 4000 EGP
        </div>

        {/* Status Selector */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-2">
          <select
            name="orderStatus"
            className="px-3 py-1 border rounded text-center w-full sm:w-1/2"
          >
            <option value="pending">Order Status</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <button className=" px-4 py-1 rounded bg-black/90 text-white font-semibold hover:bg-black/70 transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetails
;
