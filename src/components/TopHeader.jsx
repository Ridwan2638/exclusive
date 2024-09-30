import { Link } from "react-router-dom";
import "../index.css";
import { useState } from "react";

const TopHeader = () => {

    const [language, setLanguage] = useState('en');
    const languageChange = (e)=>{
      setLanguage(e.target.value)
    }

  
  return (
    <div className=" ml-0 h-12 w-full bg-black text-white flex justify-end shadow-[0_5px_5px_rgba(0,0,0,0.4)] font-Poppins ">
      <div className=" flex items-start relative top-3 gap-4 ml-[100px] font-Poppins text-[14px] mr-[80px]  ">
        <div className=" inline-flex gap-2 mr-[200px]">
          <p className="text-wrapper">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a href="#" className="font-semibold underline">
            ShopNow
          </a>
        </div>
        <div className="">
          <div className="">
            <select id="languageS" value={language} onChange={languageChange} className="bg-black text-white">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
