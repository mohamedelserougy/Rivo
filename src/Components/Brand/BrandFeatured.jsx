import React from "react";
import BrandCard from "./BrandCard";

import brand1 from "../../assets/react.svg";
import brand2 from "../../assets/react.svg";
import brand3 from "../../assets/react.svg";
import SubTitle from "../Uitily/SubTitle";

const BrandFeatured = ({ title, btntitle }) => {
  return (
    <div className="w-full py-10 px-4">
      {/* Section Title */}
      <SubTitle title={title} btntitle={btntitle} pathText="/allbrand" />

      {/* Brands Grid */}
      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-6 
          gap-5 
          mt-6
        "
      >
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand2} />
        <BrandCard img={brand1} />
        <BrandCard img={brand3} />
      </div>
    </div>
  );
};

export default BrandFeatured;
