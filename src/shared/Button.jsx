import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Button = ({text, link, className}) => {
  return (
                <button className={`bg-[#141414] flex items-center justify-center text-[#98989A] text-sm whitespace-nowrap border border-[#262626] rounded py-[14px]  md:w-fit h-fit px-5 ${className}`} onClick={link}>
                  {text}
                  <span className="text-[#ffd11a] text-xl">
                    <GoArrowUpRight />
                  </span>
                </button>
  )
}

export default Button