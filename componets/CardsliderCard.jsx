import React from 'react'
import card1 from '../src/assets/img/CARD/Annotation 2025-02-26 163344.png'
import card2 from '../src/assets/img/CARD/Annotation 2025-02-26 163411.png'
import card3 from '../src/assets/img/CARD/Annotation 2025-02-26 163441.png'

const CardsliderCard = () => {
  return (
   <>
   <div className='w-243.5 h-105.5 rounded-xl bg-Cardc border-20 border-backgroundWHITE flex flex-row gap-7 justify-center items-center justify-self-center lg:w-166 lg:h-201.5 lg:flex-wrap md:w-132 md:h-207 md:flex-wrap md:gap-4 max-sm:w-76 max-sm:h-317 max-sm:flex-col'>
    <div className='w-68 h-86 rounded-xl p-6 bg-backgroundWHITE drop-shadow-md flex flex-col gap-4 md:w-56 md:h-92.5 max-sm:w-56 max-sm:h-92.5'>
        <div className='flex items-center justify-self-center justify-center'>
        <img className='w-35.5 h-26.5 items-center' src={card1} alt="png" srcset="" />

        </div>
       
       
        <div className='flex flex-row gap-10.5 justify-center'>
        <h4 className='font-Roboto font-semibold text-2xl leading-6 text-primary text-center'>Rent</h4>
            
        </div>
        <div>
        <p className='font-Roboto font-normal text-base leading-4 text-center text-para' >Discover flexible rental options that fit your lifestyle. Whether short-term or long-term, we offer homes that suit your budget and preferences.</p>

        </div>
       
        <div className='flex justify-center'>
        <button className=' cursor-pointer hover:bg-gray-200 py-3 px-9 rounded-xl border-1 border-primary text-base font-semibold leading-4 text-primary text-center '>Learn more </button>

        </div>
       


    </div>

    <div className='w-68 h-86 rounded-xl p-6 bg-backgroundWHITE drop-shadow-md flex flex-col gap-4 md:w-56 md:h-92.5 max-sm:w-56 max-sm:h-92.5'>
        <div className='flex items-center justify-self-center justify-center'>
        <img className='w-35.5 h-26.5 items-center' src={card2} alt="png" srcset="" />

        </div>
       
       
        <div className='flex flex-row gap-10.5 justify-center'>
        <h4 className='font-Roboto font-semibold text-2xl leading-6 text-primary text-center'>Sell</h4>
            
        </div>
        <div>
        <p className='font-Roboto font-normal text-base leading-4 text-center text-para' >Sell your property faster and at the best price. With expert marketing and trusted agents, we ensure a seamless selling experience.</p>

        </div>
       
        <div className='flex justify-center'>
        <button className=' cursor-pointer hover:bg-gray-200 py-3 px-9 rounded-xl border-1 border-primary text-base font-semibold leading-4 text-primary text-center '>Learn more </button>

        </div>
       


    </div>
    
    <div className='w-68 h-86 rounded-xl p-6 bg-backgroundWHITE drop-shadow-md flex flex-col gap-3 md:w-56 md:h-92.5 md:-mt-5.5 max-sm:w-56 max-sm:h-92.5'>
        <div className='flex items-center justify-self-center justify-center'>
        <img className='w-35.5 h-26.5 items-center' src={card3} alt="png" srcset="" />

        </div>
       
       
        <div className='flex flex-row gap-10.5 justify-center'>
        <h4 className='font-Roboto font-semibold text-2xl leading-6 text-primary text-center'>Buy</h4>
            
        </div>
        <div>
        <p className='font-Roboto font-normal text-base leading-4 text-center text-para' >Find your dream home with ease. Explore a wide range of properties tailored to your needs, and make the home-buying process smooth and hassle-free.</p>

        </div>
       
        <div className='flex justify-center'>
        <button className=' cursor-pointer hover:bg-gray-200 py-3 px-9 rounded-xl border-1 border-primary text-base font-semibold leading-4 text-primary text-center '>Learn more </button>

        </div>
       


    </div>

   </div>
   
   </>
  )
}

export default CardsliderCard

