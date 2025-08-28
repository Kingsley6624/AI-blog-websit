import React from "react";
import SectionHead from "../shared/SectionHead";
import Button from "../shared/Button";
import { NavLink } from "react-router-dom";
import BlogCard_s from "./BlogCard_s";
import BlogCard_l from "./BlogCard_l";
import {blogData} from "../data/BlogData";
import { useMediaQuery} from 'react-responsive'

function BlogPosts() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

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
        <Button text="View All Blogs" className="w-full" />
      </SectionHead>
      <nav className="overflow-x-auto scroll-smooth no-scrollbar  px-4 md:px-[40px] lg:px-[80px] 2xl:px-[160px] py-10">
        <div className="flex justify-between gap-[14px] min-w-max ">
          {[
            "All",
            "Quantum Computing",
            "AI Ethics",
            "Space Exploration",
            "Biotechnology",
            "Renewable Energy",
          ].map((category) => (
            <NavLink
              key={category}
            
              className={({ isActive }) =>
                isActive
                  ? "text-white flex justify-center min-w-[151.83px] py-[18px] px-4 whitespace-nowrap border border-[#98989A] rounded-[7px]"
                  : "text-[#98989A] flex justify-center min-w-[151.83px] py-[18px] px-4 whitespace-nowrap border border-[#98989A] rounded-[7px]"
              }
            >
              {category}
            </NavLink>
          ))}
        </div>
      </nav>
        <div>{blogData.map((data)=> (
          isDesktop ? (
            <BlogCard_l key={data.id} {...data} />
          ) : (
            <BlogCard_s key={data.id} {...data} />
          )
        ))}</div>
    </section>
  );
}

export default BlogPosts;
