import React from 'react'
import heroHouse from '../src/assets/img/logo/Annotation 2025-03-06 124313.png';

// w-full h-269
const Hero = () => {
  return (
    <>
    <div className='   bg-backgroundS '>
        
        <div className='flex justify-self-center'>
        <img className='w-171.5 h-59 ' src={ heroHouse} alt="" />
        </div>

        <div className='flex flex-col items-center gap-10'>
        <h1 className='  text-8xl font-black leading-26.5  tracking-[16px] text-center text-primary font-Roboto ' >Your Dream Home
        Starts Here.</h1>
        <p className=' w-148 h-12.5 text-base text-para font-light font-Roboto leading-6 text-center '>
        Find your dream home with our expert guidance. We connect you with top-rated properties 
        and provide personalized service every step of the way.
        </p>
        <div className='flex flex-row gap-6 justify-self-center mb-3'>
            <button className=' cursor-pointer py-4.5 px-9 bg-primary rounded-xl text-white text-base text-center  font-semibold font-Roboto'>Get started </button>
            <button className=' cursor-pointer py-4 px-9 border-2 border-para rounded-xl text-para text-base text-center font-semibold font-Roboto '> Learn more </button>
        </div>
        </div>
    </div>

    <div className='flex flex-row gap-22.5 pl-2.5 pr-2.5 justify-center items-center bg-backgroundS  h-50 -mt-5 '>
        <div className='flex flex-col gap-4'>
            <h3 className='text-4xl font-semibold leading-11 text-center text-para font-Roboto'>12,476</h3>
            <h5 className='font-normal text-xl leading-6 text-center text-para font-Roboto' >Houses Sold</h5>
        </div>

        <div className='flex flex-col gap-4'>
            <h3 className='text-4xl font-semibold leading-11 text-center text-para font-Roboto'>12,476</h3>
            <h5 className='font-normal text-xl leading-6 text-center text-para font-Roboto' >Houses Sold</h5>
        </div>

        <div className='flex flex-col gap-4'>
            <h3 className='text-4xl font-semibold leading-11 text-center text-para font-Roboto'>12,476</h3>
            <h5 className='font-normal text-xl leading-6 text-center text-para font-Roboto' >Houses Sold</h5>
        </div>

        <div className='flex flex-col gap-4'>
            <h3 className='text-4xl font-semibold leading-11 text-center text-para font-Roboto'>12,476</h3>
            <h5 className='font-normal text-xl leading-6 text-center text-para font-Roboto' >Houses Sold</h5>
        </div>

      

    

     
    </div>


    </>
  )
}

export default Hero