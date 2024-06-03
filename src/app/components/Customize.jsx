import Image from 'next/image'
import React from 'react'

const Customize = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center 2xl:mx-[175px] lg:mx-[175px] mb-10'>
    <div className='w-full lg:w-auto'>
      <img src="/img-5.png" alt="" className='w-full lg:w-auto lg:h-auto' />
    </div>
    <div className='mt-8 lg:mt-0 lg:ml-8'>
      <div className='flex items-center mb-[33px] ml-5'>
        <Image src="/star.svg" width={48} height={48} alt='img' />
        <h1 className='font-clash font-semibold leading-[28px] text-[28px] ml-4'>Fully Customizable</h1>
      </div>
      <p className=' ml-5 font-clash font-medium text-lg leading-[28px] opacity-50 2xl:w-[562px] lg:w-[562px] 2xl:h-[140px] lg:h-[140px]'>
        Arcu At Dictum Sapien, Mollis. Vulputate Sit id Accumsan, Ultricies. In Ultrices Malesuada elit Mauris Etiam Odio. Duis tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
      </p>
    </div>
  </div>
  )
}

export default Customize