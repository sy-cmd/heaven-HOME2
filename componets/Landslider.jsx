import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';
import miniP1 from '../src/assets/img/3e732aaed2f8d0b3a20f5bbd5b5c4281 (1).jfif'
import miniP2 from '../src/assets/img/land/29bef90b1f63e933257f2188019141c2.jfif'
import miniP3 from '../src/assets/img/land/b94e610c7d6f34809045948f5a47ea67.jfif'
import miniP4 from '../src/assets/img/land/dd2c4ad1d8750bbbab879a10f10925bf.jfif'
import Land1 from '../src/assets/img/land/9929a632df4317539c3922c17e6936fe.jfif'
import Land2 from '../src/assets/img/land/29bef90b1f63e933257f2188019141c2.jfif'
import Land3 from '../src/assets/img/land/e981d2c6c2e3b00582eed7c7298991b5.jfif'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Landslider = () => {
  return (
    <>
        <div>

    <div className='xl:w-[964px] xl:h-22.5 rounded-3xl py-3 px-5 bg-backgroundWHITE flex flex-row gap-10 justify-center justify-self-center lg:w-190 md:w-145.5 sm:w-108  max-xs:w-[234px] max-xs:h-[56px]' >
        {/* first */}
        <div className='w-64.5 h-16.5 rounded-xl py-2 pr-7 pl-2 bg-primary flex flex-row drop-shadow-lg gap-2 max-xs:w-[82px] max-xs:h-[32px]'>

            <img className='w-12.5 h-12.5 rounded-lg max-xs:hidden' src={miniP1} alt="land-pic" srcset="" />
            <div className='mt-2.5 max-xs:flex max-xs:justify-center max-xs:mt-0'>
                <p className='font-Roboto font-medium text-2xl text-backgroundWHITE sm:hidden max-xs:hidden xl:flex lg:flex'>  All  Types</p>
                <p className=' w-14.5 h-4 font-Roboto font-medium text-[14px] text-backgroundWHITE xl:hidden md:hidden text-center'>  All Types</p>
          

            </div>
        </div>
        {/* second */}
        <div className='w-57 h-16.5 rounded-xl py-2 pr-7 pl-2 bg-Cardc flex flex-row drop-shadow-lg gap-2 lg:hidden xl:flex  max-xs:w-[92px] max-xs:h-[32px]'>

            <img className='w-12.5 h-12.5 rounded-lg max-xs:hidden' src={miniP2} alt="land-pic" srcset="" />
            <div className='mt-2.5  max-xs:flex max-xs:justify-center max-xs:mt-0'>
                <p className='font-Roboto font-medium text-2xl text-bartext sm:hidden xl:flex max-xs:hidden xl:w-[127px]'>  Ranch Land</p>
                <p className='font-Roboto font-normal text-[14px] text-bartext xl:hidden md:hidden'>  Ranch </p>
          

            </div>
        </div>
        {/* third */}
        <div className='w-57 h-16.5 rounded-xl py-2 pr-7 pl-2 bg-Cardc flex flex-row drop-shadow-lg gap-2 md:hidden sm:hidden xl:flex max-xs:hidden lg:flex'>

            <img className='w-12.5 h-12.5 rounded-lg' src={miniP3} alt="land-pic" srcset="" />
            <div className='mt-2.5'>
                <p className='font-Roboto font-medium text-2xl text-bartext xl:w-[130px] w-[130px] '>  Resort Land</p>
          

            </div>
        </div>
        {/* forth */}
        <div className='w-57 h-16.5 rounded-xl py-2 pr-7 pl-2 bg-Cardc flex flex-row drop-shadow-lg gap-2 md:hidden sm:hidden xl:flex max-xs:hidden lg:flex'>

            <img className='w-12.5 h-12.5 rounded-lg' src={miniP4} alt="land-pic" srcset="" />
            <div className='mt-2.5'>
                <p className='font-Roboto font-medium text-2xl  text-bartext xl:w-[127px] w-[127px]'> Farm Land</p>
          

            </div>
        </div>

    </div>
    {/* swipers */}

    <div className=' mt-3    w-280 h-114 rounded-xl flex justify-items-center  justify-self-center items-center lg:w-192 lg:h-116 md:w-145.5  sm:w-104 sm:h-116   xl:w-243.5  max-xs:flex max-xs:justify-center max-xs:w-[266px] max-xs:h-[398px]' >

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
600: {  width: 600,
  slidesPerView: 1, },
300: {  width: 300,
  slidesPerView: 1, },
767: {  width: 768,
  slidesPerView: 2, },

}}>

    <SwiperSlide>
        <div>
        <div className='w-90 h-99.5 rounded-xl border-1 p-4 bg-backgroundWHITE border-backgroundWHITE drop-shadow-lg flex flex-col gap-3'>
            <div>
                <img className='w-82 h-66.5 rounded-lg border-1 border-backgroundWHITE p-2.5' src={Land1} alt="land" srcset="" />
            </div>
            <div className='flex flex-col gap-7'>
                <p className='font-Roboto font-bold text-xl text-black leading-6'  > Green Acres Farm</p>
                <p className='font-Roboto font-normal text-9px text-para leading-2.5'> 730 Red Barn Way, Nashville, TN 37218</p>
            </div>

        </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <div className='w-90 h-99.5 rounded-xl border-1 p-4 bg-backgroundWHITE border-backgroundWHITE drop-shadow-lg flex flex-col gap-3'>
            <div>
                <img className='w-82 h-66.5 rounded-lg border-1 border-backgroundWHITE p-2.5' src={Land2} alt="land" srcset="" />
            </div>
            <div className='flex flex-col gap-7'>
                <p className='font-Roboto font-bold text-xl text-black leading-6'  > Sunnybrook Fields</p>
                <p className='font-Roboto font-normal text-9px text-para leading-2.5'> 4821 Green Pasture Ln, Lexington, KY 40509</p>
            </div>

        </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <div className='w-90 h-99.5 rounded-xl border-1 p-4 bg-backgroundWHITE border-backgroundWHITE drop-shadow-lg flex flex-col gap-3'>
            <div>
                <img className='w-82 h-66.5 rounded-lg border-1 border-backgroundWHITE p-2.5' src={Land3} alt="land" srcset="" />
            </div>
            <div className='flex flex-col gap-7'>
                <p className='font-Roboto font-bold text-xl text-black leading-6'  > Stains reserves</p>
                <p className='font-Roboto font-normal text-9px text-para leading-2.5'> 1520 Harvest Moon Rd, Springfield, IL 62711</p>
            </div>

        </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <div className='w-90 h-99.5 rounded-xl border-1 p-4 bg-backgroundWHITE border-backgroundWHITE drop-shadow-lg flex flex-col gap-3'>
            <div>
                <img className='w-82 h-66.5 rounded-lg border-1 border-backgroundWHITE p-2.5' src={Land1} alt="land" srcset="" />
            </div>
            <div className='flex flex-col gap-7'>
                <p className='font-Roboto font-bold text-xl text-black leading-6'  > Green Acres Farm</p>
                <p className='font-Roboto font-normal text-9px text-para leading-2.5'> 730 Red Barn Way, Nashville, TN 37218</p>
            </div>

        </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <div className='w-90 h-99.5 rounded-xl border-1 p-4 bg-backgroundWHITE border-backgroundWHITE drop-shadow-lg flex flex-col gap-3'>
            <div>
                <img className='w-82 h-66.5 rounded-lg border-1 border-backgroundWHITE p-2.5' src={Land2} alt="land" srcset="" />
            </div>
            <div className='flex flex-col gap-7'>
                <p className='font-Roboto font-bold text-xl text-black leading-6'  > Sunnybrook Fields</p>
                <p className='font-Roboto font-normal text-9px text-para leading-2.5'> 4821 Green Pasture Ln, Lexington, KY 40509</p>
            </div>

        </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <div className='w-90 h-99.5 rounded-xl border-1 p-4 bg-backgroundWHITE border-backgroundWHITE drop-shadow-lg flex flex-col gap-3'>
            <div>
                <img className='w-82 h-66.5 rounded-lg border-1 border-backgroundWHITE p-2.5' src={Land3} alt="land" srcset="" />
            </div>
            <div className='flex flex-col gap-7'>
                <p className='font-Roboto font-bold text-xl text-black leading-6'  > Stains reserves</p>
                <p className='font-Roboto font-normal text-9px text-para leading-2.5'> 1520 Harvest Moon Rd, Springfield, IL 62711</p>
            </div>

        </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <div className='w-90 h-99.5 rounded-xl border-1 p-4 bg-backgroundWHITE border-backgroundWHITE drop-shadow-lg flex flex-col gap-3'>
            <div>
                <img className='w-82 h-66.5 rounded-lg border-1 border-backgroundWHITE p-2.5' src={Land1} alt="land" srcset="" />
            </div>
            <div className='flex flex-col gap-7'>
                <p className='font-Roboto font-bold text-xl text-black leading-6'  > Green Acres Farm</p>
                <p className='font-Roboto font-normal text-9px text-para leading-2.5'> 730 Red Barn Way, Nashville, TN 37218</p>
            </div>

        </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <div className='w-90 h-99.5 rounded-xl border-1 p-4 bg-backgroundWHITE border-backgroundWHITE drop-shadow-lg flex flex-col gap-3'>
            <div>
                <img className='w-82 h-66.5 rounded-lg border-1 border-backgroundWHITE p-2.5' src={Land2} alt="land" srcset="" />
            </div>
            <div className='flex flex-col gap-7'>
                <p className='font-Roboto font-bold text-xl text-black leading-6'  > Sunnybrook Fields</p>
                <p className='font-Roboto font-normal text-9px text-para leading-2.5'> 4821 Green Pasture Ln, Lexington, KY 40509</p>
            </div>

        </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <div className='w-90 h-99.5 rounded-xl border-1 p-4 bg-backgroundWHITE border-backgroundWHITE drop-shadow-lg flex flex-col gap-3'>
            <div>
                <img className='w-82 h-66.5 rounded-lg border-1 border-backgroundWHITE p-2.5' src={Land3} alt="land" srcset="" />
            </div>
            <div className='flex flex-col gap-7'>
                <p className='font-Roboto font-bold text-xl text-black leading-6'  > Stains reserves</p>
                <p className='font-Roboto font-normal text-9px text-para leading-2.5'> 1520 Harvest Moon Rd, Springfield, IL 62711</p>
            </div>

        </div>
        </div>
    </SwiperSlide>






<div className="swiper-pagination !mt-9  "></div>


</Swiper>
    </div>

    </div>



    </>
  )
}

export default Landslider