import React from 'react'

const SectionHead = ({children}) => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-[30px] bg-[#191919] py-10 px-4  md:p-[40px] lg:p-[80px] 2xl:px-[160px] 2xl-py-[120px]'>
     {children}
    </div>
  )
}

export default SectionHead