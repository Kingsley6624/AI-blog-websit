import React from "react";
import SectionHead from "../shared/SectionHead";
import Button from "../shared/Button";
import { NavLink } from "react-router-dom";

function BlogPost() {
  return (
    <section>
      <SectionHead>
        <div className="flex flex-col gap-[10px]">
          <span className="w-fit bg-[#333333] py-1 px-2 font-medium text-white text-sm lg:text-base 2xl:text-lg rounded">
            A Knowledge Treasure Trove
          </span>
          <h3 className="font-kumbh text-white text-3xl lg:text-5xl 2xl:text-6xl">
            Explore FutureTech's In-Depth Blog Posts
          </h3>
        </div>
        <Button text="View All Blogs" />
      </SectionHead>
      <nav className=" overflow-x-auto scroll-smooth no-scrollbar px-4 ">
        <div className="flex justify-between gap-[14px] px-4 md:px-40 lg:px-80 2xl:px-160 py-10">
          <NavLink className="whitespace-nowrap ">All</NavLink>
          <NavLink className="w-[151.83px] py-[18px] whitespace-nowrap boder border-[#] ">Quantum Computing</NavLink>
          <NavLink className="whitespace-nowrap">AI Ethics</NavLink>
          <NavLink className="whitespace-nowrap">Space Expolation</NavLink>
          <NavLink className="whitespace-nowrap">Biotechnology</NavLink>
          <NavLink className="whitespace-nowrap">Renewable Energy</NavLink>
        </div>
      </nav>
    </section>
  );
}

export default BlogPost;
