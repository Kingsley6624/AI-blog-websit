import React from 'react'

const leftHeroSec = () => {
  return (
     <div className="flex flex-col gap-[30px] lg:gap-[100px] basis-[57.55%] pt-10 lg:pt-[100px]">
              <div className="flex flex-col gap-[14px] justify-center md:gap-5 pl-[16px] md:pl-[40px] lg:pl-[80px] 2xl:pl-[160px] 2xl:w-[760px]">
                <p className="font-kumbh font-medium text-[#666666] text-lg md:text-xl lg:text-[22px]">
                  Your Journey to Tomorrow Begins Here
                </p>
                <h1 className="font-kumbh font-medium text-white text-3xl md:text-4xl lg:text-[55px] lg:leading-none 2xl:text-7xl">
                  Explore the Frontiers of Artificial Intelligence
                </h1>
                <p className="text-[#7E7E81] text-sm md:text-base">
                  Welcome to the epicenter of AI innovation. FutureTech AI News is
                  your passport to a world where machines think, learn, and reshape
                  the future. Join us on this visionary expedition into the heart of
                  AI.
                </p>
              </div>
              <div className="flex w-full border-y border-[#262626] pl-[16px] md:pl-[40px] lg:pl-[80px] 2xl:pl-[160px]">
                <div className="flex-1 py-5 md:py-6 lg:py-[30px] border-r border-[#262626]">
                  <span className="font-semibold text-2xl lg:text-3xl 2xl:text-4xl text-white">
                    300 <span className="text-[#FFD11A]">+</span>
                  </span>
                  <p className="text-[#98989A] text-sm lg:text-sm 2xl:text-lg">
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
    
  )
}

export default leftHeroSec