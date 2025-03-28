import React from 'react'
import AgentSwiper from './AgentSwiper'
import AgentCard from './AgentCard'

const MainAgent = () => {
  return (
   <>
   <div className='xl:w-250.5 xl:h-241.5 flex flex-col gap-7.5 rounded-3xl p-6 bg-backgroundWHITE drop-shadow-md justify-self-center place-items-center lg:w-226.5 lg:h-243.5 md:w-176 md:h-320 max-sm:w-133 max-sm:h-320 xs:w-85.5 xs:h-169.5 '>
    <AgentSwiper/>
    <AgentCard/>

   </div>
   </>
  )
}

export default MainAgent