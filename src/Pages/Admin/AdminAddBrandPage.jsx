import React from "react";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAddBrand from "../../Components/Admin/AdminAddBrand";

const AdminAddBrandPage = () => {
  return (
    <div className="container px-4 py-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-12 sm:col-span-3 md:col-span-2">
          <AdminSideBar />
        </div>

        {/* Main Content */}
        <div className="col-span-12 sm:col-span-9 md:col-span-10">
          <AdminAddBrand />
        </div>
      </div>
    </div>
  );
};

export default AdminAddBrandPage;
