import React from 'react'

const Searchbar = () => {
  return (
    <section className='mx-auto mt-4 w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_16px_36px_-24px_rgba(66,60,130,0.8)] backdrop-blur-md sm:p-8'>
        <h3 className='text-center font-Roboto text-3xl font-semibold text-primary sm:text-4xl'>
          Search for Available Property
        </h3>

        <div className='mt-2 flex justify-center'>
          <span className='rounded-full bg-nav px-4 py-1 font-Roboto text-sm font-semibold text-primary'>
            Curated picks in top neighborhoods
          </span>
        </div>

        <div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
          <select className='h-12 rounded-full border border-primary/15 bg-white px-4 font-Roboto text-para'>
            <option value=''>Location</option>
            <option value='Lusaka'>Lusaka</option>
            <option value='Kabwata'>Kabwata</option>
            <option value='Ndola'>Ndola</option>
            <option value='Kasama'>Kasama</option>
          </select>

          <select className='h-12 rounded-full border border-primary/15 bg-white px-4 font-Roboto text-para'>
            <option value=''>Property Type</option>
            <option value='house'>House</option>
            <option value='apartment'>Apartment</option>
            <option value='land'>Land</option>
          </select>

          <select className='h-12 rounded-full border border-primary/15 bg-white px-4 font-Roboto text-para'>
            <option value=''>Budget</option>
            <option value='1'>Below $100k</option>
            <option value='2'>$100k - $250k</option>
            <option value='3'>$250k+</option>
          </select>

          <button className='h-12 rounded-full bg-secondary px-4 font-Roboto text-base font-bold text-white'>Search Now</button>
        </div>
      </div>
    </section>
  )
}

export default Searchbar
