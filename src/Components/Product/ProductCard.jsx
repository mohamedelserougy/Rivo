import React from "react";
import { Heart, Star } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative h-72 w-full">
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          alt="Product"
          className="w-full h-full object-cover"
        />
        {/* Favorite Icon */}
        <div className="absolute top-3 right-3">
          <Heart className="w-6 h-6 text-red-500" />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-gray-800 font-semibold text-lg">Apple AirPods</h2>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-gray-700">4.7</span>
        </div>

        {/* Price */}
        <div className="text-gray-900 font-semibold text-lg">$95.00</div>

        {/* Description */}
        <p className="text-gray-600 text-sm opacity-80">
          With plenty of talk and listen time, voice-activated Siri access, and
          a wireless charging case.
        </p>

        {/* Add to Cart Button */}
        <button className="mt-3 w-full py-2 rounded-lg bg-black/90 text-white font-semibold hover:bg-black/70 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
