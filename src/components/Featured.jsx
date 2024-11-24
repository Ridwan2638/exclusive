import React from "react";
import ps5 from "../assets/ps5-slim-goedkope-playstation_large 1.png";
import atWoman from "../assets/attractive-woman-wearing-hat-posing-black-background 1.png";
import speakers from "../assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png";
import perfume from "../assets/652e82cd70aa6522dd785109a455904c.png";
const Featured = () => {
  return (
    <div className="block mx-[80px] mt-28">
      <div className="flex items-center mb-[20px] font-Poppins">
        <div className="h-[40px] w-[20px] bg-[#DB4444] rounded mr-[15px]"></div>
        <h3 className="font-semibold">Featured</h3>
      </div>
      <div className="flex items-center justify-between">
        <div className="font-semibold font-Inter text-[36px]">New Arrival</div>
      </div>
      <div className="flex h-[600px] justify-between">
        <div className="w-[48%] relative pt-16 p-x-5 pb-0 bg-black rounded-xl ">
          <img src={ps5} alt="" className="w-full h-full" />
          <div className="block absolute  left-[30px] bottom-[30px] text-white font-Poppins">
            <h3 className="font-Inter font-semibold text-[24px]">
              PlayStation 5
            </h3>
            <p className=" mb-[15px]  mt-[15px] text-[14px]">
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <button className="underline underline-offset-[5px] text-[16px] font-medium">
              Shop Now
            </button>
          </div>
        </div>
        <div className="block w-[50%] space-y-5">
          <div className="relative rounded h-[48%]">
            <img src={atWoman} alt="" className="w-full h-full rounded-xl" />
            <div className="block absolute  left-[25px] bottom-[25px] text-white font-Poppins">
              <h3 className="font-Inter font-semibold text-[24px]">
                Women’s Collections
              </h3>
              <p className=" mb-[10px]  mt-[10px] text-[14px]">
                Featured woman collections that <br /> give you another vibe.
              </p>
              <button className="underline underline-offset-[5px] text-[16px] font-medium">
                Shop Now
              </button>
            </div>
          </div>
          <div className="flex h-[48.5%] justify-between">
            <div className="relative w-[48%] bg-black p-3 rounded-2xl">
              <img src={speakers} alt="" className="w-[80%] h-[80%] mx-auto my-auto" />
              <div className="block absolute  left-[30px] bottom-[30px] text-white font-Poppins">
                <h3 className="font-Inter font-semibold text-[24px]">Speakers</h3>
                <p className=" mb-[10px]  mt-[10px] text-[14px]">Amazon wireless speakers</p>
                <button className="underline underline-offset-[5px] text-[16px] font-medium">Shop Now</button>
              </div>
            </div>
            <div className="relative w-[48%] bg-black p-3 rounded-2xl">
              <img src={perfume} alt="" className="w-[80%] h-[80%] mx-auto my-auto" />
              <div className="block absolute  left-[30px] bottom-[30px] text-white font-Poppins">
                <h3 className="font-Inter font-semibold text-[24px]">Perfume</h3>
                <p className=" mb-[10px]  mt-[10px] text-[14px]">GUCCI INTENSE OUD EDP</p>
                <button className="underline underline-offset-[5px] text-[16px] font-medium">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
