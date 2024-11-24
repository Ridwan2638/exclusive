import Banners from "../components/Banners";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Featured from "../components/Featured";
import FlashSales from "../components/FlashSales";
import Footer from "../components/Footer";
import Frame from "../components/Frame";
import Nav from "../components/Nav";
import ThisMonth from "../components/ThisMonth";
import TopHeader from "../components/TopHeader";

const Homepage = () => {
  return (
    <div>
      <Banners />
      <FlashSales />
      <Categories />
      <ThisMonth />
      <Category />
      <Featured />
      <Frame />
    </div>
  );
};

export default Homepage;
