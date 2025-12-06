import React from "react";
import AdminAllProductsCard from "./AdminAllProductsCard";

const AdminAllProducts = () => {
  return (
    <div className="w-full">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-900 mb-5">
        Managing all products
      </h2>

      {/* Products Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
        "
      >
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
      </div>
    </div>
  );
};

export default AdminAllProducts;
