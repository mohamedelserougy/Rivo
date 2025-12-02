import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div
        className="
          bg-gray-900 text-white 
          w-full max-w-md p-8 
          rounded-2xl shadow-xl
          hover:shadow-2xl 
          transition-all duration-300
        "
      >
        {/* Title */}
        <h1 className="text-2xl font-semibold text-center mb-6">
          تسجيل الدخول
        </h1>

        {/* Email */}
        <input
          type="text"
          placeholder="الايميل..."
          className="
            w-full p-3 rounded-xl bg-gray-800 text-white text-center
            border border-gray-700 focus:border-gray-500 
            outline-none transition-all duration-300 mb-4
          "
        />

        {/* Password */}
        <input
          type="password"
          placeholder="كلمة السر..."
          className="
            w-full p-3 rounded-xl bg-gray-800 text-white text-center
            border border-gray-700 focus:border-gray-500 
            outline-none transition-all duration-300
          "
        />

        {/* Login Button */}
        <button
          className="
            w-full mt-5 py-3 bg-black rounded-full font-medium
            hover:bg-gray-800 hover:scale-105 active:scale-95
            transition-all duration-300
          "
        >
          تسجيل الدخول
        </button>

        {/* Register Link */}
        <p className="text-center mt-5 text-gray-300">
          ليس لديك حساب؟
          <Link to="/register" className="text-red-400 hover:underline mx-1">
            اضغط هنا
          </Link>
        </p>

        {/* Admin / User Links */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <Link
            to="/admin/allproducts"
            className="text-red-400 hover:underline"
          >
            الدخول ادمن
          </Link>

          <Link to="/user/allorders" className="text-red-400 hover:underline">
            الدخول مستخدم
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
