import React from "react";

const ProductText = () => {
  return (
    <div className="space-y-4">
      {/* Category */}
      <div className="text-gray-700 font-medium">Electronics :</div>

      {/* Title & Rating */}
      <div className="md:w-2/3">
        <div className="text-lg font-semibold">
          iPhone XR 128GB 4G LTE with FaceTime (Product) Red
          <span className="mx-3 text-yellow-500 font-medium">4.5</span>
        </div>
      </div>

      {/* Brand */}
      <div className="md:w-2/3 flex items-center gap-1 mt-4">
        <div className="text-gray-700 font-medium">Brand :</div>
        <div className="text-gray-900 font-semibold">Samsung</div>
      </div>

      {/* Colors */}
      <div className="md:w-2/3 flex items-center gap-2 mt-2">
        <div
          className="w-6 h-6 border"
          style={{ backgroundColor: "#E52C2C" }}
        ></div>
        <div
          className="w-6 h-6 border"
          style={{ backgroundColor: "white" }}
        ></div>
        <div
          className="w-6 h-6 border"
          style={{ backgroundColor: "black" }}
        ></div>
      </div>

      {/* Specifications */}
      <div className="text-gray-700 font-medium mt-4">Specifications :</div>
      <div className="md:w-5/6 text-gray-800 mt-2">
        Features dual SIM (physical + e-SIM). Unlock your iPhone and log in to
        apps and accounts easily. Face ID provides fast and secure
        authentication. Powered by the A12 Bionic chip, one of the smartest and
        fastest smartphone chips. Innovative ISP and neural engine make
        photography easier, capturing incredible images with precise focus.
        Front subjects are sharp while the background remains soft and blurred.
      </div>

      {/* Price & Add to Cart */}
      <div className="flex items-center gap-3 mt-4">
        <div className="px-3 py-3 border font-semibold">34,000 EGP</div>
        <button className="px-3 py-3 bg-black text-white rounded-md hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductText;
