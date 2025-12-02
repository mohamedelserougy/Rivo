import React from "react";
import { Search, LogIn, ShoppingCart } from "lucide-react";
import logo from "../../assets/react.svg";

const NavBarLogin = () => {
  return (
    <nav className="sticky top-0 bg-black text-white shadow-md py-3 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
        </a>

        <div className="flex-1 mx-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="
                w-full px-4 py-2 rounded-full bg-gray-900 text-white 
                border border-gray-700 outline-none
                focus:border-gray-500 transition-all duration-300
              "
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="/login"
            className="
              flex items-center gap-2 
              hover:scale-105 active:scale-95 transition-all
            "
          >
            <LogIn className="w-5 h-5" />
            <span className="text-white">Login</span>
          </a>

          <a
            href="/cart"
            className="
              flex items-center gap-2 
              hover:scale-105 active:scale-95 transition-all
            "
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="text-white">Cart</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBarLogin;
