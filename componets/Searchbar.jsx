import React from 'react'

const Searchbar = () => {
  return (
   <>
   <div className=' -mt-10 w-5xl h-56.5 rounded-xl p-12 gap-7 drop-shadow-md bg-backgroundWHITE flex flex-col justify-self-center lg:w-211 lg:h-56.5 md:w-176 max-sm:w-134.5 max-sm:h-54'>
    <h3 className='text-4xl font-semibold leading-11 font-Roboto text-primary max-sm:w-121 max-sm:h-8.5'>Search for Available Property</h3>

    <div className='flex flex-row gap-7'>
    <select className='w-69.5 h-14.5 py-4 px-4.5 border-1 border-para rounded-xl text-para md:w-32 max-sm:w-19.5 max-sm:h-14'  name="enter location" id="">
                <option value="">Location</option>
                <option value="">Lusaka</option>
                <option value="">Kabwata</option>
                <option value="">Ndola</option>
                <option value="">KASAMA</option>
              </select>

              <select  className='w-69.5 h-14.5 py-4 px-4.5 border-1 border-para rounded-xl text-para md:w-32  max-sm:w-19.5 max-sm:h-14'   name="Propety type" id="">
                <option value="">Location</option>
                <option value="">Lusaka</option>
                <option value="">Kabwata</option>
                <option value="">Ndola</option>
                <option value="">KASAMA</option>
            </select>

            <select  className='w-69.5 h-14.5 py-4 px-4.5 border-1 border-para rounded-xl text-para md:w-32  max-sm:w-19.5 max-sm:h-14'   name="enter location" id="">
                <option value="">Location</option>
                <option value="">Lusaka</option>
                <option value="">Kabwata</option>
                <option value="">Ndola</option>
                <option value="">KASAMA</option>
            </select>

            <button className='w-38 h-14.5 py-4 px-4.5 bg-primary rounded-xl text-amber-50 text-base font-semibold  font-Roboto  cursor-pointer hover:bg-amber-900' > Search Now</button>


    </div>

   </div>


   </>
  )
}

export default Searchbar