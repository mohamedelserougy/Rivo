import React from "react";

import clothe from "../../assets/react.svg";
import cat2 from "../../assets/react.svg";
import labtop from "../../assets/react.svg";
import sale from "../../assets/react.svg";
import pic from "../../assets/react.svg";
import BrandCard from "./BrandCard";

const categories = [
  { title: "Home Appliances", img: clothe, background: "#F4DBA4" },
  { title: "Home Appliances", img: cat2, background: "#F4DBA4" },
  { title: "Home Appliances", img: labtop, background: "#0034FF" },
  { title: "Home Appliances", img: sale, background: "#F4DBA4" },
  { title: "Home Appliances", img: clothe, background: "#FF6262" },
  { title: "Home Appliances", img: pic, background: "#F4DBA4" },
  { title: "Home Appliances", img: clothe, background: "#F4DBA4" },
  { title: "Home Appliances", img: cat2, background: "#F4DBA4" },
  { title: "Home Appliances", img: labtop, background: "#0034FF" },
  { title: "Home Appliances", img: sale, background: "#F4DBA4" },
  { title: "Home Appliances", img: clothe, background: "#FF6262" },
  { title: "Home Appliances", img: pic, background: "#F4DBA4" },
  { title: "Home Appliances", img: clothe, background: "#F4DBA4" },
  { title: "Home Appliances", img: cat2, background: "#F4DBA4" },
  { title: "Home Appliances", img: labtop, background: "#0034FF" },
  { title: "Home Appliances", img: sale, background: "#F4DBA4" },
  { title: "Home Appliances", img: clothe, background: "#FF6262" },
  { title: "Home Appliances", img: pic, background: "#F4DBA4" },
];

const BrandContainer = () => {
  return (
    <div className="my-6 px-4 container ">
      <h2 className="text-2xl font-semibold text-black mb-4">All Brands :</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((cat, index) => (
          <BrandCard
            key={index}
            title={cat.title}
            img={cat.img}
            background={cat.background}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandContainer;
