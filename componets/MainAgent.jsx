import React from 'react'
import AgentSwiper from './AgentSwiper'
import AgentCard from './AgentCard'

const MainAgent = () => {
  return (
    <section className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='rounded-3xl border border-white/70 bg-white/70 p-4 shadow-[0_16px_36px_-24px_rgba(66,60,130,0.8)] backdrop-blur-md sm:p-6 lg:p-8'>
        <AgentSwiper />
        <div className='mt-8'>
          <AgentCard />
        </div>
      </div>
    </section>
  )
}

export default MainAgent
