import React, { useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y, Autoplay } from 'swiper/modules'
import { FaRegHeart } from 'react-icons/fa'
import { IoIosShareAlt } from 'react-icons/io'
import { GrSave } from 'react-icons/gr'
import HU1 from '../src/assets/img/5ab48035c2c30df287ccef034c36fead.jfif'
import HU2 from '../src/assets/img/cf765f55b43f14c6f9deb46b7fc524a6.jfif'
import HU3 from '../src/assets/img/f665c89303db60e671675edb17c1fc06.jfif'
import MINP1 from '../src/assets/img/3e732aaed2f8d0b3a20f5bbd5b5c4281 (1).jfif'
import MINP2 from '../src/assets/img/b7b1af3255f6626f83fb268d34865e73 (1).jfif'
import MINP3 from '../src/assets/img/e762852df88447efdbd76ebc4b08bc3b (1).jfif'
import MINP4 from '../src/assets/img/ca95894ce3f7cb7e2c0dd1af8d3b8123 (1).jfif'

import 'swiper/css'
import 'swiper/css/pagination'

const tabs = [
  { key: 'all', label: 'All properties', img: MINP1 },
  { key: 'sale', label: 'For sale', img: MINP2 },
  { key: 'rent', label: 'For rent', img: MINP3 },
  { key: 'apartment', label: 'Apartments', img: MINP4 },
]

const properties = [
  { type: 'sale', price: '$2,799.99', img: HU3, address: '4215 W Elmwood St Unit 2B, Los Angeles, CA 90012' },
  { type: 'apartment', price: '$822,799.99', img: HU1, address: '3120 S Maple Ave Unit 5C, Los Angeles, CA 90015' },
  { type: 'rent', price: '$1,799.99', img: HU2, address: '3120 S Maple Ave Unit 5C, Los Angeles, CA 90015' },
  { type: 'sale', price: '$2,799.99', img: HU3, address: '4215 W Elmwood St Unit 2B, Los Angeles, CA 90012' },
  { type: 'apartment', price: '$822,799.99', img: HU1, address: '3120 S Maple Ave Unit 5C, Los Angeles, CA 90015' },
  { type: 'rent', price: '$1,799.99', img: HU2, address: '3120 S Maple Ave Unit 5C, Los Angeles, CA 90015' },
]

const PropertyCard = ({ item }) => (
  <div className='rounded-3xl border border-primary/10 bg-white p-3 shadow-sm sm:p-4'>
    <img className='h-52 w-full rounded-2xl object-cover sm:h-56 lg:h-64' src={item.img} alt='Property listing' />

    <div className='mt-4 flex items-start justify-between gap-3'>
      <div>
        <h5 className='font-Roboto text-2xl font-bold text-primary'>{item.price}</h5>
        <p className='text-sm font-medium text-primary/70'>/month</p>
      </div>

      <div className='flex gap-2 text-xs text-para'>
        <span className='inline-flex items-center gap-1'><FaRegHeart size={14} />90.2k</span>
        <span className='inline-flex items-center gap-1'><IoIosShareAlt size={14} />17k</span>
        <span className='inline-flex items-center gap-1'><GrSave size={12} />90.2k</span>
      </div>
    </div>

    <div className='mt-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between'>
      <p className='max-w-[18rem] text-xs leading-4 text-para/80'>{item.address}</p>
      <p className='text-sm font-medium text-para'>2 Baths 5 Beds 2k sq ft</p>
    </div>
  </div>
)

export const Carslider = () => {
  const [activeTab, setActiveTab] = useState('all')

  const filteredProperties = useMemo(() => {
    if (activeTab === 'all') return properties
    const byType = properties.filter((item) => item.type === activeTab)
    return byType.length > 0 ? byType : properties
  }, [activeTab])

  return (
    <>
      <div className='no-scrollbar flex gap-3 overflow-x-auto pb-2'>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`inline-flex min-w-fit items-center gap-2 rounded-2xl px-3 py-2 text-left ${
              activeTab === tab.key ? 'bg-primary text-white' : 'bg-white text-para'
            } border border-primary/10 shadow-sm`}
          >
            <img className='h-10 w-10 rounded-xl object-cover' src={tab.img} alt={tab.label} />
            <span className='whitespace-nowrap font-Roboto text-lg font-bold leading-5 sm:text-xl'>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className='mt-5'>
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          autoplay={{ delay: 2600, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {filteredProperties.map((item, index) => (
            <SwiperSlide key={`${item.price}-${index}`}>
              <PropertyCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
