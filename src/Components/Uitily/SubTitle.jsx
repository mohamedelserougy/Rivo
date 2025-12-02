import React from "react";

const SubTitle = ({ title, btntitle }) => {
  return (
    <div className="flex justify-between items-center pt-4">
      {/* Title */}
      <h2 className="text-xl font-semibold text-black">{title}</h2>

      {/* Optional Button */}
      {btntitle && (
        <button
          className="
        text-sm font-medium
    bg-black text-white
           px-6 py-2
          rounded-full shadow-md
           transition-all duration-300
    hover:bg-gray-800 hover:scale-105
    active:scale-95
  "
        >
          {btntitle}
        </button>
      )}
    </div>
  );
};

export default SubTitle;
