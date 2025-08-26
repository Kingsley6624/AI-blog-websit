import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Button = ({text, link}) => {
  return (
                <button className="flex items-center justify-center text-[#98989A] text-sm border border-[#262626] rounded py-[14px] w-full md:w-fit px-5" onClick={link}>
                  {text}
                  <span className="text-[#FFD11A] text-xl">
                    <GoArrowUpRight />
                  </span>
                </button>
  )
}

export default Button