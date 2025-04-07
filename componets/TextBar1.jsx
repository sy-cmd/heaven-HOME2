import React from 'react'

const TextBar1 = () => {
  return (
    <>
    <div className='xl:w-252 xl:h-39.5 flex flex-col gap-5 items-center justify-self-center mt-20 mb-20 lg:w-177 lg:h-43.5 md:w-176 md:h-44 sm:w-134 sm:h-44.5'>
        <h1 className='text-4xl font-semibold leading-11 font-Roboto text-primary text-center'>Rent, Sell and Buy with us</h1>
        <p className='text-base font-normal leading-4 text-center font-Roboto'>Whether you're buying, selling, or renting, we make the process effortless with expert support and top-tier listings.</p>

        <div className='flex flex-row gap-6 justify-self-center mb-3'>
            <button className=' cursor-pointer py-4.5 px-9 bg-primary rounded-xl text-white text-base text-center  font-semibold font-Roboto'>Get started </button>
            <button className=' cursor-pointer py-4 px-9 border-2 border-para rounded-xl text-para text-base text-center font-semibold font-Roboto '> Learn more </button>
        </div>
    </div>

    </>
  )
}

export default TextBar1