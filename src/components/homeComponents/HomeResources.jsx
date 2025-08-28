import React from "react";
import SectionHead from "../../shared/SectionHead";
import Button from "../../shared/Button";
import ResourcesCard from "./ResourcesCard";
import { resourcesData } from "../../data/ResourcesData";

const HomeResources = () => {
  const ebook = resourcesData.at(0);
  const whitepaper = resourcesData.at(1);
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
        <Button text="View All Resources" className="w-full" />
      </SectionHead>
      <div>
        <div className="flex md:flex-col px-[5.55%]">
          <ResourcesCard {...ebook} />
          <div></div>
        </div>
        <div className="flex md:flex-col px-[5.55%]">
          <ResourcesCard {...whitepaper} />
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default HomeResources;
