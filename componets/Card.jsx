import React from 'react'
import { LuHammer ,LuHousePlug , LuHouse} from "react-icons/lu";
import { MdColorLens } from "react-icons/md";
import { FaRegCalendarCheck,FaRegCalendarMinus , FaHandsHelping, FaRegNewspaper, FaRegCalendarAlt, FaFirstOrder, FaRegStar } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { PiFlowerTulip, PiWallBold } from "react-icons/pi";
import { IoIosEye } from "react-icons/io";
import { BiPhoneCall, BiLike,BiSupport } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";
import { FaHandsBound } from "react-icons/fa6";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { GoLightBulb } from "react-icons/go";

const Card = () => {
  return (
   <>
   <div className='xl:w-227.5 xl:h-136 border-20 border-backgroundWHITE p-4 rounded-xl flex xl:flex-col gap-3 justify-self-center items-center  bg-Cardc lg:w-158 lg:h-198 max-lg:flex-row lg:gap-4 md:w-158 md:h-198 md:flex-row max-sm:w-84.5 max-sm:h-141.5 '>

    <div className='flex xl:flex-row gap-3 lg:flex-col md:flex-col max-sm:flex-col max-sm:gap-5'>
        <div className='bg-backgroundWHITE w-68 h-58 rounded-xl p-6 flex flex-col gap-4 drop-shadow-md '>
        <LuHammer size={33} color='#0A2540' />
            <h5 className='text-xl font-semibold font-Roboto leading-5 text-primary'>Quality</h5>

            <div className='flex flex-row gap-2'>
            <MdColorLens color='#333333' />
            <p className='text-base font-normal leading-4 font-Roboto text-para'>Tailored Designs</p>
            </div>

            <div className='flex flex-row gap-2'>
            <FaRegCalendarCheck color='#333333' />
            <p  className='text-base font-normal leading-4 font-Roboto text-para'>Licensed & Insured</p>
            </div>

            <div className='flex flex-row gap-2'>
            <LuHousePlug color='#333333' />
            <p  className='text-base font-normal leading-4 font-Roboto text-para'>Quality Craftsmanship</p>

            </div>

            
            
            

        </div>

        <div className='bg-backgroundWHITE w-68 h-58 rounded-xl p-6 flex flex-col gap-4 drop-shadow-md'>
        <BsLightningCharge size={33} color='#0A2540' />
            <h5 className='text-xl font-semibold font-Roboto leading-5 text-primary'>Efficiency</h5>

            <div className='flex flex-row gap-2'>
            <HiOutlineRocketLaunch color='#333333' />
            <p className='text-base font-normal leading-4 font-Roboto text-para'>Fast Project Completion</p>
            </div>

            <div className='flex flex-row gap-2'>
            <PiFlowerTulip color='#333333' />
            <p  className='text-base font-normal leading-4 font-Roboto text-para'>Eco-Friendly Practices</p>
            </div>

            <div className='flex flex-row gap-2'>
            <LuHouse color='#333333' />
            <p  className='text-base font-normal leading-4 font-Roboto text-para'>End-to-End Management</p>

            </div>

            
            
            

        </div>

        <div className='bg-backgroundWHITE w-68 h-58 rounded-xl p-6 flex flex-col gap-4 drop-shadow-md max-sm:hidden'>
        <FaHandsBound size={33} color='#0A2540' />
            <h5 className='text-xl font-semibold font-Roboto leading-5 text-primary'>Financial Flexibility</h5>

            <div className='flex flex-row gap-2'>
            <FaRegCalendarMinus  color='#333333' />
            <p className='text-base font-normal leading-4 font-Roboto text-para'>Multiple Payment Plans </p>
            </div>

            <div className='flex flex-row gap-2'>
            <FaHandsHelping  color='#333333' />
            <p  className='text-base font-normal leading-4 font-Roboto text-para'>Trusted by 3000+ Clients</p>
            </div>

            <div className='flex flex-row gap-2'>
            <FaRegNewspaper  color='#333333' />
            <p  className='text-base font-normal leading-4 font-Roboto text-para'>Adjustable Financing Plans</p>

            </div>

            
            
            

        </div>
      
    </div>

    <div className='flex xl:flex-row gap-3 lg:flex-col md:flex-col max-sm:hidden '>
        <div className='bg-backgroundWHITE w-68 h-58 rounded-xl p-6 flex flex-col gap-4 drop-shadow-md'>
        <LuHammer size={33} color='#0A2540' />
            <h5 className='text-xl font-semibold font-Roboto leading-5 text-primary'>Quality</h5>

            <div className='flex flex-row gap-2'>
            <MdColorLens color='#333333' />
            <p className='text-base font-normal leading-4 font-Roboto text-para'>Tailored Designs</p>
            </div>

            <div className='flex flex-row gap-2'>
            <FaRegCalendarCheck color='#333333' />
            <p  className='text-base font-normal leading-4 font-Roboto text-para'>Licensed & Insured</p>
            </div>

            <div className='flex flex-row gap-2'>
            <LuHousePlug color='#333333' />
            <p  className='text-base font-normal leading-4 font-Roboto text-para'>Quality Craftsmanship</p>

            </div>

            
            
            

        </div>

        <div className='bg-backgroundWHITE w-68 h-58 rounded-xl p-6 flex flex-col gap-4 drop-shadow-md'>
        <BsLightningCharge size={33} color='#0A2540' />
            <h5 className='text-xl font-semibold font-Roboto leading-5 text-primary'>Efficiency</h5>

            <div className='flex flex-row gap-2'>
            <HiOutlineRocketLaunch color='#333333' />
            <p className='text-base font-normal leading-4 font-Roboto text-para'>Fast Project Completion</p>
            </div>

            <div className='flex flex-row gap-2'>
            <PiFlowerTulip color='#333333' />
            <p  className='text-base font-normal leading-4 font-Roboto text-para'>Eco-Friendly Practices</p>
            </div>

            <div className='flex flex-row gap-2'>
            <LuHouse color='#333333' />
            <p  className='text-base font-normal leading-4 font-Roboto text-para'>End-to-End Management</p>

            </div>

            
            
            

        </div>

        <div className='bg-backgroundWHITE w-68 h-58 rounded-xl p-6 flex flex-col gap-4 drop-shadow-md'>
        <FaHandsBound size={33} color='#0A2540' />
            <h5 className='text-xl font-semibold font-Roboto leading-5 text-primary'>Financial Flexibility</h5>

            <div className='flex flex-row gap-2'>
            <FaRegCalendarMinus  color='#333333' />
            <p className='text-base font-normal leading-4 font-Roboto text-para'>Multiple Payment Plans </p>
            </div>

            <div className='flex flex-row gap-2'>
            <FaHandsHelping  color='#333333' />
            <p  className='text-base font-normal leading-4 font-Roboto text-para'>Trusted by 3000+ Clients</p>
            </div>

            <div className='flex flex-row gap-2'>
            <FaRegNewspaper  color='#333333' />
            <p  className='text-base font-normal leading-4 font-Roboto text-para'>Adjustable Financing Plans</p>

            </div>

            
            
            

        </div>
      
    </div>

   </div>
   </>
  )
}

export default Card