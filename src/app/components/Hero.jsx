import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className=' flex 2xl:mx-[175px] items-center flex-wrap lg:mx-[50px]'>
    <div className=' flex-1 lg:w-[618px] lg:h-[128px] '>
       <h1 className='lg:m-0 lg:mx-[175px] font-clash font-bold leading-[64px] text-6xl 2xl:w-[618px] 2xl:h-[128px] lg:w-[618px] lg:-mt-[100px] m-[10px]'>
       Make The Best Financial Decisions
       </h1>
       <p className='font-clash leading-[28px] text-base font-medium opacity-60 2xl:w-[638px] 2xl:h-[56px] lg:w-[618px] m-[20px] lg:mx-[175px]'>
       Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Fincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
       </p>
       <button className='bg-black lg:ml-[175px] text-white rounded-md  px-6 py-3 font-medium font-clash leading-[28px] text-lg mt-3 ml-4'>Get started</button>
       <button className='text-black  font-medium font-clash leading-[28px] text-lg px-6 py-3'>Watch Now</button>
     
     </div>
      <div>
       <img src="/hero.png" alt="" className=' w-[100%]' />
       </div>
       <img src="/sec.png" alt="" className="hidden md:block md:bg-none 2xl:-mt-[180px] lg:mx-[175px] lg:-mt-[180px] 2xl:mx-[175px] " /> 
    </div>
    </> 
  )
}

export default Hero