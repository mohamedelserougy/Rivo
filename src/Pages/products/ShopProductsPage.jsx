import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import Pagination from "../../Components/Uitily/Pagination";
import SearchCountResult from "../../Components/Uitily/SearchCountResult";
import SideFilter from "../../Components/Uitily/SideFilter";
import CardProductsContainer from "../../Components/Product/CardProductsContainer";

const ShopProductsPage = () => {
  return (
    <div >
      {/* Category Header */}
      <CategoryHeader />

      <div className="container">
        {/* Search Results */}
        <SearchCountResult title="600 prod avil.." />

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          {/* Sidebar Filter */}
          <aside className="w-full md:w-1/5">
            <SideFilter />
          </aside>

          {/* Products Grid */}
          <main className="w-full md:w-4/5">
            <CardProductsContainer title="" btntitle="" />
          </main>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default ShopProductsPage;
