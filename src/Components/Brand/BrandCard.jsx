import React from "react";

const BrandCard = ({ img }) => {
  return (
    <div
      className="
        bg-gray-900 
        rounded-xl 
        shadow-md 
        overflow-hidden 
        hover:shadow-xl 
        hover:scale-105 
        transition-all 
        duration-300 
        flex 
        items-center 
        justify-center 
        p-4
      "
    >
      <img src={img} alt="brand" className="w-full h-full object-contain" />
    </div>
  );
};

export default BrandCard;
