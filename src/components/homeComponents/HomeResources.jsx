import React from "react";
import SectionHead from "../../shared/SectionHead";
import Button from "../../shared/Button";
import ResourceCard from "./ResourceCard";
import ResourceCard2 from "./ResourceCard2";
import { resourcesDatas } from "../../data/ResourcesData";
import { GoArrowUpRight } from "react-icons/go";

const HomeResources = () => {
  const ebook = resourcesDatas.at(0);
  const whitepaper = resourcesDatas.at(1);
  return (
    <section>
      <SectionHead>
        <div className="flex flex-col gap-[10px]">
          <span className="w-fit bg-[#333333] py-1 px-2 font-medium text-white text-sm lg:text-base 2xl:text-lg rounded">
            Your Gateway to In-Depth Information
          </span>
          <h3 className="font-kumbh text-white text-3xl lg:text-5xl 2xl:text-6xl">
            Unlock Valuable Knowledge with FutureTech's Resources
          </h3>
        </div>
        <Button text="View All Resources" className="w-full" icon={<GoArrowUpRight />} />
      </SectionHead>
      <div className="">
        <div className="flex flex-col lg:flex-row px-[5.55%] border-b border-[#2A2A2A]">
          <ResourceCard {...ebook} />
          <ResourceCard2 {...ebook} />
        </div>
        <div className="flex flex-col lg:flex-row px-[5.55%] border-b border-[#2A2A2A]">
          <ResourceCard {...whitepaper} />
          <ResourceCard2 {...whitepaper} />
        </div>
      </div>
    </section>
  );
};

export default HomeResources;
