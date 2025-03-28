import React from 'react'
import { Carslider } from './Carslider'
import CardsliderCard from './CardsliderCard'

const HouseMailSw = () => {
  return (
   <>
   <div className='w-310 h-292 rounded-2xl border-20 border-backgroundWHITE px-10 pt-10 pb-15 bg-Cardc justify-self-center flex flex-col gap-10 justify-center items-center justify-items-center lg:w-211 lg:h-390 md:w-165.5 md:h-395.5 max-sm:w-124 max-sm:h-505.5 xl:w-275 xl:h-294.5 xs:w-79.5 xs:h-472'>
    <Carslider/>
    <CardsliderCard/>

   </div>

   </>
  )
}

export default HouseMailSw