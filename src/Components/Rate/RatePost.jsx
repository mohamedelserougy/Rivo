import React from "react";
import Rating from "@mui/material/Rating";

const RatePost = () => {
  const [value, setValue] = React.useState(2);

  return (
    <div className="bg-gray-700 text-white p-4 rounded-xl shadow-lg mt-6 border border-gray-700 transition-transform duration-300">
      <div className="flex items-center justify-between mb-4">
        <p className="font-semibold text-lg">Ali Mohamed</p>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{
            color: "#FACC15", // yellow like your EventCard stars
          }}
        />
      </div>

      <textarea
        className="w-full border border-gray-600 bg-gray-800 text-white rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
        rows="3"
        placeholder="Write your comment..."
      ></textarea>

      <div className="flex justify-end mt-3">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-full font-medium transition-all duration-300 active:scale-95">
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default RatePost;
