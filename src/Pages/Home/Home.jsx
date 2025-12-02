import DiscountSection from "../../Components/Home/DiscountSection";
import HomeCategory from "../../Components/Home/HomeCategory";
import Slider from "../../Components/Home/Silder";
import CardProductsContainer from "../../Components/Product/CardProductsContainer";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer title="best selling" btntitle="see more" />
      <DiscountSection />
    </div>
  );
};

export default HomePage;
