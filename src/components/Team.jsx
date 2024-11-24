import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div>
      <div className="carousel w-full m-auto">
        <div className="font-Poppins mt-[120px]">
        <Slider {...settings}>
          {team.map((d) => (
            <div key={d.id}>
                <div className="h-[430px] w-[370px] bg-[#F5F5F5] flex items-end justify-center rounded">
                   <img src={d.picture} alt="" className="h-[391px] w-[236px]" /> 
                </div>
              
              <div>
                <h3 className="font-Inter font-medium text-[32px]">{d.name}</h3>
                <p className="text-[16px] mt-2 mb-2">{d.post}</p>
                <div className="flex space-x-4">
                  <a href={d.twitter}>
                    <FiTwitter className="size-6" />
                  </a>
                  <a href={d.insta}>
                    {" "}
                    <BsInstagram className="size-6" />{" "}
                  </a>
                  <a href={d.linkedin}>
                    {" "}
                    <FaLinkedinIn className="size-6" />{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const team = [
  {
    id:`1`,
    picture: `/assets/myPics.png`,
    name: `Ridwan Sanni`,
    post: `Software Engineer`,
    twitter: `https://x.com/sanni1538`,
    insta: `https://www.instagram.com/sanni_152635/`,
    linkedin: `www.linkedin.com/in/ridwan-olamide`,
  },
  {
    id:`2`,
    picture: `/assets/image 46.png`,
    name: `Tom Cruise`,
    post: `Founder & Chairman`,
    twitter: `https://x.com/sanni1538`,
    insta: `https://www.instagram.com/sanni_152635/`,
    linkedin: `www.linkedin.com/in/ridwan-olamide`,
  },
  {
    id:`3`,
    picture: `/assets/image 47.png`,
    name: `Emma Watson`,
    post: `Managing Director`,
    twitter: `https://x.com/sanni1538`,
    insta: `https://www.instagram.com/sanni_152635/`,
    linkedin: `www.linkedin.com/in/ridwan-olamide`,
  },
  {
    id:`4`,
    picture: `/assets/image 51.png`,
    name: `Will Smith`,
    post: `Product Designer`,
    twitter: `https://x.com/sanni1538`,
    insta: `https://www.instagram.com/sanni_152635/`,
    linkedin: `www.linkedin.com/in/ridwan-olamide`,
  },
];

export default Team;
