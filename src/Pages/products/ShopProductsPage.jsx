import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Uitily/SearchCountResult";

const ShopProductsPage = () => {
  return (
    <div>
      <CategoryHeader />
      <div className="container">

      <SearchCountResult title={"600  products ..."} />
      </div>
    </div>
  );
};

export default ShopProductsPage;
