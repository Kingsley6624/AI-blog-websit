import React from "react";
import SectionHead from "../../shared/SectionHead";
import Button from "../../shared/Button";
import { GoArrowUpRight } from "react-icons/go";
import { reviewDatas } from "../../data/ReviewData";
import ReviewCard from "./ReviewCard";
import { useMediaQuery } from "react-responsive";

const Review = () => {
  const issmallscreen = useMediaQuery({ query: "(max-width: 768px)" });
  const displayedReviews = issmallscreen
    ? reviewDatas.slice(0, 3)
    : reviewDatas;
  return (
    <section>
      <SectionHead>
        <div className="flex flex-col gap-[10px]">
          <span className="w-fit bg-[#333333] py-1 px-2 font-medium text-white text-sm lg:text-base 2xl:text-lg rounded">
            What Our Readers Say
          </span>
          <h3 className="font-kumbh text-white text-3xl lg:text-5xl 2xl:text-6xl">
            Real Words from Real Readers
          </h3>
        </div>
        <Button
          text="View All Testimonials"
          className="w-full"
          icon={<GoArrowUpRight />}
        />
      </SectionHead>
      <div className="px-[5.55%] md:px-0 bg-[#141414]">
        <div className=" bg-[#262626] grid grid-cols-1 md:grid-cols-3  gap-1">
          {displayedReviews.map((data, index) => {

            // creating padding classes
            const paddingLeft = index % 3 === 0 ? 'md:pl-[60px] lg:pl-[80px] 2xl:pl-[160px]' : '';
            const paddingRight = index % 3 === 2 ? 'md:pr-[60px] lg:pr-[80px] 2xl:pr-[160px]' : '';
            
            return <ReviewCard key={data.id} {...data} className={`${paddingLeft} ${paddingRight}`} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Review;
