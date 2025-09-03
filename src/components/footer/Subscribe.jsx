import React from "react";
import { SubscribeData } from "../../data/SubscribeData";
import SubscribeCard from "./SubscribeCard";
import logo from "../../assets/icons/logo.svg";

const Subscribe = () => {
  return (
    <section>
      <div className="bg-[#1A1A1A] flex flex-col px-[5.55%] py-[40px] lg:py-[80px] 2xl:py-[120px] gap-[40px] lg:gap-[50px] 2xl:gap-[100px]">
        <div className="flex flex-col md:flex-row md:items-center md:gap-[40px] lg:gap-[60px] 2xl:gap-[80px] ">
          <div className="flex items-center gap-5 mb-5 md:mb-0">
          <span >
            <img className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] 2xl:w-[150px] 2xl:h-[150px]" src={logo} alt="Logo" />
          </span>
          <span className=" flex md:hidden w-fit h-fit bg-[#333333] py-1 px-2 font-medium text-white text-sm lg:text-base 2xl:text-lg rounded">
              Learn, Connect, and Innovate
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className=" hidden md:block w-fit bg-[#333333] py-1 px-2 font-medium text-white text-sm lg:text-base 2xl:text-lg rounded">
              Learn, Connect, and Innovate
            </span>
            <h3 className="font-kumbh font-medium text-white text-3xl lg:text-5xl 2xl:text-6xl">
              Be Part of the Future Tech Revolution
            </h3>
            <p className="text-[#98989A] text-sm lg:text-base 2xl:text-lg">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </p>
          </div>
        </div>
        <div className="bg-[#141414] flex flex-col md:flex-row p-[10px] rounded-[10px] border border-[#2A2A2A] gap-[10px]">
          {SubscribeData.map((item) => (
            <SubscribeCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
