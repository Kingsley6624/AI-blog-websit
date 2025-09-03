import React from "react";
import { footerLinks, resources } from "../../data/footerLinks";
import { GoArrowUpRight } from "react-icons/go";

const FooterLinks = () => {
  return (
    <div className="mx-[5.55%] py-[40px] lg:py-[60px] 2xl:py-[80px] border-b border-[#262626] ">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 p-8">
        {footerLinks.map((section) => (
          <ul
            key={section.id}
            className="flex flex-col gap-4 lg:gap-7 2xl:gap-9"
          >
            <li className="font-medium text-white text-base lg:text-lg 2xl:text-xl">
              {section.category}
            </li>
            <ul className="flex flex-col gap-2 lg:gap-3 2xl:gap-lg">
              {section.links.map((link, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <a
                    className="text-[#666666] text-sm lg:text-base 2xl:text-lg whitespace-nowrap"
                    href={link.url}
                  >
                    {link.title}
                  </a>
                  {link.isnew && (
                    <span className="relative rounded lg:rounded-md p-[1px] bg-gradient-to-tr from-[#262626] from-50% to-[#FFD119] to-100%">
                      <span className="bg-black block  text-white text-xs lg:text-sm 2xl:text-base  py-[2px] px-[10px] rounded lg:py-1 lg:px-3 lg:rounded-md">
                        New
                      </span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </ul>
        ))}
        <div className="col-span-2 md:col-span-1 ">
          <h4 className="font-medium text-white text-base lg:text-lg 2xl:text-xl mb-4 lg:mb-7 2xl:mb-9">
            Resources
          </h4>

          <ul className="flex flex-wrap md:flex-col gap-3 lg:gap-3 2xl:gap-lg">
            {resources.map((resource, index) => (
              <li
                key={index}
                className="flex gap-2  border border-[#262626] rounded"
              >
                <a
                  className="flex items-end gap-1 text-[#98989A] text-sm lg:text-base 2xl:text-lg whitespace-nowrap py-2 px-[14px]"
                  href={resource.url}
                >
                  {resource.title}
                  <span className="text-[#ffd11a] text-lg">
                    <GoArrowUpRight />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default FooterLinks;
