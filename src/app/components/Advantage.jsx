import React from 'react'
import Image from 'next/image'

const Advantage = () => {
  return (

    <div className=' flex 2xl:mx-[175px] items-center flex-wrap lg:mx-[50px] relative ml-[20px] '>
    <div className=' flex-1 lg:w-[618px] lg:h-[128px] lg:mb-[130px]'>
       <p className='uppercase tracking-wide font-clash font-medium text-lg leading-[28px] text-main  2xl:mx-[175px] lg:mx-[175px] mb-1 '>
       advatnages
       </p>
       <h1 className='font-clash font-bold leading-[48px] text-5xl 2xl:mx-[175px] lg:mx-[175px]  lg:w-[480px] mb-2'>why choose Uifry?</h1>
       <div className='2xl:mx-[175px] lg:mx-[175px] flex items-center mb-10 '>
             <Image src="/bell.svg" width={40} height={40} alt='img'/>
            <h1 className='font-clash font-semibold text-xl leading-[28px] ml-3'>Clever Notifications</h1>
        </div>
      <p className=' 2xl:mb-[150px] font-clash font-medium text-lg leading-[28px] opacity-50 2xl:mx-[175px] lg:mx-[175px] 2xl:w-[535px] 2xl:h-[140px] lg:w-[535px] lg:h-[140px]'>Arcu At Dictum Sapien, Mollis. Vulputate Sit id Accumsan, Ultricies. In Ultrices Malesuada elit Mauris Etiam Odio. Duis tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.</p>
     </div>
      <div className=''>
       <img src="/img-4.png" alt="" className=' w-[100%]' />
       </div>
    </div>
  )
}

export default Advantage