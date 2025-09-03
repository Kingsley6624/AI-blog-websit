import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center gap-5 text-center py-6  px-[5.55%]">
      <div className="flex gap-6 text-2xl text-white md:hidden">
        <span className="text-xl 2xl:text-2xl">
          <FaTwitter />
        </span>

        <span className="text-xl 2xl:text-2xl">
          <FaMedium />
        </span>

        <span className="text-xl 2xl:text-2xl">
          <FaLinkedin />
        </span>
      </div>
      <div className="flex gap-2 text-sm text-[#666666] 2xl:text-lg">
        <span className="border-r border-[#666666] pr-2">Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
       <div className="hidden md:flex  gap-6 text-2xl text-white">
        <span className="text-xl 2xl:text-2xl">
          <FaTwitter />
        </span>

        <span className="text-xl 2xl:text-2xl">
          <FaMedium />
        </span>

        <span className="text-xl 2xl:text-2xl">
          <FaLinkedin />
        </span>
      </div>
      <span className="text-sm text-[#666666] 2xl:text-lg">© 2025 FutureTech. All rights reserved.</span>
    </div>
  );
};

export default SocialLinks;
