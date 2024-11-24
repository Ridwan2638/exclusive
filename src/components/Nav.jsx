import { Link } from "react-router-dom";
import React from "react";
import Homepage from "../pages/Homepage";
import { CiSearch } from "react-icons/ci";
import Cart from "../assets/Cart.png";
import wish from "../assets/wishlist.png";

const Nav = () => {
  return (
    <div>
      <div className="flex mt-5 mx-[80px] items-center font-Poppins justify-between mb-3">
        <div className="font-Inter text-[24px] font-bold">Exclusive</div>
        <div className="m-0">
          <ul className="flex text-[16px] leading-6 w-[367px] justify-between">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/SignUp">SignUp</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-[34px]">
          <div className="flex items-center w-[243px h-[38px] bg-[#F5F5F5] py-[7px] px-[16px] gap-3">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-[#F5F5F5] font-Poppins text-[12px] outline-none"
            />
            <CiSearch />
          </div>
          <div className="flex items-center gap-[34px]">
            <img src={wish} alt="" className="w-[21spx] h-[20px]" />
            <img src={Cart} alt="" className="w-[25px] h-[25px]" />
          </div>
        </div>
      </div>
      <hr className="decoration-[#000000] border-1" />
    </div>
  );
};

export default Nav;
