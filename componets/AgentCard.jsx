import React from 'react'
import { FaArrowUpLong,FaCalendarCheck, FaMeta ,FaXTwitter,  FaInstagram  } from "react-icons/fa6";
import { LuHouse,LuHandshake ,LuPhone } from "react-icons/lu";
import { PiStarFourFill } from "react-icons/pi";
import { TbAward } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { VscLocation } from "react-icons/vsc";
import { SlEnvolope } from "react-icons/sl";
import A1 from '../src/assets/img/agent/4eca6080adf4a40bf122ec344b6016d5 (1).jfif'
import A2 from '../src/assets/img/agent/5abf7fb8c0eb3eab2663263c1235d240 (1).png'

const AgentCard = () => {
  return (
   <>
   <div className='flex xl:flex-row gap-3 md:flex-col max-sm:flex-col xs:hidden'>
    {/* first-card */}
    <div className='w-111 h-70.5 rounded-xl px-4 pt-3 pb-6  bg-Cardc flex flex-col gap-3'>
    <h4 className=' font-Roboto text-xl font-semibold leading-5 text-black text-center'>Agents Stats</h4>
        {/* agent stats */}
        <div className='w-103 h-52.5 flex flex-col gap-3'>
            <div className='flex flex-row gap-3.5' >
                {/* mainstatus */}
                <div className='w-50 h-24.5 rounded-xl drop-shadow-md p-3 bg-backgroundWHITE' >
                    <div className='flex flex-row gap-2.5' >
                        {/* stats */}
                        <div className='flex flex-col gap-4.5'>
                        <p className='font-Roboto font-normal text-sm leading-3.5 text-bartext'> Properties sold</p>
                        <p className='font-Roboto font-bold text-3xl leading-3.5 text-agentStat'>523</p>
                        {/* text with color */}
                         <div className='flex flex-row gap-2.5'>
                            <div className=' w-9.5 h-3 bg-agentStatgreen40 flex flex-row gap-1'>
                            <FaArrowUpLong size={7} color='#05DA5A' />
                            <p className='font-Roboto text-6pxS font-normal text-agentStatgreen'> 20 - 30%</p>
                            </div>
                        
                        <p className='font-Roboto text-6pxS font-normal text-bartext'  > growth in the last 3 months</p>
                       </div>

                        </div>
                        {/* icons */}
                        <div className='bg-agentStatred w-9.5 h-9.5 rounded-full flex items-center justify-items-center text-Cardc justify-center ' >
                            <div>
                            <LuHouse />
                            </div>
                      

                        </div>

                    </div>
                    <div>


                    </div>

                </div>
                {/* mainstatus */}
                <div className='w-50 h-24.5 rounded-xl drop-shadow-md p-3 bg-backgroundWHITE' >
                    <div className='flex flex-row gap-2.5' >
                        {/* stats */}
                        <div className='flex flex-col gap-4.5'>
                        <p className='font-Roboto font-normal text-sm leading-3.5 text-bartext'> Experience</p>
                        <p className='font-Roboto font-bold text-3xl leading-3.5 text-agentStat'>15</p>
                        {/* text with color */}
                         <div className='flex flex-row gap-1'>
                            <div className=' w-10.5 h-4 pr-0.5 pl-0.5 bg-agentStatgreen40  flex flex-row gap-1'>
                            <PiStarFourFill size={5} color='#05DA5A' />
                            <p className='  font-Roboto text-6pxS font-normal text-agentStatgreen'>15 years</p>
                            </div>
                        
                        <p className='   font-Roboto text-6pxS font-normal text-bartext'  > of proven success in the industry</p>
                       </div>

                        </div>
                        {/* icons */}
                        <div className='bg-agentStatgreen w-9.5 h-9.5 rounded-full flex items-center justify-items-center text-Cardc justify-center ' >
                            <div>
                            <FaCalendarCheck />
                            </div>
                      

                        </div>

                    </div>
                    <div>


                    </div>

                </div>

            </div>


        </div>
        {/* agent stats */}
        <div className='w-103 h-52.5 '>
            <div className='flex flex-row gap-3.5' >
                {/* mainstatus */}
                <div className='w-50 h-24.5 rounded-xl drop-shadow-md p-3 bg-backgroundWHITE' >
                    <div className='flex flex-row gap-10' >
                        {/* stats */}
                        <div className='flex flex-col gap-4.5'>
                        <p className='font-Roboto font-normal text-sm leading-3.5 text-bartext'> Client Referrals</p>
                        <p className='font-Roboto font-bold text-3xl leading-3.5 text-agentStat'>212</p>
                        {/* text with color */}
                         <div className='flex flex-row gap-2.5'>
                            <div className='w-8 h-4 pr-0.5 pl-0.5 bg-agentStatgreen40 items-center mb-1.5 flex flex-row gap-1'>
                            <LuHandshake size={7} color='#05DA5A' />
                            <p className='font-Roboto text-6pxS font-normal text-agentStatgreen'> 212</p>
                            </div>
                        
                        <p className='font-Roboto text-6pxS font-normal text-bartext'  > Satisfied clients</p>
                       </div>

                        </div>
                        {/* icons */}
                        <div className='bg-agentStatgreen w-9.5 h-9.5 rounded-full flex items-center justify-items-center text-Cardc justify-center ' >
                            <div>
                            <LuHandshake />
                            </div>
                      

                        </div>

                    </div>
                    <div>


                    </div>

                </div>
                {/* mainstatus */}
                <div className='w-50 h-24.5 rounded-xl drop-shadow-md p-3 bg-backgroundWHITE' >
                    <div className='flex flex-row gap-2.5' >
                        {/* stats */}
                        <div className='flex flex-col gap-4.5'>
                        <p className='font-Roboto font-normal text-sm leading-3.5 text-bartext'> Awards</p>
                        <p className='font-Roboto font-bold text-3xl leading-3.5 text-agentStat'>13</p>
                        {/* text with color */}
                         <div className=' h-3 w-30 flex flex-row gap-1'>
                            <div className=' w-8 h-4 pr-0.5 pl-0.5 bg-agentStatgreen40  flex flex-row justify-items-center items-center '>
                            <FaArrowUpLong size={7} color='#05DA5A' />
                            <p className='font-Roboto text-6pxS font-normal text-agentStatgreen'> 100%</p>
                            </div>
                        
                        <p className=' w-27.5 h-2  font-Roboto text-6pxS font-normal text-bartext'  > Recognized for exceptional performance.</p>
                       </div>

                        </div>
                        {/* icons */}
                        <div className='bg-agentStatblue w-9.5 h-9.5 rounded-full flex items-center justify-items-center text-Cardc justify-center ' >
                            <div>
                            <TbAward />
                            </div>
                      

                        </div>

                    </div>
                    <div>


                    </div>

                </div>

            </div>


        </div>

    </div>

        {/* second-card */}
    <div className='w-99 h-70.5 rounded-xl px-4 pt-3 pb-6 bg-Cardc'>
    <h4 className=' font-Roboto text-xl font-semibold leading-5 text-black text-center mb-2.5'>Contact info</h4>
        
        <div className='w-91 h-52.5 rounded-xl py-2.5 px-3 bg-backgroundWHITE drop-shadow-md flex flex-row gap-4.5 '>
            <div className='w-20 h-44.5  '>
                <img className='w-20 h-20 rounded-4xl border-1 border-Cardc p-2.5' src={A1} alt="" srcset="" />

                <div className=' flex flex-col justify-items-center justify-center justify-self-center'>
                    <div className='flex flex-row gap-1'>
                    <FaStar size={10} color='#F5B843' />
                    <p className='font-Roboto font-semibold text-activebtn2 text-xs'>5.0</p>

                    </div>
                    <div className='flex flex-row gap-1'>
                    <VscLocation size={10} />
                    <p className='font-Roboto font-semibold leading-2 text-8px text-bartext'> Alaska, USA</p>
                    </div>

                </div>

                <img className='mt-3' src={A2} alt="" />

            </div>

            <div className='w-60.5 h-44 flex flex-col gap-3'>
                <p className='font-semibold text-base text-black'>Emily Soccker</p>
                <p className='font-Roboto font-normal text-9px leading-2.5 text-para'>A highly experienced real estate agent</p>
                <p className='font-Roboto font-medium text-xs text-bartext'>Email: <span className='font-Roboto text-9px leading-2.5 underline text-black'> EmilySoccker.work@gmail.com</span></p>
                <p className='font-Roboto font-medium text-xs text-bartext'>Phone: <span className='font-Roboto text-9px leading-2.5 underline text-black'> +1 239 434 831</span></p>
                
                <div className=' flex flex-row gap-3'>
                    <div className='w-8.5 h-8.5 p-2 bg-secondary rounded-lg text-backgroundWHITE'  >
                    <LuPhone />
                    </div>
                    <div className='w-8.5 h-8.5 p-2 bg-secondary rounded-lg text-backgroundWHITE'  >
                    <SlEnvolope  />
                    </div>
                    <div className='w-8.5 h-8.5 p-2 bg-secondary rounded-lg text-backgroundWHITE'  >
                    <FaMeta />
                    </div>
                    <div className='w-8.5 h-8.5 p-2 bg-secondary rounded-lg text-backgroundWHITE'  >
                    <FaXTwitter />
                    </div>
                    <div className='w-8.5 h-8.5 p-2 bg-secondary rounded-lg text-backgroundWHITE'  >
                    <FaInstagram />
                    </div>

                </div>
                <div className='w-54.5 h-8.5 rounded-xl py-2 px-1 bg-primary cursor-pointer text-center  flex flex-row justify-items-center justify-center gap-1'>
                <FaCalendarCheck color='white'/>
                <p className='text-xs  font-semibold text-backgroundWHITE'>Schedule a Consultation</p>

                </div>
            </div>


        </div>

    </div>




   </div>



   </>
  )
}

export default AgentCard