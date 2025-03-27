import React from 'react'
import img1 from '../src/assets/img/land/Annotation 2025-03-05 133535.png'
import img2 from '../src/assets/img/land/Annotation 2025-03-05 133644.png'
import img3 from '../src/assets/img/land/Annotation 2025-03-05 1335351.png'

const LandCard = () => {
  return (
    <>

     <div className='w-243.5 h-105.5 rounded-xl bg-Cardc border-20 border-backgroundWHITE flex flex-row gap-7 justify-center items-center justify-self-center lg:w-165.5 lg:h-212.5 lg:flex-wrap md:w-132 md:h-218 md:flex-wrap max-sm:w-76 max-sm:h-335.5 max-sm:flex-col'>
        <div className='w-68 h-86 rounded-xl p-6 bg-backgroundWHITE drop-shadow-md flex flex-col gap-3 md:w-56 md:h-98 max-sm:w-56 max-sm:h-98'>
            <div className='flex items-center justify-self-center justify-center'>
            <img className='w-35.5 h-26.5 items-center' src={img1} alt="png" srcset="" />
    
            </div>
           
           
            <div className='flex flex-row gap-10.5 justify-center'>
            <h4 className='font-Roboto font-semibold text-2xl leading-6 text-primary text-center'>Special Use Land</h4>
                
            </div>
            <div>
            <p className='font-Roboto font-normal text-base leading-4 text-center text-para' >Invest in land with unique potential—perfect for hospitals, schools, energy projects, or conservation areas. A rare opportunity for specialized development!</p>
    
            </div>
           
            <div className='flex justify-center'>
            <button className=' cursor-pointer hover:bg-gray-200 py-3 px-9 rounded-xl border-1 border-primary text-base font-semibold leading-4 text-primary text-center '>Learn more </button>
    
            </div>
           
    
    
        </div>
    
        <div className='w-68 h-86 rounded-xl p-6 bg-backgroundWHITE drop-shadow-md flex flex-col gap-3 md:w-56 md:h-98 max-sm:w-56 max-sm:h-98'>
            <div className='flex items-center justify-self-center justify-center'>
            <img className='w-35.5 h-26.5 items-center' src={img2} alt="png" srcset="" />
    
            </div>
           
           
            <div className='flex flex-row gap-10.5 justify-center'>
            <h4 className='font-Roboto font-semibold text-2xl leading-6 text-primary text-center'>Mixed-Use Land</h4>
                
            </div>
            <div>
            <p className='font-Roboto font-normal text-base leading-4 text-center text-para' >Maximize your investment with land that blends residential, commercial, and office spaces. Ideal for developers looking to create thriving, multi-purpose communities!</p>
    
            </div>
           
            <div className='flex justify-center'>
            <button className=' cursor-pointer hover:bg-gray-200 py-3 px-9 rounded-xl border-1 border-primary text-base font-semibold leading-4 text-primary text-center '>Learn more </button>
    
            </div>
           
    
    
        </div>
        
        <div className='w-68 h-86 rounded-xl p-6 bg-backgroundWHITE drop-shadow-md flex flex-col gap-4 md:w-56 md:h-98 md:-mt-5.5 max-sm:w-56 max-sm:h-98'>
            <div className='flex items-center justify-self-center justify-center'>
            <img className='w-35.5 h-26.5 items-center' src={img3} alt="png" srcset="" />
    
            </div>
           
           
            <div className='flex flex-row gap-10.5 justify-center'>
            <h4 className='font-Roboto font-semibold text-2xl leading-6 text-primary text-center'>Recreational Land</h4>
                
            </div>
            <div>
            <p className='font-Roboto font-normal text-base leading-4 text-center text-para' >Own a piece of nature! Perfect for resorts, camping, hunting, or outdoor retreats—turn this land into a profitable getaway destination.</p>
    
            </div>
           
            <div className='flex justify-center'>
            <button className=' cursor-pointer hover:bg-gray-200 py-3 px-9 rounded-xl border-1 border-primary text-base font-semibold leading-4 text-primary text-center '>Learn more </button>
    
            </div>
           
    
    
        </div>
    
       </div>
    </>
  )
}

export default LandCard