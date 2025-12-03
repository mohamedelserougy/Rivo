import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image from "/src/assets/react.svg";

const ProductDetails = () => {
  return (
    <div>
      <div className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Section (Gallery) */}
          <div className="lg:col-span-4 bg-gray-800">
            <Swiper spaceBetween={20} slidesPerView={3}>
              <img src={image} />
            </Swiper>
          </div>

          {/* Right Section (Product Text) */}
          <div className="lg:col-span-8">product text</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
