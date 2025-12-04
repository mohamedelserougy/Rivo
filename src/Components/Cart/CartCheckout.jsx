import React from "react";
import { Link } from "react-router-dom";

const CartCheckout = () => {
  return (
    <div className="flex justify-center mt-4 sticky top-15   ">
      <div className="w-full max-w-md bg-gray-900 text-white p-5 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
        {/* Coupon input */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Discount Code"
            className="
              flex-1 text-center p-2 rounded-lg
              bg-gray-800 border border-gray-600 text-white
              focus:outline-none focus:ring-2 focus:ring-yellow-400
            "
          />

          <button
            className="
              bg-yellow-400 text-gray-900 font-medium px-4 rounded-lg
              hover:bg-yellow-500 active:scale-95 transition
            "
          >
            Apply
          </button>
        </div>

        {/* Price */}
        <div
          className="
            w-full text-center py-3 mt-4 border border-gray-600 
            text-lg font-semibold rounded-lg
          "
        >
          34,000 EGP
        </div>

        {/* Checkout Button */}
        <Link to="/order/paymethod">
          <button
            className="
              w-full mt-3 bg-black text-white py-3 rounded-full font-medium
              shadow-md hover:bg-gray-800 hover:scale-105 active:scale-95 
              transition-all duration-300
            "
          >
            Complete Purchase
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartCheckout;
