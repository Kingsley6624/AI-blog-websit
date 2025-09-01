import React from "react";
import img1 from "../../assets/images/avater1.svg";
import img2 from "../../assets/images/avater2.svg";
import img3 from "../../assets/images/avater3.svg";
import img4 from "../../assets/images/avater4.svg";
import Button from "../../shared/Button";
import { GoArrowUpRight } from "react-icons/go";

const ResourceCard = ({ icon, cat, desc, user }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 lg:gap-[40px] 2xl:gap-[60px]  py-[40px] lg:py-[60px] lg:pr-[60px] 2xl:pr-[80px] 2xl:py-[80px] border-b border-[#2A2A2A] lg:border-none">
      <div className="flex flex-col gap-6 lg:gap-[30px] 2xl:gap-[50px]">
        <img src={icon} alt="" className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] 2xl:w-[80px] 2xl:h-[80px]" />
        <div>
        <h3 className="font-kumbh font-semibold text-2xl lg:text-3xl 2xl:text-4xl text-white">{cat}</h3>
        <p className="text-sm lg:text-base 2xl:text-xl text-[#98989A]">{desc}</p>
      </div>
       <Button text={`Download ${cat} Now`} className="w-full md:w-full" icon={<GoArrowUpRight />} />
      </div>
    


      <div className="flex justify-between bg-[#1A1A1A] py-5 px-[30px] lg:px-5 2xl:px-[30px] lg:gap-[30px] 2xl:gap-[50px] rounded w-[90%] lg:w-full self-start">
        <div>
          <p className="text-[#98989a] text-sm 2xl:text-lg">Downloaded By</p>
          <span className="font-semibold text-white text-lg lg:text-xl 2xl:text-2xl">{user}+ Users</span>
        </div >
        <div className="flex bg-[#141414] w-fit p-2">
          <img className="h-[40px] w-[40px] 2xl:h-[50px] 2xl:w-[50px]" src={img1} alt="" />
          <img className="h-[40px] w-[40px] 2xl:h-[50px] 2xl:w-[50px] -ml-4 z-10" src={img2} alt="" />
          <img className="h-[40px] w-[40px] 2xl:h-[50px] 2xl:w-[50px] -ml-4 z-20" src={img3} alt="" />
          <img className="h-[40px] w-[40px] 2xl:h-[50px] 2xl:w-[50px] -ml-4 z-30" src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
