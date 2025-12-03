import React from "react";

const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Electrical",
  "Discounts",
  "Discounts",
  "Discounts",
  "Discounts",
  "Discounts",
  "More",
];

const CategoryHeader = () => {
  return (
    <div className="bg-gray-900 py-4">
      <div className="container px-4 overflow-x-auto">
        <div className="flex gap-1 whitespace-nowrap">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="
                px-4 py-2   
                bg-gray-800 
                text-white 
                font-medium 
                hover:bg-gray-700 
                cursor-pointer 
                transition-all duration-300
              "
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
