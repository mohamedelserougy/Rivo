import React from "react";
import CartCheckout from "../../Components/Cart/CartCheckout";
import CartItem from "../../Components/Cart/CartItem";

const CartPage = () => {
  return (
    <div className="min-h-screen px-4 py-6">
      {/* Page Title */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Shopping Cart
      </h2>

      {/* Layout */}
      <div className="container flex flex-col lg:flex-row gap-6 justify-center">
        
        {/* Cart Items Section */}
        <div className="lg:w-3/4 space-y-4">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        {/* Checkout Section */}
        <div className="lg:w-1/4">
          <CartCheckout />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
