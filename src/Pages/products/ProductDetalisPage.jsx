import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import ProductDetails from "../../Components/Product/ProductDetails";
import RateContainer from "../../Components/Rate/RateContainer";
import CardProductsContainer from "./../../Components/Product/CardProductsContainer";

const ProductDetalisPage = () => {
  return (
    <div>
      <CategoryHeader />
      <div className="container">
        <ProductDetails />
        <RateContainer />

        <CardProductsContainer title={"Products you might like"} />
      </div>
    </div>
  );
};

export default ProductDetalisPage;
