import { Link } from "react-router-dom";
import { VscSend } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import AppStore from '../assets/AppStore.png'
import QRCode from '../assets/Qrcode 1.png'

import googlePlayBadge from "../assets/GetItOnGooglePlay_Badge_Web_color_English.png";

const Footer = () => {
  return (
    <div className="mx-[0] mt-[80px] pt-[50px] block bg-[#000000] text-[#FAFAFA] px-[50px] font-Poppins">
      <div className="mx-[60px]">
        <div className="flex justify-between gap-5">
          <div className="block space-y-3">
            <h2 className="font-Inter font-bold text-[24px]">Exclusive</h2>
            <h3 className="font-medium text-[20px]">Subscribe</h3>
            <p>Get 10% off your first order</p>
            <div className="flex items-center w-[243px h-[38px] bg-[#000000] py-[7px] px-[16px] gap-3 border-[1px] border-solid border-white rounded">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-[#000000] font-Poppins text-[12px] outline-none"
              />
              <VscSend className="size-6" />
            </div>
          </div>
          <div className="block">
            <h3 className="font-medium text-[20px]">Support</h3>
            <div className="mt-[15px] space-y-4">
              <p>
                111 Bijoy sarani, Dhaka,
                <br /> DH 1515, Bangladesh.
              </p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>
          <div className="block">
            <h3 className="font-medium text-[20px]">Account</h3>
            <ul className="block space-y-4 mt-[15px]">
              <li>
                <Link>My Account</Link>
              </li>
              <li>
                <Link>Login / Register</Link>
              </li>
              <li>
                <Link>Cart</Link>
              </li>
              <li>
                <Link>Wishlist</Link>
              </li>
              <li>
                <Link>Shop</Link>
              </li>
            </ul>
          </div>
          <div className="block">
            <h3 className="font-medium text-[20px]">Quick Links</h3>
            <ul className="block space-y-4 mt-[15px]">
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms Of Use</Link>
              </li>
              <li>
                <Link>FAQ</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="block">
            <h3 className="font-medium text-[20px]">Download App</h3>
            <p className="mt-[15px]">Save $3 with App New User Only</p>
            <div className="flex gap-2 items-center">
              <img src={QRCode} alt="" className="h-[95px] w-[95px]" />
              <div className="block space-y-2">
              <a href="https://play.google.com/console/u/0/signup"><img src={googlePlayBadge} alt="" className="h-[50px] w-[150px]" /></a>
              <a href="https://www.apple.com/app-store/"><img src={AppStore} alt="" className="h-[50px] w-[150px]" /></a>
              </div>
            </div>
            <div className="flex space-x-9 justify-center mt-5">
              <a href="https://web.facebook.com/profile.php?id=100006770056124"><FaFacebookF className="size-6" /></a>
              <a href="https://x.com/sanni1538"><FiTwitter className="size-6" /></a>
              <a href="https://www.instagram.com/sanni_152635/"><BsInstagram className="size-6" /></a>
              <a href="www.linkedin.com/in/ridwan-olamide"><FaLinkedinIn className="size-6" /></a>
            </div>
          </div>
        </div>
        <div className="text-[#FFFFFF] flex justify-center text-[16px] opacity-50 mt-10 pb-5">
          <p>&copy; Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
