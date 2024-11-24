import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";

const Categories = () => {
  return (
    <div className="block ml-[80px] mr-[80px] mt-[60px] ">
      <div className="flex items-center mb-[20px] font-Poppins">
        <div className="h-[40px] w-[20px] bg-[#DB4444] rounded mr-[15px]"></div>
        <h3 className="font-semibold">Categories</h3>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-28">
          <div className="font-semibold font-Inter text-[36px]">
            Browse By Category
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="bg-[#F5F5F5] rounded-full p-2"
            onClick={() => previous()}
          >
            <FaArrowLeft className="size-[24px]" />
          </button>
          <button
            className="bg-[#F5F5F5] rounded-full p-2"
            onClick={() => next()}
          >
            <FaArrowRight className="size-[24px]" />
          </button>
        </div>
      </div>
      <div className="flex gap-5 mt-7">
        {cat.map((d) => {
          return (
            <div key={d.id} className=" border-[1px] border-[#000000] rounded h-[145px] w-[170px] flex items-center  justify-center">
              <div className="block justify-items-center">
                <img src={d.icon} className="decoration-white" alt="" />
                <p className="">{d.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <hr className="mt-20" />
    </div>
  );
};

const cat = [
  {
    id:"1",
    name: "Phone",
    icon: "src/assets/Category-CellPhone.png",
  },
  {
    id:"2",
    name: "Computers",
    icon: "src/assets/Category-Computer.png",
  },
  {
    id:"3",
    name: "SmartWatch",
    icon: "src/assets/Category-SmartWatch.png",
  },
  {
    id:"4",
    name: "Camera",
    icon: "IoCameraOutline",
  },
  {
    id:"5",
    name: "HeadPhones",
    icon: "src/assets/Category-Headphone.png",
  },
  {
    id:"6",
    name: "Gaming",
    icon: "src/assets/Category-Gamepad.png",
  },
];

export default Categories;
