import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import ProductDetails from "../../Components/Product/ProductDetails";

const ProductDetalisPage = () => {
  return (
    <div>
      <CategoryHeader />
      <div className="container">
        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductDetalisPage;
