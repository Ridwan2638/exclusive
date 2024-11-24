import React from "react";
import service from "../assets/Services.png";
import service2 from "../assets/services2.png";
import service3 from "../assets/services3.png";

const Frame = () => {
  return (
    <div className="flex justify-center space-x-7 mt-[100px] font-Poppins">
      <div className="justify-items-center">
        <img src={service} alt="" />
        <h3 className="font-semibold text-[20px] mt-5">FREE AND FAST DELIVERY</h3>
        <p className="mt-2">Free delivery for all orders over $140</p>
      </div>
      <div className="justify-items-center">
        <img src={service2} alt="" />
        <h3 className="font-semibold text-[20px] mt-5">24/7 CUSTOMER SERVICE</h3>
        <p className="mt-2">Friendly 24/7 customer support</p>
      </div>
      <div className="justify-items-center">
        <img src={service3} alt="" />
        <h3 className="font-semibold text-[20px] mt-5">MONEY BACK GUARANTEE</h3>
        <p className="mt-2">We return money within 30 days</p>
      </div>
    </div>
  );
};

export default Frame;
