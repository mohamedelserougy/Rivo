import React from "react";
import CategoryCard from "./CategoryCard";

import clothe from "../../assets/react.svg";
import cat2 from "../../assets/react.svg";
import labtop from "../../assets/react.svg";
import sale from "../../assets/react.svg";
import pic from "../../assets/react.svg";

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

const CategoryContainer = () => {
  return (
    <div className="my-6 px-4">
      <h2 className="text-2xl font-semibold text-black mb-4">All Categories :</h2>
      <div className="flex flex-wrap justify-between">
        {categories.map((cat, index) => (
          <CategoryCard
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

export default CategoryContainer;
