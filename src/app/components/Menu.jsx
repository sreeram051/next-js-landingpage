"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"


const Menu = () => {

    const [open , setOpen] = useState();


  return (
    <div className=" mt-3">
        <Image src="/menu.png" width={28} height={28} className=" cursor-pointer" alt='img' onClick={() => setOpen((prev) => !prev)}/>
        {
            open && (
                <div className=" absolute bg-black
                text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 ">
                    <Link className="font-clash font-bold text-[20px] leading-[26px] text-main" href="/">Home</Link>
                    <Link href="/" className=" font-clash font-medium text-[20px] leading-[26px]">About Us</Link>
                    <Link href="/" className=" font-clash font-medium text-[20px] leading-[26px]">Pricing</Link>
                    <Link href="/" className=" font-clash font-medium text-[20px] leading-[26px]">Features</Link>
                    <button className=" px-[46px] py-[16px] text-white  border border-main rounded-md hover:bg-main  transition-all ease duration-200 font-clash font-medium text-[18px] leading-7">Download</button>
                </div>
            )
        }
    </div>
  )
}

export default Menu