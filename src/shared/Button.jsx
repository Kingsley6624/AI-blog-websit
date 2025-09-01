import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Button = ({text, link, className, icon}) => {
  return (
                <button className={`bg-[#141414] flex items-center justify-center text-[#98989A] gap-1 text-sm whitespace-nowrap border border-[#262626] rounded py-[14px]  md:w-fit h-fit px-5 ${className}`} onClick={link}>
                  {text}
                  <span className="text-[#ffd11a] text-xl">
                    {icon}
                  </span>
                </button>
  )
}

export default Button