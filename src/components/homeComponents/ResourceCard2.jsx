import React from "react";
import Button from "../../shared/Button";
import { IoEyeOutline } from "react-icons/io5";

const ResourceCard2 = ({ subheading, topics, image, cat, quantity, expertise }) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-[30px] py-[40px] lg:py-[60px] lg:pl-[60px] 2xl:py-[80px] lg:border-l border-[#2A2A2A]">
      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-6 2xl:gap-[30px]">
        <h3 className="font-semibold text-white text-lg lg:text-xl 2xl:text-2xl whitespace-nowrap basis-1/3 self-center">{subheading}</h3>
        <p className="text-[#98989A] text-sm lg:text-base 2xl:text-lg">{topics}</p>
      </div>
      <img src={image} alt="" />
      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-6 2xl:gap-[30px]">
        <div className="bg-[#1A1A1A] flex flex-col p-5 rounded-lg">
          <span className="text-[#98989A] text-sm lg:text-base 2xl:text-lg">Total {cat}</span>
          <span className="font-semibold text-white text-base lg:text-lg 2xl:text-xl whitespace-nowrap">
            over {quantity}
          </span>
        </div>
        <div className="lg:w-full bg-[#1A1A1A] flex justify-between items-center p-5 rounded-lg">
          <div className="flex flex-col">
            <span className="text-[#98989A] text-sm lg:text-base 2xl:text-lg">Download Formats</span>
            <span className="text-white font-semibold text-base lg:text-lg 2xl:text-xl">PDF format for access.</span>
          </div>

          <Button onClick={() => {}} text="Preview" className='w-fit' icon={<IoEyeOutline />} />

        </div>
      </div>
      <div className="bg-[#1A1A1A] flex flex-col p-5 rounded-lg">
        <span className="text-[#98989A] text-sm lg:text-base 2xl:text-lg">Average Author Expertise</span>
        <span className="font-semibold text-white text-base lg:text-lg 2xl:text-xl">{expertise}</span>
      </div>
    </div>
  );
};

export default ResourceCard2;
