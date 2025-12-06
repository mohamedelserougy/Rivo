import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  const links = [
    { to: "/admin/allorders", label: "Manage Orders" },
    { to: "/admin/allproducts", label: "Manage Products" },
    { to: "/admin/addbrand", label: "Add Brand" },
    { to: "/admin/addcategory", label: "Add Category" },
    { to: "/admin/addsubcategory", label: "Add Subcategory" },
    { to: "/admin/addproduct", label: "Add Product" },
  ];

  return (
    <div
      className="
        bg-gray-900
        text-white
        rounded-xl
        shadow-lg
        p-4
        flex flex-col
        gap-3
      "
    >
      {links.map((item, i) => (
        <Link key={i} to={item.to} className="block">
          <div
            className="
              w-full
              text-center
              py-2
              rounded-lg
              transition-all
              duration-300
              hover:bg-gray-800
              hover:scale-[1.02]
              active:scale-95
              cursor-pointer
            "
          >
            {item.label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AdminSideBar;
