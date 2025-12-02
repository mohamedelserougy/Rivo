import HomeCategory from "../../Components/Home/HomeCategory";
import Slider from "../../Components/Home/Silder";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
    </div>
  );
};

export default HomePage;
