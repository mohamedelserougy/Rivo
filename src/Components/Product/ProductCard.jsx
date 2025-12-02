import React from "react";
import { Heart, Star } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="block">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative">
        {/* Product Image */}
        <div className="relative h-56 w-full">
          <img src="../../assets/react.svg" className="w-full h-full object-cover" />
        </div>

        {/* Favorite Icon */}
        <div className="absolute top-2 right-2">
          <Heart className="w-6 h-6 text-red-500" />
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-gray-800">
            Smart Carbon Watch Black
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-700">4.7</span>
          </div>

          {/* Price */}
          <div className="flex items-center text-sm font-semibold text-gray-800">
            <span>800</span>
            <span className="ml-1">EGP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
