import React from "react";
import RatePost from "./RatePost";
import RateItem from "./RateItem";
import Pagination from "../Uitily/Pagination";

const RateContainer = () => {
  return (
    <div className="mt-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-xl font-bold text-gray-800">Ratings</h2>
        <span className="text-yellow-500 font-semibold text-lg">★ 4.3</span>
        <span className="text-gray-500">(160 ratings)</span>
      </div>

      {/* Add Review */}
      <RatePost />

      {/* Reviews List */}
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />

      <div className="mt-6">
        <Pagination />
      </div>
    </div>
  );
};

export default RateContainer;
