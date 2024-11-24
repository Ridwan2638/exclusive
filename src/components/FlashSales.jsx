import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import data from "../data/flashSales.json";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import FlashSalesCount from "./FlashSalesCount";

const FlashSales = ({ next, previous, goToSlide, ...rest }) => {
  // const {
  //   carouselState: { currentSlide },
  // } = rest;

  const handleChange = () => {};
  return (
    <div className="block ml-[80px] mr-[80px] mt-[80px]  ">
      <div className="flex items-center mb-[20px] font-Poppins">
        <div className="h-[40px] w-[20px] bg-[#DB4444] rounded mr-[15px]"></div>
        <h3 className="font-semibold">Today's</h3>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-28">
        <div className="font-semibold font-Inter text-[36px]">Flash Sales</div>
        <FlashSalesCount className="" />
        </div>
        
        <div className="flex items-center gap-2">
          <button
            className="bg-[#F5F5F5] rounded-full p-2"
            onClick={() => previous()}
          >
            <FaArrowLeft className="size-[24px]" />
          </button>
          <button
            className="bg-[#F5F5F5] rounded-full p-2"
            onClick={() => next()}
          >
            <FaArrowRight className="size-[24px]" />
          </button>
        </div>
      </div>
      <div className="flex gap-5 mt-5 font-Poppins cursor-pointer ">
        {data.map((d) => {
          return (
            <div key={d.id} className="">
              <div className="w-[250px] h-[230px] bg-[#F5F5F5] block rounded-md">
                <div className="flex justify-between">
                  <p className="bg-red-600 p-2 ml-[12px] h-[36px] mt-[12px] text-white rounded-md">
                    {d.percentOff}
                  </p>
                  <div className="block mt-[15px] mr-5">
                    <div
                      className="bg-[#FFFFFF] rounded-full w-[32px] h-[32px] flex justify-center items-center mb-2"
                      onClick={handleChange}
                    >
                      {" "}
                      <CiHeart />
                    </div>
                    <div
                      className="bg-[#FFFFFF] rounded-full w-[32px] h-[32px] flex justify-center items-center"
                      onClick={handleChange}
                    >
                      <IoEyeOutline />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pb-3">
                  <img
                    src={d.productImage}
                    className="z-1 w-[152px] h-[127px]"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="text-[16px] font-medium">{d.name}</div>
                <div className="flex gap-4">
                  <p className="text-[#DB4444]">${d.salesPrice}</p>
                  <p className="text-[#000000]">${d.actualPrice}</p>
                </div>
                <div></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-16">
        <button className="px-10 py-3 bg-[#DB4444] rounded text-white">View All Products</button>
      </div>
      <hr />
    </div>
  );
};

export default FlashSales;
