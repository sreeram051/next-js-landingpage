import React from 'react';

const Footer = () => {
  return (
      <>
    <footer className="bg-white py-8 2xl:mx-[175px] lg:mx-[175px] gap-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center lg:space-x-8 mb-10">
          <div className="mb-8 lg:mb-[50px]">
            <div className="flex items-center mb-4">
              <img src="/frame.svg" alt="uifry" className="w-8 h-8 mr-2" />
              <img src="/vector.svg" alt="uifry" className="w-[64px] h-[29px] mr-2" />
            </div>
            <div className="flex flex-col">
                <div className=' flex'> <img src="/mail.svg" className=" w-[24px] h-[24px]" alt="" />
              <a href="mailto:Help@Frybix.Com" className=" ml-1 font-medium  font-clash text-[16px] leading-[26px] mb-2">
                Help@Frybix.Com
              </a></div>
               <div className=' flex '> <img src="/mail.svg" className=" w-[24px] h-[24px]" alt="" />
              <a href="tel:+123445667889" className="font-medium ml-1 font-clash text-[16px] leading-[26px]">
                +1234 456 678 89
              </a></div>
              
            </div>
          </div>
          <div className="flex flex-wrap justify-between w-full lg:w-auto">
            <div className="mb-8 lg:mb-0 lg:mr-8">
              <h4 className="font-medium text-[32px] leading-[42px] mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="font-clash font-medium text-[16px] leading-[26px]">Home</a></li>
                <li><a href="#" className="font-clash font-medium text-[16px] leading-[26px]">About Us</a></li>
                <li><a href="#" className="font-clash font-medium text-[16px] leading-[26px]">Bookings</a></li>
                <li><a href="#" className="font-clash font-medium text-[16px] leading-[26px]">Blog</a></li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0 lg:mr-8">
              <h4 className="mb-4 font-medium text-[32px] leading-[42px]">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="font-clash font-medium text-[16px] leading-[26px]">Terms Of Use</a></li>
                <li><a href="#" className="font-clash font-medium text-[16px] leading-[26px]">Privacy Policy</a></li>
                <li><a href="#" className="font-clash font-medium text-[16px] leading-[26px]">Cookie Policy</a></li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0 lg:mr-8">
              <h4 className="mb-4 font-medium text-[32px] leading-[42px]">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="font-clash font-medium text-[16px] leading-[26px]">Take Tour</a></li>
                <li><a href="#" className="font-clash font-medium text-[16px] leading-[26px]">Live Chat</a></li>
                <li><a href="#" className="font-clash font-medium text-[16px] leading-[26px]">Reviews</a></li>
              </ul>
            </div>
            <div className="w-full lg:w-auto overflow-hidden">
              <h4 className="mb-4 font-medium text-[32px] leading-[42px]">Newsletter</h4>
              <form className="flex flex-col sm:flex-row items-center">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-[40px] py-[18px] font-clash border border-gray-300 rounded-t-md sm:rounded-t-none sm:rounded-l-md sm:rounded-r-none focus:outline-none w-full sm:w-auto"
                  />
                <button
                  type="submit"
                  className="bg-black text-white px-[40px] py-[18px] font-medium text-[16px] leading-[26px] font-clash rounded-b-md sm:rounded-b-none sm:rounded-r-md sm:rounded-l-none focus:outline-none w-full sm:w-auto"
                  >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
       
      </div>
    </footer> 
    <div className=' flex justify-center mt-11 mb-10'>
          <p  className=' font-clash font-medium text-18px leading-5'>Copyright 2022 uifry.com all rights reserved</p>
        </div>
      </>
  );
};

export default Footer;
