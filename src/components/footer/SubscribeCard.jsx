import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { MdDescription } from "react-icons/md";

const SubscribeCard = ({ title, description }) => {
  return (
    <div className="bg-[#1A1A1A] flex flex-col gap-[10px] rounded-[10px] border border-[#2A2A2A] p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-white text-base lg:text-lg 2xl:text-xl">{title}</h3>
        <div className="self-center flex justify-center items-center w-10 h-10 lg:h-11 lg:w-11 2xl:h-[52px] 2xl:w-[52px] rounded-full bg-[#FFD11A]">
          <GoArrowUpRight />
        </div>
      </div>
      <p className="text-[#98989A] text-sm lg:text-base 2xl:text-lg">{description}</p>
    </div>
  );
};

export default SubscribeCard;
