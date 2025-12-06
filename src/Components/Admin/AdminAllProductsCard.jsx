import React from "react";
import { Link } from "react-router-dom";
import prod1 from "../../assets/react.svg";

const AdminAllProductsCard = () => {
  return (
    <div
      className="
        bg-white
        rounded-xl
        shadow-md
        overflow-hidden
        flex flex-col
        transition-transform
        duration-300
        hover:scale-105
        w-full
        h-[350px]
      "
    >
      {/* Edit / Delete Buttons */}
      <div className="flex justify-between px-3 py-2">
        <button className="text-red-500 font-medium hover:underline cursor-pointer">
          Remove
        </button>
        <button className="text-blue-500 font-medium hover:underline cursor-pointer">
          Edit
        </button>
      </div>

      {/* Image + Link */}
      <Link to="/products/:id" className="flex-1 flex flex-col">
        <img
          src={prod1}
          alt="product"
          className="w-full h-[228px] object-cover"
        />

        {/* Card Body */}
        <div className="p-3 flex flex-col flex-1 justify-between">
          {/* Title */}
          <h3 className="text-gray-800 font-semibold text-sm md:text-base mb-2">
            Carbon Black Smart Watch
          </h3>

          {/* Price & Rating */}
          <div className="flex justify-between items-center">
            <div className="text-yellow-500 font-medium">4.5</div>
            <div className="flex items-center gap-1">
              <span className="text-gray-600">EGP</span>
              <span className="font-semibold text-gray-800">880</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AdminAllProductsCard;
