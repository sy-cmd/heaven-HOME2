import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y, Autoplay } from 'swiper/modules'
import miniP1 from '../src/assets/img/3e732aaed2f8d0b3a20f5bbd5b5c4281 (1).jfif'
import miniP2 from '../src/assets/img/land/29bef90b1f63e933257f2188019141c2.jfif'
import miniP3 from '../src/assets/img/land/b94e610c7d6f34809045948f5a47ea67.jfif'
import miniP4 from '../src/assets/img/land/dd2c4ad1d8750bbbab879a10f10925bf.jfif'
import Land1 from '../src/assets/img/land/9929a632df4317539c3922c17e6936fe.jfif'
import Land2 from '../src/assets/img/land/29bef90b1f63e933257f2188019141c2.jfif'
import Land3 from '../src/assets/img/land/e981d2c6c2e3b00582eed7c7298991b5.jfif'

import 'swiper/css'
import 'swiper/css/pagination'

const tabs = [
  { label: 'All Types', img: miniP1, active: true },
  { label: 'Ranch Land', img: miniP2 },
  { label: 'Resort Land', img: miniP3 },
  { label: 'Farm Land', img: miniP4 },
]

const lands = [
  { name: 'Green Acres Farm', img: Land1, address: '730 Red Barn Way, Nashville, TN 37218' },
  { name: 'Sunnybrook Fields', img: Land2, address: '4821 Green Pasture Ln, Lexington, KY 40509' },
  { name: 'Stains Reserves', img: Land3, address: '1520 Harvest Moon Rd, Springfield, IL 62711' },
  { name: 'Green Acres Farm', img: Land1, address: '730 Red Barn Way, Nashville, TN 37218' },
  { name: 'Sunnybrook Fields', img: Land2, address: '4821 Green Pasture Ln, Lexington, KY 40509' },
  { name: 'Stains Reserves', img: Land3, address: '1520 Harvest Moon Rd, Springfield, IL 62711' },
]

const LandSlideCard = ({ item }) => (
  <div className='rounded-3xl border border-primary/10 bg-white p-3 shadow-sm sm:p-4'>
    <img className='h-52 w-full rounded-2xl object-cover sm:h-56 lg:h-64' src={item.img} alt={item.name} />
    <div className='mt-4'>
      <p className='font-Roboto text-2xl font-bold text-primary'>{item.name}</p>
      <p className='mt-2 text-sm text-para/80'>{item.address}</p>
    </div>
  </div>
)

const Landslider = () => {
  return (
    <>
      <div className='no-scrollbar flex gap-3 overflow-x-auto pb-2'>
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`inline-flex min-w-fit items-center gap-2 rounded-2xl px-3 py-2 text-left ${
              tab.active ? 'bg-primary text-white' : 'bg-white text-para'
            } border border-primary/10 shadow-sm`}
          >
            <img className='h-10 w-10 rounded-xl object-cover' src={tab.img} alt={tab.label} />
            <span className='font-Roboto text-xl font-bold leading-5'>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className='mt-5'>
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {lands.map((item, index) => (
            <SwiperSlide key={`${item.name}-${index}`}>
              <LandSlideCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Landslider
