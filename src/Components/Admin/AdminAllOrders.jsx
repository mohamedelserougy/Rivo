import React from "react";
import AdminAllOrdersItem from "./AdminAllOrdersItem";

const AdminAllOrders = () => {
  return (
    <div className="w-full">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-900 mb-5">
        Manage All Orders
      </h2>

      {/* Orders Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
      </div>
    </div>
  );
};

export default AdminAllOrders;
