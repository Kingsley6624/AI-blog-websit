import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import icon1 from "../../assets/icons/hero_icon1.png";
import icon2 from "../../assets/icons/hero_icon2.png";
import icon3 from "../../assets/icons/hero_icon3.png";
import icon4 from "../../assets/icons/hero_icon4.png";

const BottomHeroSec = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center border-y border-[#262626]  md:px-[40px] lg:px-[80px] 2xl:px-[160px] lg:gap-[50px] 2xl:gap-[80px]">
      <div className=" w-full flex  flex-1 justify-between py-[30px] lg:py-[40px] 2xl:py-[50px] px-[16px] md:pl-0 lg:pr-[50px] 2xl:pr-[80px] border-r border-[#262626] border-b">
        <div className="flex flex-col gap-[10px] lg:gap-5 2xl:gap-[30px] ">
          <img
            className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] 2xl:w-[50px] 2xl:h-[50px]"
            src={icon1}
            alt=""
          />
          <div>
            <h3 className="font-medium text-base lg:text-lg 2xl:text-xl text-white">
              Latest News Updates
            </h3>
            <p className=" text-sm lg:text-base 2xl:text-lg text-[#7E7E81]">
              Stay Current
            </p>
          </div>

          <p className="font-kumbh text-sm lg:text-base 2xl:text-lg text-[#7E7E81]">
            Over 1,000 articles published monthly
          </p>
        </div>
        <div className="self-center flex justify-center items-center w-10 h-10 lg:h-11 lg:w-11 2xl:h-[52px] 2xl:w-[52px] rounded-full bg-[#FFD11A]">
          <GoArrowUpRight />
        </div>
      </div>

      <div className="flex flex-1 w-full justify-between py-[30px] lg:py-[40px] 2xl:py-[50px] px-[16px] lg:pr-[50px] 2xl:pr-[80px] border-r border-[#262626] border-b">
        <div className="flex flex-col  gap-[10px] lg:gap-5 2xl:gap-[30px] ">
          <img
            className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] 2xl:w-[50px] 2xl:h-[50px]"
            src={icon4}
            alt=""
          />
          <div>
            <h3 className="font-medium text-base lg:text-lg 2xl:text-xl text-white">
              Expert Contributors
            </h3>
            <p className=" text-sm lg:text-base 2xl:text-lg text-[#7E7E81]">
              rusted Insights
            </p>
          </div>

          <p className="font-kumbh text-sm lg:text-base 2xl:text-lg text-[#7E7E81]">
            50+ renowned AI experts on our team
          </p>
        </div>
        <div className="self-center flex justify-center items-center w-10 h-10 lg:h-11 lg:w-11 2xl:h-[52px] 2xl:w-[52px] rounded-full bg-[#FFD11A]">
          <GoArrowUpRight />
        </div>
      </div>

      <div className="flex flex-1 w-full justify-between py-[30px] lg:py-[40px] 2xl:py-[50px] px-[16px] md:pr-0 ">
        <div className="flex flex-col  gap-[10px] lg:gap-5 2xl:gap-[30px] ">
          <img
            className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] 2xl:w-[50px] 2xl:h-[50px]"
            src={icon2}
            alt=""
          />
          <div>
            <h3 className="font-medium text-base lg:text-lg 2xl:text-xl text-white">
              Global Readership
            </h3>
            <p className=" text-sm lg:text-base 2xl:text-lg text-[#7E7E81]">
              Worldwide Impact
            </p>
          </div>

          <p className="font-kumbh text-sm lg:text-base 2xl:text-lg text-[#7E7E81]">
            2 million monthly readers
          </p>
        </div>
        <div className="self-center flex justify-center items-center w-10 h-10 lg:h-11 lg:w-11 2xl:h-[52px] 2xl:w-[52px] rounded-full bg-[#FFD11A]">
          <GoArrowUpRight />
        </div>
      </div>
    </div>
    // <div className="w-full">
    //   <div className=" flex flex-col md:flex-row items-center md:border-y border-[#262626] gap-[30px] md:gap-[20px] lg:gap-[40px] 2xl:gap-[80px] px-[16px] md:px-[20px] lg:px-[80px] 2xl:px-[160px]">
    //     <div className="w-full flex flex-1 justify-between border-y border-[#262626] lg-border-r md:border-[#262626] md:pr-[20px] lg:pr-[40px] 2xl:pr-[80px] pb-[30px] md:py-[30px] lg:py-[40px] 2xl:py-[50px]">
    //       <div className="flex flex-col gap-[10px] lg:gap-5 2xl:gap-[30px] ">
    //         <img
    //           className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] 2xl:w-[50px] 2xl:h-[50px]"
    //           src={icon1}
    //           alt=""
    //         />
    //         <div>
    //           <h3 className="font-medium text-base lg:text-lg 2xl:text-xl text-white">
    //             Latest News Updates
    //           </h3>
    //           <p className=" text-sm lg:text-base 2xl:text-lg text-[#7E7E81]">
    //             Stay Current
    //           </p>
    //         </div>

    //         <p className="font-kumbh text-sm lg:text-base 2xl:text-lg text-[#7E7E81]">
    //           Over 1,000 articles published monthly
    //         </p>
    //       </div>
    //       <div className="self-center flex justify-center items-center w-10 h-10 lg:h-11 lg:w-11 2xl:h-[52px] 2xl:w-[52px] rounded-full bg-[#FFD11A]">
    //         <GoArrowUpRight />
    //       </div>
    //     </div>

    //     <div className="w-full flex flex-1 justify-between border-y border-[#262626] md:border-[#262626] md:pr-[15px] lg:pr-[40px] 2xl:pr-[80px] pb-[30px] md:py-[30px] lg:py-[40px] 2xl:py-[50px]">
    //       <div className="flex flex-col gap-[10px] lg:gap-5 2xl:gap-[30px] ">
    //         <img
    //           className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] 2xl:w-[50px] 2xl:h-[50px]"
    //           src={icon4}
    //           alt=""
    //         />
    //         <div>
    //           <h3 className="font-medium text-base lg:text-lg 2xl:text-xl text-white">
    //             Expert Contributors
    //           </h3>
    //           <p className=" text-sm lg:text-base 2xl:text-lg text-[#7E7E81]">
    //             Trusted Insights
    //           </p>
    //         </div>

    //         <p className="font-kumbh text-sm lg:text-base 2xl:text-lg text-[#7E7E81]">
    //           50+ renowned AI experts on our team
    //         </p>
    //       </div>
    //       <div className="self-center flex justify-center items-center w-10 h-10 lg:h-11 lg:w-11 2xl:h-[52px] 2xl:w-[52px] rounded-full bg-[#FFD11A]">
    //         <GoArrowUpRight />
    //       </div>
    //     </div>

    //     <div className="w-full flex flex-1 justify-between border-y border-[#262626] pb-[30px] md:py-[30px] lg:py-[40px] 2xl:py-[50px]">
    //       <div className="flex flex-col gap-[10px] lg:gap-5 2xl:gap-[30px] ">
    //         <img
    //           className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] 2xl:w-[50px] 2xl:h-[50px]"
    //           src={icon2}
    //           alt=""
    //         />
    //         <div>
    //           <h3 className="font-medium text-base lg:text-lg 2xl:text-xl text-white">
    //             Global Readership
    //           </h3>
    //           <p className=" text-sm lg:text-base 2xl:text-lg text-[#7E7E81]">
    //             Worldwide Impact
    //           </p>
    //         </div>

    //         <p className="font-kumbh text-sm lg:text-base 2xl:text-lg text-[#7E7E81]">
    //           2 million monthly readers
    //         </p>
    //       </div>
    //       <div className="self-center flex justify-center items-center w-10 h-10 lg:h-11 lg:w-11 2xl:h-[52px] 2xl:w-[52px] rounded-full bg-[#FFD11A]">
    //         <GoArrowUpRight />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default BottomHeroSec;
