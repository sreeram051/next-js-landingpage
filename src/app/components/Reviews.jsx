import Image from "next/image"

const Reviews = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center 2xl:mx-[175px] lg:mx-[175px] mb-10  '>
    <div className='w-full lg:w-auto'>
      <img src="/img-6.png" alt="" className='w-full lg:w-auto lg:h-auto' />
    </div>
    <div className='mt-8 lg:mt-0 lg:ml-8'>
        <h1 className='font-clash font-semibold leading-[28px] text-[28px] 2xl:w-[442px] 2xl:h-[56px] lg:w-[442px] lg:h-[56px] mb-[24px] ml-5'>The Best Financial Accounting App Ever!</h1>
        <p className='font-clash font-medium text-lg leading-[28px] opacity-50 2xl:w-[442px] lg:w-[442px] 2xl:h-[196px] lg:h-[196px] ml-[20px] ml-5'>
       " Arcu At Dictum Sapien, Mollis. Vulputate Sit id Accumsan, Ultricies. In Ultrices Malesuada elit Mauris Etiam Odio. Duis tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam."
      </p>
      <Image className="mb-[24px] ml-5" src="/img-7.svg" width={192} height={42} alt="img"/>
      <p className=" font-clash font-semibold text-[18px] leading-[28px]  ml-5">Nick Jonas</p>
      </div>
      
    </div>
  )
}

export default Reviews