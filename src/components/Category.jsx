import featureImage from '../assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
import CatCount from './catCount';

const Category = () => {
  return (
    <div className="mx-[80px] mt-[100px] bg-black">
      <div className="px-[80px] py-[80px] flex items-center">
        <div className="block text-white font-Poppins">
          <p className="text-[#00FF66] font-semibold text-[16px]">Categories</p>
          <h1 className="font-Inter font-semibold text-[48px]">
            Enhance Your<br />Music Experience
          </h1>
          <CatCount/>
          <button className="bg-[#00FF66] mt-10 py-2 px-5 font-medium rounded-sm text-[16px]">
            Buy Now
          </button>
        </div>
        <div>
            <img src={featureImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
