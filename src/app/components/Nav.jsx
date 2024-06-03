import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Nav = () => {
  return (
   
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
    <div className="h-full flex items-center justify-between md:hidden">
      <Link href="/">
        <div className="flex">
          <img src="/frame.svg" alt="uifry logo" />
          <img src="/vector.svg" alt="uifry" className="ml-2" />
        </div>
      </Link>
      <Menu />
    </div>
    <div className="hidden md:flex justify-between items-center 2xl:mx-[130px] lg:mx-[130px] 2xl:mt-[40px] lg:mt-[40px]">
      <div className="flex items-center">
        <img src="/frame.svg" alt="uifry logo" className="w-8 h-8 mr-2" />
        <img src="/vector.svg" alt="uifry" className="w-[64px] h-[29px]" />
        <ul className="hidden md:flex space-x-8 text-lg font-medium 2xl:ml-[40px] lg:ml-[40px]">
          <li><a href="#" className="text-main text-xl leading-[26px] font-clash font-bold">Home</a></li>
          <li><a href="#" className="text-black hover:text-red-500 font-medium font-clash text-xl leading-[26px]">About Us</a></li>
          <li><a href="#" className="text-black hover:text-red-500 font-medium font-clash text-xl leading-[26px]">Pricing</a></li>
          <li><a href="#" className="text-black hover:text-red-500 font-medium font-clash text-xl leading-[26px]">Features</a></li>
        </ul>
      </div>
      <button className="hidden md:inline-block bg-black text-white px-[46px] py-[16px] font-clash font-medium text-[18px] leading-7 rounded-md hover:bg-main transition-all ease duration-200 hover:scale-105">Download</button>
    </div>
  </div>
  
  )
}

export default Nav