import BrandFeatured from "../../Components/Brand/BrandFeatured";
import DiscountSection from "../../Components/Home/DiscountSection";
import HomeCategory from "../../Components/Home/HomeCategory";
import Slider from "../../Components/Home/Silder";
import CardProductsContainer from "../../Components/Product/CardProductsContainer";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <div className="container ">
        <HomeCategory />
        <CardProductsContainer
          title="best selling"
          btntitle="see more"
          pathText="/allproducts"
        />
        <DiscountSection />
        <CardProductsContainer
          title="best selling"
          btntitle="see more"
          pathText="/allproducts"
        />
        <BrandFeatured title="Most famous brands" btntitle="see more" />
      </div>
    </div>
  );
};

export default HomePage;
