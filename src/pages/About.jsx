import React from "react";
import aboutPics from "../assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png";
import service4 from "../assets/Services4.png";
import service5 from "../assets/Services5.png";
import service6 from "../assets/Services6.png";
import service7 from "../assets/Services7.png";
import Frame from "../components/Frame";
import Team from "../components/Team";


const About = () => {
  return (
    <div className="font-Poppins mt-[100px] ml-[80px]">
      <div className="flex gap-[40px]">
        <div className="w-[50%] mt-[90px]">
          <h1 className="text-[54px] font-semibold font-Inter">Our Story</h1>
          <div className="mt-[30px]">
            <p className="font-regular text-[16px] mb-[30px]">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <div>
          <img src={aboutPics} alt="" />
        </div>
      </div>
      <div className="flex justify-between mt-[100px] mr-[80px]">
        <div className="flex w-[250px] h-[230px] items-center  justify-center border-2 rounded">
          <div className="justify-items-center">
            <img src={service4} alt="" />
            <h3 className="font-Inter font-bold text-[32px] mt-[10px]">
              10.5k{" "}
            </h3>
            <p>Sallers active our site</p>
          </div>
        </div>
        <div className="flex w-[250px] h-[230px] bg-[#DB4444] items-center text-white justify-center border-2 rounded">
          <div className="justify-items-center">
            <img src={service5} alt="" />
            <h3 className="font-Inter font-bold text-[32px] mt-[10px]">33k </h3>
            <p>Monthly Produduct Sale</p>
          </div>
        </div>
        <div className="flex w-[250px] h-[230px] items-center  justify-center border-2 rounded">
          <div className="justify-items-center">
            <img src={service6} alt="" className="h-[80px] w-[80px]" />
            <h3 className="font-Inter font-bold text-[32px] mt-[10px]">
              45.5k{" "}
            </h3>
            <p>Customer active in our site</p>
          </div>
        </div>
        <div className="flex w-[250px] h-[230px] items-center  justify-center border-2 rounded">
          <div className="justify-items-center">
            <img src={service7} alt="" />
            <h3 className="font-Inter font-bold text-[32px] mt-[10px]">25k </h3>
            <p>Annual gross sale in our site</p>
          </div>
        </div>
      </div>
      <Team />
      
      <Frame className="ml-[-80px]" />
    </div>
  );
};

export default About;

