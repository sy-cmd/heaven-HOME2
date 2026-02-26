import React from 'react'
import { HiMiniSparkles } from 'react-icons/hi2'
import heroHouse from '../src/assets/img/logo/Annotation 2025-03-06 124313.png'

const Hero = () => {
  return (
    <>
      <section className='px-4 pb-8 pt-10 sm:px-6 lg:px-8'>
        <div className='mx-auto flex w-full max-w-6xl flex-col items-center'>
          <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-[#ffd3e2] bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow-sm'>
            <HiMiniSparkles color='#f06a9b' />
            Trusted by 12k+ happy homeowners
          </div>

          <img className='h-auto w-full max-w-2xl object-contain drop-shadow-md' src={heroHouse} alt='Stylized homes illustration' />

          <div className='mt-6 flex w-full max-w-3xl flex-col items-center text-center'>
            <h1 className='font-Roboto text-5xl font-semibold leading-tight text-primary sm:text-6xl lg:text-7xl'>
              Your Dream Home Starts Here.
            </h1>

            <p className='mt-4 max-w-2xl font-Roboto text-base leading-7 text-para sm:text-lg'>
              Discover beautiful homes, expert agents, and smooth buying and renting journeys designed around your
              lifestyle.
            </p>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <button className='h-12 rounded-full bg-primary px-9 font-Roboto text-base font-bold text-white'>Get started</button>
              <button className='h-12 rounded-full border-2 border-primary/25 bg-white/80 px-9 font-Roboto text-base font-bold text-primary'>
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='px-4 pb-8 sm:px-6 lg:px-8'>
        <div className='mx-auto grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4'>
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className='rounded-3xl border border-white/70 bg-white/75 p-5 text-center shadow-[0_16px_36px_-24px_rgba(66,60,130,0.8)] backdrop-blur'
            >
              <h3 className='font-Roboto text-3xl font-semibold text-primary'>12,476</h3>
              <p className='mt-1 font-Roboto text-base font-medium text-para'>Houses Sold</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Hero
