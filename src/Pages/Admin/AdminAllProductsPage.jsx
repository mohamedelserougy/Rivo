import React from "react";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import Pagination from "../../Components/Uitily/Pagination";

const AdminAllProductsPage = () => {
  return (
    <div className="w-full px-4 py-6">
      <div
        className="
          grid
          grid-cols-12
          gap-6
        "
      >
        {/* Sidebar */}
        <div className="col-span-12 sm:col-span-3 md:col-span-2">
          <AdminSideBar />
        </div>

        {/* Main Content */}
        <div className="col-span-12 sm:col-span-9 md:col-span-10 flex flex-col gap-6">
          <AdminAllProducts />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default AdminAllProductsPage;
