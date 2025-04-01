import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { GrSave } from "react-icons/gr";
import HU1 from '../src/assets/img/5ab48035c2c30df287ccef034c36fead.jfif'
import HU2 from '../src/assets/img/cf765f55b43f14c6f9deb46b7fc524a6.jfif'
import HU3 from '../src/assets/img/f665c89303db60e671675edb17c1fc06.jfif'
import MINP1 from '../src/assets/img/3e732aaed2f8d0b3a20f5bbd5b5c4281 (1).jfif'
import minp2 from '../src/assets/img/b7b1af3255f6626f83fb268d34865e73 (1).jfif'
import minp3 from '../src/assets/img/e762852df88447efdbd76ebc4b08bc3b (1).jfif'
import minp4 from '../src/assets/img/ca95894ce3f7cb7e2c0dd1af8d3b8123 (1).jfif'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Carslider = () => {
  return (
    <>
    <div className='w-253 h-22.5 rounded-2xl bg-backgroundWHITE flex flex-row gap-10 justify-center items-center justify-self-center lg:w-190 md:w-145.5 max-sm:w-108 xl:w-241 '>
        <div className='w-62 h-16.5 rounded-xl py-2 pr-7 pl-2 bg-primary drop-shadow-md flex flex-row gap-2.5 '>
            <img className='w-12.5 h-12.5 rounded-xl' src={MINP1} alt="" srcset="" />
            <p className='font-Roboto font-semibold text-2xl leading-5 text-backgroundWHITE mt-2.5 '>All properties</p>
        </div>

        <div className='w-46.5 h-16.5 rounded-xl py-2 pr-7 pl-2 bg-Cardc drop-shadow-md flex flex-row gap-2.5 max-sm:hidden xl:flex'>
            <img className='w-12.5 h-12.5 rounded-xl' src={minp2} alt="" srcset="" />
            <p className='font-Roboto font-semibold text-2xl leading-5 text-para mt-2.5 '>For sale</p>
        </div>

        <div className='w-46.5 h-16.5 rounded-xl py-2 pr-7 pl-2 bg-Cardc drop-shadow-md flex flex-row gap-2.5 md:hidden xl:flex'>
            <img className='w-12.5 h-12.5 rounded-xl' src={minp3} alt="" srcset="" />
            <p className='font-Roboto font-semibold text-2xl leading-7 text-para mt-2.5 '>For rent</p>
        </div>

        <div className='w-62 h-16.5 rounded-xl py-2 pr-7 pl-2 bg-Cardc drop-shadow-md flex flex-row gap-2.5 max-md:hidden max-sm:hidden xl:flex lg:-ml-5.5'>
            <img className='w-12.5 h-12.5 rounded-xl' src={minp4} alt="" srcset="" />
            <p className='font-Roboto font-semibold text-2xl leading-7 text-bartext mt-2.5 '>Apartments</p>
        </div>
        
    </div>

    <div className=' mt-5    w-280 h-114 flex justify-items-center  justify-self-center lg:w-192 lg:h-101 md:w-145.5 max-sm:w-104 max-sm:h-116 xl:w-240.5' >

        <Swiper
        modules={ [Pagination , Scrollbar, A11y, Autoplay,   Navigation ]}
        spaceBetween={50}
      grabCursor={true}
      initialSlide={3}
      centeredSlides={true}
      slidesPerView="3"
      speed={3000}
      slideToClickedSlide={true}
      pagination={{   el: '.swiper-pagination', clickable: true }}
      breakpoints={{
        320: { spaceBetween:70 },
        430: { slidesPerView: 1, },
        580: { spaceBetween:70 },
        650: { spaceBetween:30 },
        734: {  width: 768,
          slidesPerView: 1, },
        768: {  width: 768,
          slidesPerView: 2, },
        600: {  width: 768,
          slidesPerView: 1, },

      }}>
    
        <SwiperSlide >

            <div className='mt-2 flex flex-row gap-6 w-90 h-99.5 rounded-xl border-1 border-boderbg p-4 bg-backgroundWHITE drop-shadow-md '>

            <div className='flex flex-col gap-6'>
            <div>
                <img className='w-82 h-66.5 rounded-lg border-1 border-boderbg p-2.5' src={HU1} alt="house picture"  />
            </div>

            <div className='flex flex-row justify-between'>
                <div className='flex flex-col '>
                  <h5 className='font-Roboto text-xl leading-5 font-semibold text-primary'>  $822,799.99</h5>

                    <p className=' text-xs font-Roboto font-normal text-primary'> /month</p>
                </div>
                <div className='flex flex-row '>
                    <div className='flex flex-row gap-1'>
                    <FaRegHeart size={17} height={50} color='#333333'  />
                    <p className='font-Roboto font-normal text-xs leading-3 '> 90.2k</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                    <IoIosShareAlt size={15} color='#333333' />
                    <p className='font-Roboto font-normal text-xs leading-3 text-para'> 17K</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                    <GrSave size={15} color='#333333' />
                    <p className='font-Roboto font-normal text-xs leading-3 text-para'> 90.2k</p>
                    </div>
                  
                </div>
            </div>

            <div className='flex flex-row justify-between'>
                <p className='w-26.5 h-5.5 text-9px font-normal font-Roboto leading-2.5 '>3120 S Maple Ave Unit 5C,
                Los Angeles, CA 90015</p>

                <div className='flex flex-row gap-1.5'>
                    <p className='text-sm font-normal text-black font-Roboto'>2 Baths</p>
                    <p className='text-sm font-normal text-black font-Roboto'>5 Beds</p>
                    <p className='text-sm font-normal text-black font-Roboto'>2k sq ft</p>
                </div>
            </div>


            </div>
            </div>
         

        </SwiperSlide>
        
        <SwiperSlide >

            <div className='mt-2  flex flex-row gap-6 w-90 h-99.5 rounded-xl border-1 border-boderbg p-4 bg-backgroundWHITE drop-shadow-md '>
            <div className='flex flex-col gap-6'>
            <div>
                <img className='w-82 h-66.5 rounded-lg border-1 border-boderbg p-2.5' src={HU2} alt="house picture"  />
            </div>

            <div className='flex flex-row justify-between'>
                <div className='flex flex-col '>
                  <h5 className='font-Roboto text-xl leading-5 font-semibold text-primary'> $1,799.99</h5>

                    <p className=' text-xs font-Roboto font-normal text-primary'> /month</p>
                </div>
                <div className='flex flex-row '>
                    <div className='flex flex-row gap-1'>
                    <FaRegHeart size={17} height={50} color='#333333'  />
                    <p className='font-Roboto font-normal text-xs leading-3 '> 60.2k</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                    <IoIosShareAlt size={15} color='#333333' />
                    <p className='font-Roboto font-normal text-xs leading-3 text-para'> 7K</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                    <GrSave size={15} color='#333333' />
                    <p className='font-Roboto font-normal text-xs leading-3 text-para'> 90.2k</p>
                    </div>
                  
                </div>
            </div>

            <div className='flex flex-row justify-between'>
                <p className='w-26.5 h-5.5 text-9px font-normal font-Roboto leading-2.5 '>3120 S Maple Ave Unit 5C,
                Los Angeles, CA 90015</p>

                <div className='flex flex-row gap-1.5'>
                    <p className='text-sm font-normal text-black font-Roboto'>2 Baths</p>
                    <p className='text-sm font-normal text-black font-Roboto'>5 Beds</p>
                    <p className='text-sm font-normal text-black font-Roboto'>2k sq ft</p>
                </div>
            </div>


            </div>
            </div>

        </SwiperSlide>

        <SwiperSlide >

            <div className=' mt-2  flex flex-row gap-6 w-90 h-99.5 rounded-xl border-1 border-boderbg p-4 bg-backgroundWHITE drop-shadow-md '>

           

            <div className='flex flex-col gap-6'>
            <div>
                <img className='w-82 h-66.5 rounded-lg border-1 border-boderbg p-2.5' src={HU3} alt="house picture"  />
            </div>

            <div className='flex flex-row justify-between'>
                <div className='flex flex-col '>
                  <h5 className='font-Roboto text-xl leading-5 font-semibold text-primary'>  $2,799.99</h5>

                    <p className=' text-xs font-Roboto font-normal text-primary'> /month</p>
                </div>
                <div className='flex flex-row '>
                    <div className='flex flex-row gap-1'>
                    <FaRegHeart size={17} height={50} color='#333333'  />
                    <p className='font-Roboto font-normal text-xs leading-3 '> 90.2k</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                    <IoIosShareAlt size={15} color='#333333' />
                    <p className='font-Roboto font-normal text-xs leading-3 text-para'> 17K</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                    <GrSave size={15} color='#333333' />
                    <p className='font-Roboto font-normal text-xs leading-3 text-para'> 90.2k</p>
                    </div>
                  
                </div>
            </div>

            <div className='flex flex-row justify-between'>
                <p className='w-26.5 h-5.5 text-9px font-normal font-Roboto leading-2.5 '>4215 W Elmwood St Unit 2B,
                Los Angeles, CA 90012</p>

                <div className='flex flex-row gap-1.5'>
                    <p className='text-sm font-normal text-black font-Roboto'>2 Baths</p>
                    <p className='text-sm font-normal text-black font-Roboto'>5 Beds</p>
                    <p className='text-sm font-normal text-black font-Roboto'>2k sq ft</p>
                </div>
            </div>


            </div>

            </div>
         

        </SwiperSlide>
        <SwiperSlide >

            <div className='mt-2 flex flex-row gap-6 w-90 h-99.5 rounded-xl border-1 border-boderbg p-4 bg-backgroundWHITE drop-shadow-md '>

            <div className='flex flex-col gap-6'>
            <div>
                <img className='w-82 h-66.5 rounded-lg border-1 border-boderbg p-2.5' src={HU1} alt="house picture"  />
            </div>

            <div className='flex flex-row justify-between'>
                <div className='flex flex-col '>
                  <h5 className='font-Roboto text-xl leading-5 font-semibold text-primary'>  $822,799.99</h5>

                    <p className=' text-xs font-Roboto font-normal text-primary'> /month</p>
                </div>
                <div className='flex flex-row '>
                    <div className='flex flex-row gap-1'>
                    <FaRegHeart size={17} height={50} color='#333333'  />
                    <p className='font-Roboto font-normal text-xs leading-3 '> 90.2k</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                    <IoIosShareAlt size={15} color='#333333' />
                    <p className='font-Roboto font-normal text-xs leading-3 text-para'> 17K</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                    <GrSave size={15} color='#333333' />
                    <p className='font-Roboto font-normal text-xs leading-3 text-para'> 90.2k</p>
                    </div>
                  
                </div>
            </div>

            <div className='flex flex-row justify-between'>
                <p className='w-26.5 h-5.5 text-9px font-normal font-Roboto leading-2.5 '>3120 S Maple Ave Unit 5C,
                Los Angeles, CA 90015</p>

                <div className='flex flex-row gap-1.5'>
                    <p className='text-sm font-normal text-black font-Roboto'>2 Baths</p>
                    <p className='text-sm font-normal text-black font-Roboto'>5 Beds</p>
                    <p className='text-sm font-normal text-black font-Roboto'>2k sq ft</p>
                </div>
            </div>


            </div>
            </div>
         

        </SwiperSlide>
        
        <SwiperSlide >

            <div className='mt-2  flex flex-row gap-6 w-90 h-99.5 rounded-xl border-1 border-boderbg p-4 bg-backgroundWHITE drop-shadow-md '>
            <div className='flex flex-col gap-6'>
            <div>
                <img className='w-82 h-66.5 rounded-lg border-1 border-boderbg p-2.5' src={HU2} alt="house picture"  />
            </div>

            <div className='flex flex-row justify-between'>
                <div className='flex flex-col '>
                  <h5 className='font-Roboto text-xl leading-5 font-semibold text-primary'> $1,799.99</h5>

                    <p className=' text-xs font-Roboto font-normal text-primary'> /month</p>
                </div>
                <div className='flex flex-row '>
                    <div className='flex flex-row gap-1'>
                    <FaRegHeart size={17} height={50} color='#333333'  />
                    <p className='font-Roboto font-normal text-xs leading-3 '> 60.2k</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                    <IoIosShareAlt size={15} color='#333333' />
                    <p className='font-Roboto font-normal text-xs leading-3 text-para'> 7K</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                    <GrSave size={15} color='#333333' />
                    <p className='font-Roboto font-normal text-xs leading-3 text-para'> 90.2k</p>
                    </div>
                  
                </div>
            </div>

            <div className='flex flex-row justify-between'>
                <p className='w-26.5 h-5.5 text-9px font-normal font-Roboto leading-2.5 '>3120 S Maple Ave Unit 5C,
                Los Angeles, CA 90015</p>

                <div className='flex flex-row gap-1.5'>
                    <p className='text-sm font-normal text-black font-Roboto'>2 Baths</p>
                    <p className='text-sm font-normal text-black font-Roboto'>5 Beds</p>
                    <p className='text-sm font-normal text-black font-Roboto'>2k sq ft</p>
                </div>
            </div>


            </div>
            </div>

        </SwiperSlide>

        <SwiperSlide >

            <div className=' mt-2  flex flex-row gap-6 w-90 h-99.5 rounded-xl border-1 border-boderbg p-4 bg-backgroundWHITE drop-shadow-md '>

           

            <div className='flex flex-col gap-6'>
            <div>
                <img className='w-82 h-66.5 rounded-lg border-1 border-boderbg p-2.5' src={HU3} alt="house picture"  />
            </div>

            <div className='flex flex-row justify-between'>
                <div className='flex flex-col '>
                  <h5 className='font-Roboto text-xl leading-5 font-semibold text-primary'>  $2,799.99</h5>

                    <p className=' text-xs font-Roboto font-normal text-primary'> /month</p>
                </div>
                <div className='flex flex-row '>
                    <div className='flex flex-row gap-1'>
                    <FaRegHeart size={17} height={50} color='#333333'  />
                    <p className='font-Roboto font-normal text-xs leading-3 '> 90.2k</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                    <IoIosShareAlt size={15} color='#333333' />
                    <p className='font-Roboto font-normal text-xs leading-3 text-para'> 17K</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                    <GrSave size={15} color='#333333' />
                    <p className='font-Roboto font-normal text-xs leading-3 text-para'> 90.2k</p>
                    </div>
                  
                </div>
            </div>

            <div className='flex flex-row justify-between'>
                <p className='w-26.5 h-5.5 text-9px font-normal font-Roboto leading-2.5 '>4215 W Elmwood St Unit 2B,
                Los Angeles, CA 90012</p>

                <div className='flex flex-row gap-1.5'>
                    <p className='text-sm font-normal text-black font-Roboto'>2 Baths</p>
                    <p className='text-sm font-normal text-black font-Roboto'>5 Beds</p>
                    <p className='text-sm font-normal text-black font-Roboto'>2k sq ft</p>
                </div>
            </div>


            </div>

            </div>
         

        </SwiperSlide>


       

        <div className="swiper-pagination !mt-9  "></div>


        </Swiper>
    </div>
    </>
  )
}
