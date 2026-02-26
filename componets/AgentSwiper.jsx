import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y, Autoplay } from 'swiper/modules'
import { FaRegCalendarCheck, FaRegComment, FaStar } from 'react-icons/fa'
import A1 from '../src/assets/img/agent/4eca6080adf4a40bf122ec344b6016d5 (1).jfif'
import A2 from '../src/assets/img/agent/f8898b4d066033af55f17b0f52d39b46.jfif'
import A3 from '../src/assets/img/agent/fc08a04c070e415a77ae8cfe609bab92.jfif'

import 'swiper/css'
import 'swiper/css/pagination'

const categories = ['Residential', 'Construction', 'Land', 'Luxury', 'Commercial']

const agents = [
  {
    name: 'Emily Soccker',
    photo: A1,
    status: 'Selected',
    age: 37,
    rating: '5.0',
    reviews: 69,
    tags: [
      { text: 'Responsive', color: 'bg-[#4d9fff]' },
      { text: 'Negotiator', color: 'bg-[#7a55f8]' },
      { text: 'Empathetic', color: 'bg-[#45e64e]' },
      { text: 'Organized', color: 'bg-[#9e9e9e]' },
      { text: 'Persistent', color: 'bg-[#ef466a]' },
      { text: 'Ethical', color: 'bg-[#f64faa]' },
    ],
  },
  {
    name: 'Jack Sukirr',
    photo: A2,
    status: 'View Agent',
    age: 32,
    rating: '3.0',
    reviews: 69,
    tags: [
      { text: 'Responsive', color: 'bg-[#4d9fff]' },
      { text: 'Friendly', color: 'bg-[#ff8c7f]' },
      { text: 'Empathetic', color: 'bg-[#45e64e]' },
      { text: 'Organized', color: 'bg-[#9e9e9e]' },
      { text: 'Persistent', color: 'bg-[#ef466a]' },
      { text: 'Ethical', color: 'bg-[#f64faa]' },
    ],
  },
  {
    name: 'Mila Green',
    photo: A3,
    status: 'View Agent',
    age: 28,
    rating: '3.5',
    reviews: 169,
    tags: [
      { text: 'Responsive', color: 'bg-[#4d9fff]' },
      { text: 'Negotiator', color: 'bg-[#7a55f8]' },
      { text: 'Empathetic', color: 'bg-[#45e64e]' },
      { text: 'Organized', color: 'bg-[#9e9e9e]' },
      { text: 'Persistent', color: 'bg-[#ef466a]' },
      { text: 'Ethical', color: 'bg-[#f64faa]' },
    ],
  },
]

const AgentSlide = ({ agent }) => (
  <article className='mx-auto w-full max-w-sm rounded-3xl border border-primary/10 bg-white p-4 shadow-sm'>
    <div className='h-9 rounded-2xl bg-primary/95' />

    <div className='-mt-5 flex flex-col items-center'>
      <img className='h-16 w-16 rounded-full border-4 border-white object-cover' src={agent.photo} alt={agent.name} />
      <h4 className='mt-2 font-Roboto text-2xl font-bold text-para'>{agent.name}</h4>
    </div>

    <div className='mt-4 grid grid-cols-2 gap-2 rounded-2xl bg-Cardc p-3'>
      {agent.tags.slice(0, 6).map((tag) => (
        <span key={tag.text} className={`rounded-xl px-2 py-1 text-center font-Roboto text-sm font-bold text-white ${tag.color}`}>
          {tag.text}
        </span>
      ))}
    </div>

    <div className='mt-3 grid grid-cols-3 gap-2 rounded-2xl bg-Cardc p-3'>
      <div className='rounded-xl bg-white p-2 text-center'>
        <p className='text-xs font-bold text-para'>Age</p>
        <p className='mt-1 inline-flex items-center gap-1 text-xs text-para/70'>
          <FaRegCalendarCheck size={10} color='#f5b843' />{agent.age}
        </p>
      </div>
      <div className='rounded-xl bg-white p-2 text-center'>
        <p className='text-xs font-bold text-para'>Rating</p>
        <p className='mt-1 inline-flex items-center gap-1 text-xs text-para/70'>
          <FaStar size={10} color='#f5b843' />{agent.rating}
        </p>
      </div>
      <div className='rounded-xl bg-white p-2 text-center'>
        <p className='text-xs font-bold text-para'>Reviews</p>
        <p className='mt-1 inline-flex items-center gap-1 text-xs text-para/70'>
          <FaRegComment size={10} color='#f5b843' />{agent.reviews}
        </p>
      </div>
    </div>

    <button className={`mt-4 h-11 w-full rounded-2xl font-Roboto text-sm font-bold text-white ${agent.status === 'Selected' ? 'bg-secondary' : 'bg-primary'}`}>
      {agent.status}
    </button>
  </article>
)

const AgentSwiper = () => {
  const [activeCategory, setActiveCategory] = useState('Residential')

  return (
    <>
      <div className='no-scrollbar flex w-full gap-3 overflow-x-auto rounded-2xl bg-Cardc p-3'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`whitespace-nowrap rounded-2xl px-5 py-2 font-Roboto text-base font-bold ${
              activeCategory === category ? 'bg-secondary text-white' : 'bg-transparent text-para/60'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='mt-4 w-full rounded-3xl bg-Cardc p-4 sm:p-5'>
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          spaceBetween={14}
          breakpoints={{
            0: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
            1280: { slidesPerView: 2 },
          }}
        >
          {agents.map((agent) => (
            <SwiperSlide key={`${activeCategory}-${agent.name}`}>
              <AgentSlide agent={agent} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default AgentSwiper
