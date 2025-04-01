import React from 'react'
import { FaArrowUpLong,FaCalendarCheck, FaMeta ,FaXTwitter,  FaInstagram  } from "react-icons/fa6";
import logo from '../src/assets/img/logo/Annotation 2025-03-05 162204.png'

const Footer = () => {
  return (
    <>
    <div className='xl:w-full xl:h-226.5 bg-primary flex flex-col gap-10 justify-items-center justify-center lg:w-5xl lg:h-358.5 md:w-192 md:h-358.5 max-sm:w-150 max-sm:h-358.5'>

        <div className=' ml-10 xl:w-315 xl:h-164 flex xl:flex-col gap-12 justify-items-center justify-self-center lg:flex-col lg:gap-2.5 lg:w-211 lg:h-287.5 md:w-176 md:h-287 max-sm:w-108  max-sm:h-287.5'>
            <div className='flex flex-row gap-1  justify-items-center '>
                <img className='w-16 h-15 rounded-xl py-1 px-2' src={logo} alt="logo" srcset="" />
                <p className=' mt-4 text-3xl font-Roboto font-extrabold leading-9 text-backgroundWHITE'>Haven Homes</p>
            </div>

            <div className='flex flex-col gap-6 xl:hidden' >
                    <p className='font-Roboto font-semibold text-xl leading-5 text-backgroundWHITE'>Subscribe to Our Newsletter</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Get the latest updates on properties, market trends, and
                    exclusive offers. </p>

                    <div className='flex flex-row  gap-6'>
                        <input className='w-63 h-13.5 rounded-xl border-1 border-backgroundWHITE py-4.5 px-2.5 text-xs font-Roboto font-normal leading-3 text-bartext2' type="email" placeholder='Enter Email' name='email' required />
                        <button className='w-36 h-13.5 rounded-xl py-4.5 px-9 bg-secondary font-Roboto font-semibold text-base text-center text-backgroundWHITE '> Subscribe</button>
                    </div>
                </div>

       {/* innerDIV */}
        <div className='   xl:w-266.5 xl:h-164 xl:-mt-5 flex xl:flex-row xl:gap-10 justify-center justify-self-center  lg:flex-col lg:mt-10 lg:w-211   md:flex-col md:gap-10  md:w-111.5 md:h-258.5 max-sm:w-108  max-sm:flex-col max-sm:h-287.5'>
            {/* first-row */}
            <div className='flex xl:flex-col gap-16 lg:flex-row md:flex-row max-sm:flex-row'>
                <div className='flex flex-col gap-6 xl:w-45' >
                    <p className='font-Roboto font-semibold text-xl leading-5 text-backgroundWHITE'>Deal with us</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Buy a House</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Sell a House</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Rent a House</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Find an Apartment</p>
                </div>

                <div className='flex flex-col gap-6' >
                    <p className='font-Roboto font-semibold text-xl leading-5 text-backgroundWHITE'>Build with us</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Fully Custom Home Plans</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Semi-Custom Home Plans</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Pre-Designed House Plans</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Pricing & Budget</p>
                </div>
              
            </div>
            {/* second-row */}
            <div className='xl:flex xl:flex-col gap-16 lg:flex-row md:flex-row max-sm:flex-row xl:w-50.5'>
                <div className='flex flex-col gap-6 xl:w-45' >
                    <p className='font-Roboto font-semibold text-xl leading-5 text-backgroundWHITE'>About our Agents</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Meet Our Agents</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Find a Local Agent</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Schedule a Consultation</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Join Our Team</p>
                </div>

                <div className='flex flex-col gap-6' >
                    <p className='font-Roboto font-semibold text-xl leading-5 text-backgroundWHITE'>About Lands</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Resort land</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Farm land</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Ranch land</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Mix-use land</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Mix-use land</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Special use land</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Recreational land</p>
                </div>
              
            </div>

            {/* third-row */}
            <div className='flex flex-col xl:gap-27'>
                <div className='xl:flex flex-col gap-6 lg:hidden md:hidden max-sm:hidden' >
                    <p className='font-Roboto font-semibold text-xl leading-5 text-backgroundWHITE'>Subscribe to Our Newsletter</p>
                    <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>Get the latest updates on properties, market trends, and
                    exclusive offers. </p>

                    <div className='flex flex-row  gap-6'>
                        <input className='w-63 h-13.5 rounded-xl border-1 border-backgroundWHITE py-4.5 px-2.5 text-xs font-Roboto font-normal leading-3 text-bartext2' type="email" placeholder='Enter Email' name='email' required />
                        <button className='w-36 h-13.5 rounded-xl py-4.5 px-9 bg-secondary font-Roboto font-semibold text-base text-center text-backgroundWHITE '> Subscribe</button>
                    </div>
                </div>

                <div className='flex flex-col gap-6' >
                  <div className='flex flex-row gap-12'>
                    <div className='flex flex-col gap-6' >
                        <p className='font-Roboto font-semibold text-xl leading-5 text-backgroundWHITE'>Contact us</p>
                        <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'> 📞 +1 (555) 123-4567</p>
                        <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'> ✉️ info@havenhomes.com</p>
                        <p className='font-Roboto font-normal text-base leading-4 text-backgroundWHITE'>📍123 Dream Street, New York, NY</p>

                    </div>
                    <div className='flex flex-col gap-3 '>
                        <p className='font-Roboto font-semibold text-xl leading-5 text-backgroundWHITE'>Follow us</p>

                        <div className='w-8.5 h-8.5 rounded-lg p-2 bg-secondary text-backgroundWHITE'>
                        <FaMeta /> 

                        </div>

                        <div className='w-8.5 h-8.5 rounded-lg p-2 bg-secondary text-backgroundWHITE'>
                        <FaXTwitter />

                        </div>

                        <div className='w-8.5 h-8.5 rounded-lg p-2 bg-secondary text-backgroundWHITE'>
                        <FaInstagram /> 

                        </div>

                    
                    </div>

                  </div>
                </div>
              
            </div>
            

        </div>

        </div>

        <div className='flex flex-col gap-1 justify-baseline'>
            <p className='font-Roboto font-normal text-base leading-4 text-center text-backgroundWHITE'>© 2025 Haven Homes. All rights reserved.</p>
            <p className='font-Roboto font-normal text-base leading-4 text-center text-backgroundWHITE' >Privacy Policy | Terms of Service</p>
        </div>

    </div>


    </>
  )
}

export default Footer