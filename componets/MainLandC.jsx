import React from 'react'
import Landslider from './Landslider'
import LandCard from './LandCard'

const MainLandC = () => {
  return (
    <>
    <div className='w-310 h-303.5 rounded-2xl border-20 border-backgroundWHITE pt-10 pb-18 px-10 bg-Cardc flex flex-col items-center justify-self-center justify-center gap-15 lg:w-211 lg:h-401.5 md:w-165.5 md:h-406.5 max-sm:w-134 max-sm:h-524 xl:w-275 xl:h-281'>
        <Landslider/>
        <LandCard/>

    </div>


    </>
  )
}

export default MainLandC