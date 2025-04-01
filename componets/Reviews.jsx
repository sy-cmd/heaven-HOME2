import React from 'react'
import { FaStar } from "react-icons/fa";
import P1 from '../src/assets/img/Reviews/786b226d5d70e39a1dfa0e817fee1e4d.jfif'
import P2 from '../src/assets/img/Reviews/88ba2be5b4f555a16238a8536bb2372a.jfif'
import P3 from '../src/assets/img/Reviews/3141430bf7e23b086b9a8323f0afd0aa.jfif'
import P4 from '../src/assets/img/Reviews/367bb3942476bc56328ab6c43b7a75d8.jfif'
import P5 from '../src/assets/img/Reviews/270613ec07e31b96acbc3a664717b0aa.jfif'
import P6 from '../src/assets/img/Reviews/0db471587300aebc6038b4b88d3a8aa8.jfif'
import P7 from '../src/assets/img/Reviews/0b5a83140e687b3b96f3c0eaa886d70a.jfif'
import P8 from '../src/assets/img/Reviews/325f5b9852308c72dd68e2b446454903.jfif'
import P9 from '../src/assets/img/Reviews/a50da17c794f41c2b771e5502c81c73e.jfif'

const Reviews = () => {
  return (
   <>
   <div className='xl:w-317 xl:h-276 flex flex-col gap-3 justify-self-center lg:w-211 lg:h-380.5 md:w-176 md:h-502 max-sm:w-134 max-sm:h-405.5'>
    {/* contents */}
    <div className='xl:w-317 xl:h-136.5 flex flex-row gap-3 lg:w-211 lg:h-192 lg:gap-3 lg:items-center md:w-176 md:h-160.5 max-sm:w-134 max-sm:h-204.5'>
        {/* first-contents */}
        <div className='xl:w-103.5 xl:h-136.5 flex flex-col p-5 gap-3 bg-backgroundWHITE rounded-xl lg:flex lg:w-70.5 lg:h-192 lg:gap-1 md:w-86.5 md:h-160.5 max-sm:w-65.5 max-sm:h-204.5'>

            <div className='flex flex-row gap-3 justify-items-center'>
                <img className='w-17 h-17 rounded-4xl' src={P1} alt="" srcset="" />
                <div className='flex flex-col gap-1 mt-4'>
                    <p className='font-Roboto font-semibold text-base leading-4 text-black' >Jane Cooper</p>
                    <p className='font-Roboto font-normal text-xs leading-3 text-bartext3'>eBay</p>
                </div>
            </div>
            <div>
            <p className='font-Roboto font-normal leading-6 text-base text-bartext4 max-lg:w-76.5 max-lg:h-119 max-sm:w-55.5 max-sm:h-162.5 '>
            As a seasoned CEO with years of experience in the real estate industry, I have had the opportunity to work with numerous real estate firms, but my experience with Haven Homes has been nothing short of exceptional. Their commitment to excellence, market expertise, and customer-centric approach truly set them apart in a competitive industry. One of the standout qualities of Haven Homes is their deep understanding of the market. Whether it’s residential, commercial, or investment properties, their team possesses unparalleled expertise. Their data-driven insights and ability to anticipate market trends have proven invaluable, ensuring that clients receive the most strategic advice possible.
            </p>

            </div>
           

            <div className=' - flex flex-row gap-2 mt-5'>
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />

            </div>


        </div>

        {/* second-contectnts */}
        <div className=' lg:flex xl:w-103.5 xl:h-136.5 flex flex-col gap-5 lg:w-70.5 lg:h-192 md:w-86.5 md:h-161 max-sm:w-65.5 max-sm:h-204.5 '>
            <div className='xl:w-103.5 xl:h-66.5 rounded-xl p-5 bg-backgroundWHITE flex flex-col xl:gap-2.5  lg:w-70.5 lg:h-94.5 md:w-86.5 md:h-79 max-sm:w-65.5 max-sm:h-101 max-sm:gap-10' >
            <div className='flex flex-row gap-3 justify-items-center'>
                <img className='w-17 h-17 rounded-4xl' src={P2} alt="" srcset="" />
                <div className='flex flex-col gap-1 mt-4'>
                    <p className='font-Roboto font-semibold text-base leading-4 text-black' >Jenny Wilson</p>
                    <p className='font-Roboto font-normal text-xs leading-3 text-bartext3'>IBM</p>
                </div>
            </div>
            <p className='font-Roboto font-normal leading-6 text-base text-bartext4 ' >
            Haven Homes exceeded my expectations. They were knowledgeable, responsive, and truly cared about finding me the right property. I'm so grateful for their help.
            </p>
            <div className=' - flex flex-row gap-2 mt-5 xl:mt-0 lg:mt-18'>
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />

            </div>


            </div>
            {/* inersecond */}
            <div className='xl:w-103.5 xl:h-66.5 rounded-xl p-5 bg-backgroundWHITE flex flex-col gap-2.5 lg:w-70.5 lg:h-94.5 md:w-86.5 md:h-79 max-sm:w-65.5 max-sm:h-101 max-sm:gap-13' >
            <div className='flex flex-row gap-3 justify-items-center'>
                <img className='w-17 h-17 rounded-4xl' src={P3} alt="" srcset="" />
                <div className='flex flex-col gap-1 mt-4'>
                    <p className='font-Roboto font-semibold text-base leading-4 text-black' >Brooklyn Simmons</p>
                    <p className='font-Roboto font-normal text-xs leading-3 text-bartext3'>McDonald's</p>
                </div>
            </div>
            <p className='font-Roboto font-normal leading-6 text-base text-bartext4 '>
            I was impressed by Haven Homes professionalism and dedication. They went above and beyond to ensure a smooth and successful transaction. Thank you!
            </p>
            <div className=' - flex flex-row gap-2 mt-5 xl:mt-0 lg:mt-23'>
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />

            </div>


            </div>
        </div>
        {/* third-contents */}
        <div className='xl:w-103.5 xl:h-136.5 flex flex-col p-5 gap-3 bg-backgroundWHITE rounded-xl lg:flex  lg:w-70.5 lg:h-192 lg:gap-5 md:hidden max-sm:hidden xl:flex'>
            <div className='flex flex-row gap-3 justify-items-center'>
                <img className='w-17 h-17 rounded-4xl' src={P4} alt="" srcset="" />
                <div className='flex flex-col gap-1 mt-4'>
                    <p className='font-Roboto font-semibold text-base leading-4 text-black' >Wade Warren</p>
                    <p className='font-Roboto font-normal text-xs leading-3 text-bartext3'>McDonald's</p>
                </div>
            </div>
            <div>
            <p className='font-Roboto font-normal leading-6 text-base text-bartext4 '>
            A company’s success is largely defined by its commitment to customer satisfaction, and Haven Homes excels in this area. Their team prioritizes personalized service, taking the time to understand each client's unique needs. They are responsive, proactive, and always willing to go the extra mile to ensure a smooth experience. The positive testimonials from their clients reflect this dedication. Their team prioritizes personalized service, taking the time to understand each client's unique needs. They are responsive, proactive, and always willing to go the extra mile to ensure a smooth experience. 


            </p>

            </div>
           

            <div className=' - flex flex-row gap-2 mt-5 lg:mt-15'>
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />

            </div>


        </div>

    </div>

    {/* content blow 768px */}
    <div className='w-317 h-136.5 flex flex-row gap-3  lg:w-211  lg:h-192 lg:gap-3 lg:items-center md:w-176 md:h-160.5 lg:hidden max-sm:hidden'>

    <div className='w-103.5 h-136.5 flex flex-col p-5 gap-3 bg-backgroundWHITE rounded-xl  lg:w-64.5 lg:h-192 lg:gap-5   md:w-86.5 md:h-160.5'>
            <div className='flex flex-row gap-3 justify-items-center'>
                <img className='w-17 h-17 rounded-4xl' src={P4} alt="" srcset="" />
                <div className='flex flex-col gap-1 mt-4'>
                    <p className='font-Roboto font-semibold text-base leading-4 text-black' >Wade Warren</p>
                    <p className='font-Roboto font-normal text-xs leading-3 text-bartext3'>McDonald's</p>
                </div>
            </div>
            <div>
            <p className='font-Roboto font-normal leading-6 text-base text-bartext4 md:w-76.5 md:h-119 '>
            A company’s success is largely defined by its commitment to customer satisfaction, and Haven Homes excels in this area. Their team prioritizes personalized service, taking the time to understand each client's unique needs. They are responsive, proactive, and always willing to go the extra mile to ensure a smooth experience. The positive testimonials from their clients reflect this dedication. Their team prioritizes personalized service, taking the time to understand each client's unique needs. They are responsive, proactive, and always willing to go the extra mile to ensure a smooth experience. 


            </p>

            </div>
           

            <div className=' - flex flex-row gap-2 mt-5 lg:mt-15'>
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />

            </div>


        </div>
        {/* second */}
        <div className=' w-103.5 h-136.5 flex flex-col gap-5 lg:w-63.5  lg:h-192 md:w-86.5 md:h-161'>
            <div className='w-103.5 h-66.5 rounded-xl p-5 bg-backgroundWHITE flex flex-col gap-2.5 lg:w-63.5 lg:h-94.5 md:w-86.5 md:h-79' >
            <div className='flex flex-row gap-3 justify-items-center'>
                <img className='w-17 h-17 rounded-4xl' src={P6} alt="" srcset="" />
                <div className='flex flex-col gap-1 mt-4'>
                    <p className='font-Roboto font-semibold text-base leading-4 text-black' >Cody Fisher</p>
                    <p className='font-Roboto font-normal text-xs leading-3 text-bartext3'>Gillette</p>
                </div>
            </div>
            <p className='font-Roboto font-normal leading-6 text-base text-bartext4 ' >
            Working with Haven Homes was a pleasure. They were honest, transparent, and always put my needs first. I highly recommend them to anyone looking to buy or sell a home.
            </p>
            <div className=' - flex flex-row gap-2 mt-5 lg:mt-18'>
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />

            </div>


            </div>
            {/* inersecond */}
            <div className='w-103.5 h-66.5 rounded-xl p-5 bg-backgroundWHITE flex flex-col gap-2.5 lg:w-63.5 lg:h-94.5 md:w-86.5 md:h-79' >
            <div className='flex flex-row gap-3 justify-items-center'>
                <img className='w-17 h-17 rounded-4xl' src={P7} alt="" srcset="" />
                <div className='flex flex-col gap-1 mt-4'>
                    <p className='font-Roboto font-semibold text-base leading-4 text-black' >Floyd miles</p>
                    <p className='font-Roboto font-normal text-xs leading-3 text-bartext3'>MasterCard</p>
                </div>
            </div>
            <p className='font-Roboto font-normal leading-6 text-base text-bartext4 '>
            I highly recommend Haven Homes. They provided excellent guidance and support throughout the entire home buying process. They made it stress-free!
            </p>
            <div className=' - flex flex-row gap-2 mt-5 lg:mt-18'>
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />

            </div>


            </div>
        </div>
    </div>


    {/* contents */}
    <div className='xl:w-317 xl:h-136.5 flex flex-row gap-3 lg:flex lg:w-211  lg:h-192 lg:gap-3 lg:items-center md:w-176 md:h-160.5 max-sm:w-134 max-sm:h-204.5'>
        {/* first-contents */}
        <div className='xl:w-103.5 xl:h-136.5 xl:flex flex-col p-5 gap-3 bg-backgroundWHITE rounded-xl  lg:w-70.5 lg:h-192 lg:gap-5 md:w-86.5 md:h-160.5  max-sm:hidden'>
            <div className='flex flex-row gap-3 justify-items-center'>
                <img className='w-17 h-17 rounded-4xl' src={P5} alt="" srcset="" />
                <div className='flex flex-col gap-1 mt-4'>
                    <p className='font-Roboto font-semibold text-base leading-4 text-black' >Robert Fox</p>
                    <p className='font-Roboto font-normal text-xs leading-3 text-bartext3'>Apple</p>
                </div>
            </div>
            <div>
            <p className='font-Roboto font-normal leading-6 text-base text-bartext4 max-lg:w-76.5 max-lg:h-119  '>
            Another significant advantage of working with Haven Homes is their extensive industry network. Their strong connections with developers, financial institutions, legal experts, and fellow real estate professionals enable them to offer comprehensive services beyond just buying and selling. Clients benefit from access to off-market properties, exclusive deals, and valuable partnerships. I highly recommend Haven Homes. They provided excellent guidance and support throughout the entire home buying process and made the entire home selling process easy and stress-free. I would definitely use their services again.


            </p>

            </div>
           

            <div className=' - flex flex-row gap-2 mt-5 lg:mt-10'>
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />

            </div>


        </div>
        
        {/* second-contectnts */}
        <div className=' xl:w-103.5 xl:h-136.5 xl:flex flex-col gap-5 lg:flex lg:w-70.5  lg:h-192 md:hidden max-sm:w-65.5 max-sm:h-198 '>
            <div className='xl:w-103.5 xl:h-66.5 rounded-xl p-5 bg-backgroundWHITE flex flex-col gap-2.5 lg:w-70.5 lg:h-94.5 max-sm:w-65.5  max-sm:h-97.5 max-sm:gap-8' >
            <div className='flex flex-row gap-3 justify-items-center'>
                <img className='w-17 h-17 rounded-4xl' src={P6} alt="" srcset="" />
                <div className='flex flex-col gap-1 mt-4'>
                    <p className='font-Roboto font-semibold text-base leading-4 text-black' >Cody Fisher</p>
                    <p className='font-Roboto font-normal text-xs leading-3 text-bartext3'>Gillette</p>
                </div>
            </div>
            <p className='font-Roboto font-normal leading-6 text-base text-bartext4 ' >
            Working with Haven Homes was a pleasure. They were honest, transparent, and always put my needs first. I highly recommend them to anyone looking to buy or sell a home.
            </p>
            <div className=' - flex flex-row gap-2 mt-5 xl:mt-0 lg:mt-18'>
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />

            </div>


            </div>
            {/* inersecond */}
            <div className='xl:w-103.5 xl:h-66.5 rounded-xl p-5 bg-backgroundWHITE flex flex-col gap-2.5 lg:w-70.5  lg:h-94.5 max-sm:w-65.5  max-sm:h-97.5 max-sm:gap-10' >
            <div className='flex flex-row gap-3 justify-items-center'>
                <img className='w-17 h-17 rounded-4xl' src={P7} alt="" srcset="" />
                <div className='flex flex-col gap-1 mt-4'>
                    <p className='font-Roboto font-semibold text-base leading-4 text-black' >Floyd miles</p>
                    <p className='font-Roboto font-normal text-xs leading-3 text-bartext3'>MasterCard</p>
                </div>
            </div>
            <p className='font-Roboto font-normal leading-6 text-base text-bartext4 '>
            I highly recommend Haven Homes. They provided excellent guidance and support throughout the entire home buying process. They made it stress-free!
            </p>
            <div className=' - flex flex-row gap-2 mt-5 lg:mt-18 xl:mt-0'>
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />

            </div>


            </div>
        </div>
        {/* third-contents */}
        <div className=' xl:w-103.5 xl:h-136.5 flex flex-col gap-5 lg:flex lg:w-70.5  lg:h-192 md:w-86.5 md:h-161  max-sm:w-65.5 max-sm:h-198'>
            <div className='xl:w-103.5 xl:h-66.5 rounded-xl p-5 bg-backgroundWHITE flex flex-col gap-2.5 lg:flex lg:w-70.5 lg:h-94.5 md:w-86.5 md:h-79 max-sm:w-65.5  max-sm:h-97.5 max-sm:gap-10 ' >
            <div className='flex flex-row gap-3 justify-items-center'>
                <img className='w-17 h-17 rounded-4xl' src={P8} alt="" srcset="" />
                <div className='flex flex-col gap-1 mt-4'>
                    <p className='font-Roboto font-semibold text-base leading-4 text-black' >Kristin Watson</p>
                    <p className='font-Roboto font-normal text-xs leading-3 text-bartext3'>Apple</p>
                </div>
            </div>
            <p className='font-Roboto font-normal leading-6 text-base text-bartext4 ' >
            The team at Haven Homes is amazing! They were patient, understanding, and always available to answer my questions. I couldn't be happier with my experience.
            </p>
            <div className=' - flex flex-row gap-2 mt-5 lg:mt-18 xl:mt-0'>
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />

            </div>


            </div>
            {/* inersecond */}
            <div className='xl:w-103.5 xl:h-66.5 rounded-xl p-5 bg-backgroundWHITE flex flex-col gap-2.5 lg:w-70.5 lg:h-94.5 md:w-86.5 md:h-79 max-sm:w-65.5  max-sm:h-97.5 max-sm:gap-10' >
            <div className='flex flex-row gap-3 justify-items-center'>
                <img className='w-17 h-17 rounded-4xl' src={P9} alt="" srcset="" />
                <div className='flex flex-col gap-1 mt-4'>
                    <p className='font-Roboto font-semibold text-base leading-4 text-black' >Courtney Henry</p>
                    <p className='font-Roboto font-normal text-xs leading-3 text-bartext3'>Starbucks</p>
                </div>
            </div>
            <p className='font-Roboto font-normal leading-6 text-base text-bartext4 '>
            I'm so thankful for the team at Haven Homes. They made the entire home selling process easy and stress-free. I would definitely use their services again.
            </p>
            <div className=' - flex flex-row gap-2 mt-5 lg:mt-18 xl:mt-0'>
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />
            <FaStar size={20} color='#F5B843' />

            </div>


            </div>
        </div>
       


    </div>

   </div>
   </>
  )
}

export default Reviews