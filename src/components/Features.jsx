import React from "react";
import SectionHead from "../shared/SectionHead";
import Button from "../shared/Button";
import { cardItems } from "../data/FeaturesData";
import icon1 from '../assets/icons/hero_icon3.png'
import icon2 from '../assets/icons/hero_icon5.png'


const Features = () => {
  const techDatas = cardItems.slice(0, 4);
  const insightsDatas = cardItems.slice(4, 8);
  return (
    <section className="font-inter bg-[#191919]">
      <SectionHead className="">
        <div className="flex flex-col gap-[10px]">
          <span className="w-fit bg-[#333333] py-1 px-2 font-medium text-white text-sm lg:text-base 2xl:text-lg rounded">
            Unlock the Power of
          </span>
          <h3 className="font-kumbh text-white text-3xl lg:text-5xl 2xl:text-6xl">
            FutureTech Features
          </h3>
        </div>
      </SectionHead>

      <div className="flex flex-col gap-1">
        <div className="flex flex-col md:flex-row flex-1 gap-1">
          <div className="bg-[#141414] md:basis-[38.41%] flex flex-col justify-center px-4 py-[50px]  md:pl-[40px] lg:pl-[80px]2xl:pl-[160px]">
            <img className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] 2xl:w-[40px] 2xl:h-[40px] mb-[20px] lg:mb-[40px] 2xl:mb-[50px]" src={icon1} alt="" />
            <h2 className="font-kumbh font-semibold text-white text-2xl lg:text-3xl 2xl:text-4xl">Future Technology Blog</h2>
            <p className="text-[#98989A] text-sm lg:text-base 2xl:text-lg">
              Stay informed with our blog section dedicated to future
              technology.
            </p>
          </div>
          <div className="bg-[#141414] grid grid-cols-1 md:grid-cols-2 gap-[10px] lg:gap-[20px] 2xl:gap-[30px] md:basis-[61.59%]  lg:pl-[60px] p-[30px] lg:pr-[80px] lg:py-[60px]">
            {techDatas.map((data) => (
              <div
                key={data.id}
                className=" bg-[#191919] p-6 lg:p-[30px] 2xl:p-[40px]"
              >
                <h4 className="font-medium text-lg text-white lg:text-xl 2xl:text-2xl">
                  {data.head}
                </h4>
                <p className="text-[#98989A] text-sm lg:text-base 2xl:text-lg">
                  {data.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-1">
          <div className="bg-[#141414] md:basis-[38.41%] flex flex-col justify-center px-4 py-[50px] md:pl-[40px] lg:pl-[80px]2xl:pl-[160px]">
            <img className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] 2xl:w-[40px] 2xl:h-[40px] mb-[20px] lg:mb-[40px] 2xl:mb-[50px]" src={icon2} alt="" />
            <h2 className="font-kumbh font-semibold text-white text-2xl lg:text-3xl 2xl:text-4xl">Research Insights Blogs</h2>
            <p className="text-[#98989A] text-sm lg:text-base 2xl:text-lg">
              Dive deep into future technology concepts with our research section.
            </p>
          </div>
          <div className="bg-[#141414] grid grid-cols-1 md:grid-cols-2 gap-[10px] lg:gap-[20px] 2xl:gap-[30px] md:basis-[61.59%] lg:pl-[60px] lg:pr-[80px] p-[30px] lg:py-[60px] ">
            {insightsDatas.map((data) => (
              <div
                key={data.id}
                className=" bg-[#191919] p-6 lg:p-[30px] 2xl:p-[40px]"
              >
                <h4 className="font-medium text-lg text-white lg:text-xl 2xl:text-2xl">
                  {data.head}
                </h4>
                <p className="text-[#98989A] text-sm lg:text-base 2xl:text-lg">
                  {data.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
