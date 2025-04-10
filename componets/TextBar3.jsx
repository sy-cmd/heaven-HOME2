import React from 'react'

const TextBar3 = () => {
  return (
    <>
       <div className='w-252 h-39.5 flex flex-col gap-5 items-center justify-self-center mt-20 mb-20 lg:h-43.5 md:w-176 md:h-44 sm:w-134 sm:h-44.5 xl:w-252 xl:h-39.5  max-xs:w-[363px] max-xs:h-[210px]'>
        <h1 className='text-4xl font-semibold leading-11 font-Roboto text-primary text-center'>Meet Our Expert Agents</h1>
        <p className='text-base font-normal leading-4 text-center font-Roboto'>Our agents have decades of experience and a proven track record of success in helping clients find their dream homes.</p>

        <div className='flex flex-row gap-6 justify-self-center mb-3'>
            <div>
                
            </div>
            <button className=' cursor-pointer hover:bg-[#183c59]  py-4.5 px-9 bg-primary rounded-xl text-white text-base text-center  font-semibold font-Roboto'>Get started </button>
            <button className=' cursor-pointer hover:bg-gray-50py-4 px-9 border-2 border-para rounded-xl text-para text-base text-center font-semibold font-Roboto '> Learn more </button>
        </div>
    </div>
    </>
  )
}

export default TextBar3