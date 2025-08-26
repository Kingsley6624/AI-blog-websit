import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

import logo from "../assets/icons/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    isActive
      ? "border border-[#333333] font-sans text-white bg-[#141414] px-3 py-1 rounded"
      : "font-sans text-[#7E7E81] px-3 py-1";
  return (
    <>
      <div className="bg-[#141414] pt-[40px] pb-[14px] flex sm:justify-center justify-between items-center gap-[10px] px-[16px] md:px-[40px] lg:px-[80px] 2xl:px-[160px]">
        <span className="text-[#98989A] text-xs font-inter font-normal">
          Subscribe to our Newsletter For Blogs and Resources
        </span>
        <button className="text-[#FFD11A] text-xl">
          <GoArrowUpRight />
        </button>
      </div>

      <nav>
        <div className="flex flex-col md:flex-row  bg-[#1A1A1A] py-5 gap-4 md:items-center justify-between font-inter font-normal px-[16px] md:px-[40px] lg:px-[80px] 2xl:px-[160px] ">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="w-[35px] h-[35px]" />
              <span className="text-white ">FutureTech</span>
            </div>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-white text-[34px] md:hidden"
            >
              {isOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>

          {isOpen && (
            <div className="flex flex-col items-start gap-2 md:hidden">
              <NavLink
                to="/"
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/news"
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                News
              </NavLink>
              <NavLink
                to="/podcasts"
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                Podcasts
              </NavLink>
              <NavLink
                to="/resources"
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                Resources
              </NavLink>
              <NavLink
                to="/about"
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </NavLink>
            </div>
          )}
          <div className="md:flex items-start gap-2 hidden md:items-center md:text-xs lg:text-sm xl:text-lg">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/news" className={linkClass}>
              News
            </NavLink>
            <NavLink to="/podcasts" className={linkClass}>
              Podcasts
            </NavLink>
            <NavLink to="/resources" className={linkClass}>
              Resources
            </NavLink>
          </div>
          <div className="md:flex items-start gap-2 hidden md:text-xs lg:text-sm">
            <NavLink
              to="/about"
              className="border border-[#FFD11A] font-medium text-[#141414] bg-[#FFD11A] md:px-[14px] md:py-[10px] rounded-md whitespace-nowrap"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
