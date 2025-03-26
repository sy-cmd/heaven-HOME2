import React from 'react'

const TextBar2 = () => {
  return (
    <>
      <div className='w-252 h-39.5 flex flex-col gap-5 items-center justify-self-center mt-20 mb-20'>
        <h1 className='text-4xl font-semibold leading-11 font-Roboto text-primary text-center'> Your Partner in Building</h1>
        <p className='text-base font-normal leading-4 text-center font-Roboto'>From vision to reality, we oversee every detail of your construction project, ensuring your dream home becomes a tangible masterpiece.</p>

        <div className='flex flex-row gap-6 justify-self-center mb-3'>
            <div>
                
            </div>
            <button className=' cursor-pointer py-4.5 px-9 bg-primary rounded-xl text-white text-base text-center  font-semibold font-Roboto'>Get started </button>
            <button className=' cursor-pointer py-4 px-9 border-2 border-para rounded-xl text-para text-base text-center font-semibold font-Roboto '> Learn more </button>
        </div>
    </div>
    
    </>
  )
}

export default TextBar2