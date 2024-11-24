import { Link } from "react-router-dom";
import appleLogo from "../assets/1200px-Apple_gray_logo 1.png"
import banner1 from "../assets/hero_endframe__cvklg0xk3w6e_large 2.png";

const Banners = () => {
  return (
    <div className="font-Poppins">
      <div className="mx-[80px] mt-0 flex justify-between h-[374px]">
        <div className="h-[100%] mt-[30px] ">
          <ul className="flex flex-col justify-between h-[92%] text-[16px]">
            <li>
              <Link to="/">Women's Fashion</Link>
            </li>
            <li>
              <Link to="/">Men's Fashion</Link>
            </li>
            <li>
              <Link to="/">Electronics</Link>
            </li>
            <li>
              <Link to="/">Home & Lifestyle</Link>
            </li>
            <li>
              <Link to="/">Medicine</Link>
            </li>
            <li>
              <Link to="/">Sports & Outdoor</Link>
            </li>
            <li>
              <Link to="/">Baby's and Toys</Link>
            </li>
            <li>
              <Link to="/">Groceries& Pets</Link>
            </li>
            <li>
              <Link to="/">Health and Beauty</Link>
            </li>
          </ul>
        </div>
        <hr className="h-full ml-[50px] decoration-[#000000] border" />
        <div className="w-[792px] h-[344px] mt-[30px] bg-[#000000] flex justify-between p-[50px] ">
          <div className="text-white">
            <div className="flex items-center">
              <img src={appleLogo} className="h-[49px] w-[40px]" alt="" />
              <p className=" ml-10">iPhone 14 Series</p>
            </div>
            <h1 className="text-[48px]">Up to 10% <br />off Voucher</h1>
            <Link className="underline underline-offset-[10px]">Show More </Link>
          </div>
          <div>
            <img src={banner1} className="h-[250px] w-[370px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
