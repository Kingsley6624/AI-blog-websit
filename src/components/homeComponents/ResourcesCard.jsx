import React from "react";
import img1 from "../../assets/images/avater1.svg";
import img2 from "../../assets/images/avater2.svg";
import img3 from "../../assets/images/avater3.svg";
import img4 from "../../assets/images/avater4.svg";
import Button from "../../shared/Button";

const ResourcesCard = ({ icon, cat, desc, user }) => {
  return (
    <div className="flex flex-col gap-5 lg:gap-[30px] 2xl:gap-[50px]">
      <div className="flex flex-col gap-6 lg:gap-[30px] 2xl:gap-[50px]">
        <img src={icon} alt="" className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] 2xl:w-[80px] 2xl:h-[80px]" />
        <div>
        <h3 className="font-kumbh font-semibold text-2xl lg:text-3xl 2xl:text-4xl text-white">{cat}</h3>
        <p className="text-sm lg:text-base 2xl:text-xl text-[#98989A]">{desc}</p>
      </div>
       <Button text={`Download ${cat} Now`} className="w-full md:w-full" />
      </div>
    
      
     
      <div className="flex justify-center bg-[#1A1A1A] py-5 px-[30px] gap-[30px] rounded">
        <div>
          <p className="text-[#98989a] text-sm 2xl:text-lg">Downloaded By (update)</p>
          <span className="font-semibold text-white text-lg lg:text-xl 2xl:text-2xl">{user}+ Users</span>
        </div>
        <div className="flex bg-[#141414] w-fit px-2">
          <img className="relative" src={img1} alt="" />
          <img className="relative right-3" src={img2} alt="" />
          <img className="relative right-6" src={img3} alt="" />
          <img className="relative right-9" src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ResourcesCard;
