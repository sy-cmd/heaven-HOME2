import React from 'react'

const Searchbar = () => {
  return (
   <>
   <div className=' -mt-10 w-5xl h-56.5 rounded-xl p-12 gap-7 drop-shadow-md bg-backgroundWHITE flex flex-col justify-self-center lg:w-211 lg:h-56.5 md:w-176 sm:w-134.5 sm:h-54 max-xs:w-90.5 max-xs:h-83 max-xs:flex-col xl:w-275 xl:h-56.5'>
    <h3 className='text-4xl font-semibold leading-11 font-Roboto text-primary sm:w-121 sm:h-8.5 text-center max-xs:text-[30px]'>Search for Available Property</h3>

    <div className='flex flex-row gap-7 max-xs:hidden xl:gap-8'>
      
      
    <select className='w-69.5 h-14.5 py-4 px-4.5 border-1 border-para rounded-xl text-para md:w-32 sm:w-19.5 sm:h-14 xl:w-57 xl:h-14.5 max-xs:w-[79px] max-xs:h-[57px]'  name="enter location" id="">
                <option value="">Location</option>
                <option value="">Lusaka</option>
                <option value="">Kabwata</option>
                <option value="">Ndola</option>
                <option value="">KASAMA</option>
              </select>

              <select  className='w-69.5 h-14.5 py-4 px-4.5 border-1 border-para rounded-xl text-para md:w-32  sm:w-19.5 sm:h-14 xl:w-57 xl:h-14.5  max-xs:w-[79px] max-xs:h-[57px]'   name="Propety type" id="">
                <option value="">Location</option>
                <option value="">Lusaka</option>
                <option value="">Kabwata</option>
                <option value="">Ndola</option>
                <option value="">KASAMA</option>
            </select>

            <select  className='w-69.5 h-14.5 py-4 px-4.5 border-1 border-para rounded-xl text-para md:w-32  sm:w-19.5 sm:h-14 xl:w-57 xl:h-14.5 max-xs:w-[79px] max-xs:h-[57px]'   name="enter location" id="">
                <option value="">Location</option>
                <option value="">Lusaka</option>
                <option value="">Kabwata</option>
                <option value="">Ndola</option>
                <option value="">KASAMA</option>
            </select>
            

            <button className='w-38 h-14.5 py-4 px-4.5 bg-primary rounded-xl text-amber-50 text-base font-semibold  font-Roboto cursor-pointer hover:bg-[#183c59]  xl:w-57 xl:h-14.5 ' > Search Now</button>


    </div>
    {/* below 600px */}
    <div className='flex flex-col gap-6 sm:hidden'>
      <div className='flex flex-row gap-6'>
      <select className='w-69.5 h-14.5 py-4 px-4.5 border-1 border-para rounded-xl text-para md:w-32 sm:w-19.5 sm:h-14 xl:w-57 xl:h-14.5 max-xs:w-[79px] max-xs:h-[57px]'  name="enter location" id="">
                <option value="">Location</option>
                <option value="">Lusaka</option>
                <option value="">Kabwata</option>
                <option value="">Ndola</option>
                <option value="">KASAMA</option>
              </select>

              <select  className='w-69.5 h-14.5 py-4 px-4.5 border-1 border-para rounded-xl text-para md:w-32  sm:w-19.5 sm:h-14 xl:w-57 xl:h-14.5  max-xs:w-[79px] max-xs:h-[57px]'   name="Propety type" id="">
                <option value="">Location</option>
                <option value="">Lusaka</option>
                <option value="">Kabwata</option>
                <option value="">Ndola</option>
                <option value="">KASAMA</option>
            </select>

            <select  className='w-69.5 h-14.5 py-4 px-4.5 border-1 border-para rounded-xl text-para md:w-32  sm:w-19.5 sm:h-14 xl:w-57 xl:h-14.5 max-xs:w-[79px] max-xs:h-[57px]'   name="enter location" id="">
                <option value="">Location</option>
                <option value="">Lusaka</option>
                <option value="">Kabwata</option>
                <option value="">Ndola</option>
                <option value="">KASAMA</option>
            </select>
      </div>
      <div className='flex items-center justify-center'>
      <button className='w-38 h-14.5 py-4 px-4.5 bg-primary rounded-xl text-amber-50 text-base font-semibold  font-Roboto  cursor-pointer hover:bg-amber-900  xl:w-57 xl:h-14.5 it ' > Search Now</button>

      </div>
     
    </div>

   </div>


   </>
  )
}

export default Searchbar