import React from 'react'
import card1 from '../src/assets/img/CARD/Annotation 2025-02-26 163344.png'
import card2 from '../src/assets/img/CARD/Annotation 2025-02-26 163411.png'
import card3 from '../src/assets/img/CARD/Annotation 2025-02-26 163441.png'

const items = [
  {
    title: 'Rent',
    img: card1,
    text: 'Discover flexible rental options that fit your lifestyle. Choose short-term or long-term homes that match your needs.',
  },
  {
    title: 'Sell',
    img: card2,
    text: 'Sell your property faster and at the best price with trusted agents and smart marketing support.',
  },
  {
    title: 'Buy',
    img: card3,
    text: 'Find your dream home with confidence and explore listings tailored to your location and budget.',
  },
]

const CardsliderCard = () => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
      {items.map((item) => (
        <article
          key={item.title}
          className='rounded-3xl border border-primary/10 bg-white p-6 shadow-sm'
        >
          <div className='flex justify-center'>
            <img className='h-28 w-auto object-contain' src={item.img} alt={`${item.title} icon`} />
          </div>

          <h4 className='mt-4 text-center font-Roboto text-4xl font-semibold text-primary'>{item.title}</h4>
          <p className='mt-3 text-center font-Roboto text-lg leading-6 text-para'>{item.text}</p>

          <div className='mt-6 flex justify-center'>
            <button className='rounded-full border border-primary px-6 py-2 font-Roboto text-sm font-bold text-primary hover:bg-white'>
              Learn more
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}

export default CardsliderCard
