import data from "../data/thisMonth.json";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const ThisMonth = () => {
  return (
    <div className="block ml-[80px] mr-[80px] mt-[80px]  ">
      <div className="flex items-center mb-[20px] font-Poppins">
        <div className="h-[40px] w-[20px] bg-[#DB4444] rounded mr-[15px]"></div>
        <h3 className="font-semibold">This Month</h3>
      </div>
      <div className="flex items-center justify-between">
        
          <div className="font-semibold font-Inter text-[36px]">
            Best Selling Products
          </div>
          <button className="px-10 py-3 bg-[#DB4444] rounded text-white">
            View All
          </button>
        
      </div>
      <div className="flex gap-5 mt-5 font-Poppins cursor-pointer mr-[80px]">
        {data.map((d) => {
          return (
            <div key={d.id} className="">
              <div className="w-[250px] h-[230px] bg-[#F5F5F5] block rounded-md">
                <div className="flex justify-end">
                  <div className="block mt-[15px] mr-5">
                    <div className="bg-[#FFFFFF] rounded-full w-[32px] h-[32px] flex justify-center items-center mb-2">
                      {" "}
                      <CiHeart />
                    </div>
                    <div className="bg-[#FFFFFF] rounded-full w-[32px] h-[32px] flex justify-center items-center">
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
              <div className="mt-3">
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
    </div>
  );
};

export default ThisMonth;
