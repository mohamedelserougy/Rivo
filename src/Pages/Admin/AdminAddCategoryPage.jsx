import React from "react";
import AdminAddCategory from "../../Components/Admin/AdminAddCategory";
import AdminSideBar from "../../Components/Admin/AdminSideBar";

const AdminAddCategoryPage = () => {
  return (
    <div className="container px-4 py-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-12 sm:col-span-3 md:col-span-2">
          <AdminSideBar />
        </div>

        {/* Main Content */}
        <div className="col-span-12 sm:col-span-9 md:col-span-10">
          <AdminAddCategory />
        </div>
      </div>
    </div>
  );
};

export default AdminAddCategoryPage;
