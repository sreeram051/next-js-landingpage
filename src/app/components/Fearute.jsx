import Image from 'next/image'
import React from 'react'

const Fearute = () => {
  return (
    
    <div className='flex 2xl:mx-[175px] lg:mx-[175px] flex-wrap items-center'>
    <div className='flex-1 flex justify-center lg:justify-start'>
      <img src="/img-3.png" alt="" className='w-[100%]' />
    </div>
    <div className='mt-8 lg:mt-0 lg:ml-8'>
      <h1 className='uppercase tracking-wide font-clash font-medium text-lg leading-[28px] text-main mb-1 ml-[20px]'>Features</h1>
      <h1 className='font-clash font-bold leading-[48px] text-5xl lg:w-[359px] mb-[32px] ml-[20px]'>Uifry Premium</h1>
      <div className='flex items-center gap-2 mb-[16px] ml-[20px]'>
        <img src="/star-05.png" alt="" />
        <h1 className='font-clash font-semibold text-lg leading-[28px]'>Budgeting Intervals</h1>
      </div>
      <p className='ml-[20px] mb-[32px] font-medium text-lg leading-[28px] opacity-50 font-clash 2xl:w-[638px] lg:w-[638px]'>
        Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Fincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
      </p>
      <div className='flex items-center gap-2 ml-[20px]'>
        <img src="/star-05.png" alt="" />
        <h1 className='font-clash font-semibold text-lg leading-[28px] mb-[16px]'>Budgeting Intervals</h1>
      </div>
      <p className='mb-[16px] ml-[20px] font-medium text-lg leading-[28px] opacity-50 font-clash 2xl:w-[638px] lg:w-[638px]'>
        Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Fincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
      </p>
      <div className='flex items-center gap-2 mb-[16px] ml-[20px]'>
        <img src="/star-05.png" alt="" />
        <h1 className='font-clash font-semibold text-lg leading-[28px]'>Budgeting Intervals</h1>
      </div>
      <p className='ml-[20px] mb-[16px] font-medium text-lg leading-[28px] opacity-50 font-clash 2xl:w-[638px] lg:w-[638px]'>
        Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Fincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
      </p>
    </div>
  </div>
  

    
  )
}

export default Fearute;