import React from "react";

import LeftHeroSec from "./homeComponents/leftHeroSec";
import RightHeroSec from "./homeComponents/RightHeroSec";
import BottomHeroSec from "./homeComponents/BottomHeroSec";


const HeroSection = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-between  bg-[#141414] font-inter  border-y border-[#262626]">
       
       <LeftHeroSec />
       <RightHeroSec />
       <BottomHeroSec />
      </div>
    </section>
  );
};

export default HeroSection;
