import React from "react";
import ProductCard from "./ProductCard";
import SubTitle from "../Uitily/SubTitle";

const CardProductsContainer = ({ title, btntitle }) => {
  return (
    <div className="my-6 px-4">
      {/* SubTitle Section */}
      <SubTitle title={title} btntitle={btntitle} />

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        
      </div>
    </div>
  );
};

export default CardProductsContainer;
