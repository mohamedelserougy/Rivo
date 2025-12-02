import React, { useState, useEffect } from "react";

import slider1 from "../../assets/react.svg";
import slider4 from "../../assets/react.svg";
import prod3 from "../../assets/react.svg";
import prod4 from "../../assets/react.svg";

const slides = [
  {
    img: slider4,
    title: "Big Discount",
    text: "Up to 50% off your purchase",
  },
  {
    img: slider1,
    title: "Big Discount",
    text: "Up to 50% off your purchase",
  },
  {
    img: prod3,
    title: "Big Discount",
    text: "Up to 50% off your purchase",
  },
  {
    img: prod4,
    title: "Big Discount",
    text: "Up to 50% off your purchase",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-900 shadow-lg ">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full flex items-center justify-center gap-6 py-10 px-6"
          >
            {/* Image */}
            <img
              src={slide.img}
              alt={slide.title}
              className="w-[300px] h-[280px] object-contain drop-shadow-lg"
            />

            {/* Text */}
            <div className="text-white">
              <h3 className="text-3xl font-bold">{slide.title}</h3>
              <p className="text-lg text-gray-300 mt-2">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 py-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-white scale-125" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
