import React from "react";
import { footerLinks } from "../../data/footerLinks";

const FooterLinks = () => {
  return (
    <div className="px-[5.55%] py-[40px] lg:py-[60px] 2xl:py-[80px]">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 p-8 ">
        {footerLinks.map((section) => (
          <ul
            key={section.id}
            className="flex flex-col gap-4 lg:gap-7 2xl:gap-9"
          >
            <li className="text-white">{section.category}</li>
            <ul className="flex flex-col gap-2 lg:gap-3 2xl:gap-lg">
              {section.links.map((link, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <a
                    className="text-[#666666] text-sm lg:text-base 2xl:text-lg"
                    href={link.url}
                  >
                    {link.title}
                  </a>
                  {link.isnew && (
                    <span className='relative rounded lg:rounded-md p-[1px] bg-[linear-gradient(to-top-right,#262626_30%,#FFD119_70%)]'>
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
      </div>
    </div>
  );
};

export default FooterLinks;
