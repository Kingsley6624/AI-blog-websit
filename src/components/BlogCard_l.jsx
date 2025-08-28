import React from "react";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa6";
import { RiTelegram2Line } from "react-icons/ri";
import Button from "../shared/Button";

const BlogCard_l = ({ img, name, cat, date, heading, content, like, comment, share }) => {
  return (
    <div className="flex justify-between px-[5.55%] border-y border-[#98989A]">
      <div className="basis-[21.1%] flex gap-2 ">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-white font-semibold text-lg 2xl:text-xl whitespace-nowrap">
            {name}
          </h2>
          <p className="text-[#98989A] text-sm lg:text-base 2xl:text-lg ">
            {cat}
          </p>
        </div>
      </div>

      <div className="basis-[64.9%] flex flex-col gap-4 self-start">
        <span className="text-[#98989A] text-base lg:text-lg 2xl:text-xl font-semibold">
          {date}
        </span>
        <div>
          <h3 className="font-semibold text-white text-lg 2xl:text-2xl">
            {heading}
          </h3>
          <p className="text-[#98989A] text-sm lg:text-base 2xl:text-lg">
            {content}
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1 text-[20px] 2xl:text-[24px] text-[#98989A] border border-[#98989A] rounded-full px-2 py-1">
            <FcLike />
            <span className="text-[#98989A] text-sm 2xl:text-lg">{like}</span>
          </div>
          <div className="flex items-center gap-1 text-[20px] 2xl:text-[24px] text-[#98989A] border border-[#98989A] rounded-full px-2 py-1">
            <FaRegComment />
            <span className="text-[#98989A] text-sm 2xl:text-lg">
              {comment}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[20px] 2xl:text-[24px] text-[#98989A] border border-[#98989A] rounded-full px-3 py-[6px]">
            <RiTelegram2Line />
            <span className="text-[#98989A] text-sm 2xl:text-lg">{share}</span>
          </div>
        </div>
      </div>
     <div className="self-center w-fit"> <Button text="View Blog" /></div>
    </div>
  );
};

export default BlogCard_l;
