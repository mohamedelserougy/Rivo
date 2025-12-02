import React from "react";
import CategoryCard from "../Category/CategoryCard";

import clothe from "../../assets/react.svg";
import SubTitle from "../Uitily/SubTitle";

const HomeCategory = () => {
  return (
    <div className="my-6 px-4">
      {/* SubTitle section */}
      <SubTitle
        title="Categories"
        btntitle="See More"
        pathText="/allcategory"
      />

      {/* Categories flex layout */}
      <div className="flex flex-wrap justify-between mt-4">
        <CategoryCard
          title="Home Appliances"
          img={clothe}
          background="#F4DBA4"
        />
        <CategoryCard
          title="Home Appliances"
          img={clothe}
          background="#F4DBA4"
        />
        <CategoryCard
          title="Home Appliances"
          img={clothe}
          background="#F4DBA4"
        />
        <CategoryCard
          title="Home Appliances"
          img={clothe}
          background="#F4DBA4"
        />
        <CategoryCard
          title="Home Appliances"
          img={clothe}
          background="#F4DBA4"
        />
        <CategoryCard
          title="Home Appliances"
          img={clothe}
          background="#F4DBA4"
        />
      </div>
    </div>
  );
};

export default HomeCategory;
