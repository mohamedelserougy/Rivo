import React from "react";
import { CreditCard, Wallet } from "lucide-react";

const ChoosePayMethod = () => {
  return (
    <div className="mt-10">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Select Payment Method
      </h2>

      {/* Payment Options */}
      <div className="space-y-4">
        {/* Option 1 - Visa */}
        <label
          htmlFor="visa"
          className="
            flex items-center gap-4 p-4 border rounded-xl cursor-pointer 
            hover:border-black transition shadow-sm
          "
        >
          <input
            type="radio"
            id="visa"
            name="payment"
            value="visa"
            className="w-5 h-5 accent-black"
          />
          <CreditCard className="w-6 h-6 text-gray-700" />
          <span className="text-gray-800 font-medium">
            Pay with Credit Card
          </span>
        </label>

        {/* Option 2 - Cash on Delivery */}
        <label
          htmlFor="cash"
          className="
            flex items-center gap-4 p-4 border rounded-xl cursor-pointer 
            hover:border-black transition shadow-sm
          "
        >
          <input
            type="radio"
            id="cash"
            name="payment"
            value="cash"
            className="w-5 h-5 accent-black"
          />
          <Wallet className="w-6 h-6 text-gray-700" />
          <span className="text-gray-800 font-medium">
            Cash on Delivery
          </span>
        </label>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-8 bg-gray-100 p-4 rounded-xl">
        <p className="text-lg font-semibold text-gray-900">Total: 34,000 EGP</p>

        <button
          className="
            bg-black text-white px-6 py-3 rounded-xl font-medium
            hover:bg-gray-800 active:scale-95 transition-all
          "
        >
          Complete Order
        </button>
      </div>
    </div>
  );
};

export default ChoosePayMethod;
