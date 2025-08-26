import React from 'react'
import bgImage from "../../assets/images/AbstractDesign.png";
import img1 from "../../assets/images/image1.png";
import img2 from "../../assets/images/image2.png";
import img3 from "../../assets/images/image3.png";
import img4 from "../../assets/images/image4.png";

import Button from '../../shared/Button';


const RightHeroSec = () => {
  return (
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
            <Button text="Explore Resources" />
          </div>
        </div>
  )
}

export default RightHeroSec