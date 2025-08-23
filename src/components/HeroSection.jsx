import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import bgImage from "../assets/images/AbstractDesign.png";
import img1 from "../assets/images/image1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";

const HeroSection = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-between  bg-[#141414] font-inter  border-y border-[#262626]">
        <div className="flex flex-col gap-[30px] lg:gap-[100px] basis-[57.55%] pt-10 lg:pt-[100px]">
          <div className="flex flex-col gap-[14px] justify-center md:gap-5 pl-[16px] md:pl-[40px] lg:pl-[80px]">
            <p className="font-kumbh font-medium text-[#666666] text-lg md:text-xl lg:text-[22px]">
              Your Journey to Tomorrow Begins Here
            </p>
            <h1 className="font-kumbh font-medium text-white text-3xl md:text-4xl lg:text-[55px] lg:leading-none">
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <p className="text-[#7E7E81] text-sm md:text-base">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </p>
          </div>
          <div className="flex w-full border-y border-[#262626] pl-[16px] md:pl-[40px] lg:pl-[80px]">
            <div className="flex-1 py-5 md:py-6 lg:py-[30px] border-r border-[#262626]">
              <span className="font-semibold text-2xl lg:text-3xl text-white">
                300 <span className="text-[#FFD11A]">+</span>
              </span>
              <p className="text-[#98989A] text-sm lg:text-">
                Resources available
              </p>
            </div>
            <div className="flex-1 py-5 md:py-6 lg:py-[30px] px-4 md:px-6 lg:px-10 border-r border-[#262626]">
              <span className="font-semibold text-2xl lg:text-3xl text-white">
                12k <span className="text-[#FFD11A]">+</span>
              </span>
              <p className="text-[#98989A] text-sm lg:text-">Total Downloads</p>
            </div>
            <div className="flex-1 py-5 md:py-6 lg:py-[30px] px-4 md:px-6 lg:px-10">
              <span className="font-semibold text-2xl lg:text-3xl text-white">
                10k <span className="text-[#FFD11A]">+</span>
              </span>
              <p className="text-[#98989A] text-sm lg:text-">Active Users</p>
            </div>
          </div>
        </div>


        <div className="basis-[42.44%]  relative border-l border-[#262626] ">
          <div
            className="absolute inset-0 bg-no-repeat bg-left-top opacity-30 z-0"
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>
          <div className=" flex flex-col justify-end h-[100%] m-auto p-10 gap-5 pt-[100px] lg:pt-[150px]">
            <div className="flex">
              <img className="relative" src={img1} alt="" />
              <img className="relative right-3" src={img2} alt="" />
              <img className="relative right-6" src={img3} alt="" />
              <img className="relative right-9" src={img4} alt="" />
            </div>
            <div className="flex flex-col w-fit ">
              <h3 className="text-white font-medium text-lg lg:text-xl">
                Explore 1000+ resources
              </h3>
              <p className="text-[#98989A] text-sm lg:text-base">
                Over 1,000 articles on emerging tech trends and breakthroughs.
              </p>
            </div>
            <button className="flex items-center justify-center text-[#98989A] text-sm border border-[#262626] rounded py-[14px] w-full md:w-fit px-5">
              Explore Resources
              <span className="text-[#FFD11A] text-xl">
                <GoArrowUpRight />
              </span>
            </button>
          </div>
        </div>
        <div className="text-white block">bottom</div>
      </div>
    </section>
  );
};

export default HeroSection;
