import React from "react";

const CategoryCard = ({ background, img, title }) => {
  return (
    <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6 px-2 my-4">
      <div
        className="
          bg-gray-900 text-white rounded-xl shadow-md p-4
          flex flex-col items-center justify-center
          hover:scale-105 active:scale-95 transition-all duration-300
        "
      >
        <div
          className="w-20 h-20 rounded-full mb-3"
          style={{ backgroundColor: background }}
        ></div>

        <img
          src={img}
          alt={title}
          className="w-20 h-20 object-contain -mt-20 drop-shadow-lg"
        />

        <p className="mt-6 text-center font-medium text-white">{title}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
