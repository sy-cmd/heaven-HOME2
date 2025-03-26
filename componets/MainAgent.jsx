import React from 'react'
import AgentSwiper from './AgentSwiper'
import AgentCard from './AgentCard'

const MainAgent = () => {
  return (
   <>
   <div className='w-250.5 h-241.5 flex flex-col gap-7.5 rounded-3xl p-6 bg-backgroundWHITE drop-shadow-md justify-self-center place-items-center lg:w-226.5 lg:h-243.5'>
    <AgentSwiper/>
    <AgentCard/>

   </div>
   </>
  )
}

export default MainAgent