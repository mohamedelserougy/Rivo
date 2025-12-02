import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
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
          Register Now{" "}
        </h1>

        {/* Username */}
        <input
          type="text"
          placeholder="user name"
          className="
            w-full p-3 rounded-xl bg-gray-800 text-white text-center
            border border-gray-700 focus:border-gray-500 
            outline-none transition-all duration-300 mb-4
          "
        />

        {/* Email */}
        <input
          type="text"
          placeholder="email"
          className="
            w-full p-3 rounded-xl bg-gray-800 text-white text-center
            border border-gray-700 focus:border-gray-500 
            outline-none transition-all duration-300 mb-4
          "
        />

        {/* Password */}
        <input
          type="password"
          placeholder="password"
          className="
            w-full p-3 rounded-xl bg-gray-800 text-white text-center
            border border-gray-700 focus:border-gray-500 
            outline-none transition-all duration-300
          "
        />

        {/* Register Button */}
        <button
          className="
            w-full mt-5 py-3 bg-black rounded-full font-medium
            hover:bg-gray-800 hover:scale-105 active:scale-95
            transition-all duration-300
          "
        >
          Register
        </button>

        {/* Login Link */}
        <p className="text-center mt-5 text-gray-300">
          Already have an account?
          <Link to="/login" className="text-red-400 hover:underline mx-1">
            Click here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
