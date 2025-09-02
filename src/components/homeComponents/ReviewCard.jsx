import React from "react";
import { FaStar } from "react-icons/fa6";

const ReviewCard = ({ image, name, address, reviewText, className }) => {
  return (
    <div className={`bg-[#141414] flex flex-col flex-1 items-center gap-[30px] md:px-[30px] lg:px-[40px] 2xl:px-[50px] py-[40px] ${className}`}>
      <div className="flex items-center gap-4 mb-5">
        <img src={image} alt="" />
        <div>
          <h3 className=" text-white font-medium text-lg 2xl:text-xl">{name}</h3>
          <span className="text-[#666666] text-base 2xl:text-lg">{address}</span>
        </div>
      </div>
      <div>
        <div className="bg-[#1A1A1A] flex flex-col items-center border border-[#262626] px-5 pb-[30px] rounded-xl">
          <div className="bg-[#141414] flex gap-1 2xl:gap-2 rounded-full py-2 px-3 border border-[#262626] relative bottom-4">
            <FaStar className="text-yellow-500 w-5 h-5 2xl:w-6 2xl:h-6" />
            <FaStar className="text-yellow-500 w-5 h-5 2xl:w-6 2xl:h-6" />
            <FaStar className="text-yellow-500 w-5 h-5 2xl:w-6 2xl:h-6" />
            <FaStar className="text-yellow-500 w-5 h-5 2xl:w-6 2xl:h-6" />
            <FaStar className="text-yellow-500 w-5 h-5 2xl:w-6 2xl:h-6" />
          </div>
          <p className="text-center text-white text-sm lg:text-base 2xl:text-lg">{reviewText}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
