import React from "react";
import iconsPhone from "../assets/icons-phone.png";
import iconsEmail from "../assets/icons-mail.png";

const Contact = () => {
  return (
    <div className="flex font-Poppins justify-between mx-[100px] mt-[150px] h-[450px]">
      <div className=" w-[35%] relative p-9  shadow">
        <div className="mb-5">
          <div className="flex gap-4 items-center mb-4">
            <img src={iconsPhone} alt="" />
            <h3 className="font-medium text-[16px]">Call To Us</h3>
          </div>
          <p className="text-[14px] mb-4">We are available 24/7, 7 days a week.</p>
          <p className="text-[14px]">Phone: +8801611112222</p>
        </div>
        <hr />
        <div className="mt-5">
          <div className="flex gap-4 items-center mb-4">
            <img src={iconsEmail} alt="" />
            <h3 className="font-medium text-[16px]">Write To US</h3>
          </div>
          <p className="text-[14px] mb-4">
            Fill out our form and we will contact <br />
            you within 24 hours.
          </p>
          <p className="text-[14px] mb-4">Emails: customer@exclusive.com</p>
          <p className="text-[14px]">Emails: support@exclusive.com</p>
        </div>
      </div>
      <div className="w-[62%] p-8 shadow">
        <div className="relative flex justify-between ">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-[#F5F5F5] font-Poppins w-[32%] text-[12px] outline-none p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            className="bg-[#F5F5F5] font-Poppins w-[32%] text-[12px] outline-none p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="bg-[#F5F5F5] font-Poppins w-[32%] text-[12px] outline-none p-2 rounded"
            required
          />
        </div>
        <textarea
          name=""
          id=""
          className="block bg-[#F5F5F5] w-full h-[207px] mt-6 mb-[50px] p-2 resize-none outline-none rounded"
        ></textarea>
        <div className="flex justify-end">
          <button className="bg-[#DB4444] block text-white px-10 py-3 rounded">
            Send Massage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
