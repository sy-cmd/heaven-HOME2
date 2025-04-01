import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';
import { FaHeart, FaRegHeart,FaComment,FaRegComment,FaStar,FaRegCalendarCheck  } from "react-icons/fa";
import A1 from '../src/assets/img/agent/4eca6080adf4a40bf122ec344b6016d5 (1).jfif'
import A2 from '../src/assets/img/agent/f8898b4d066033af55f17b0f52d39b46.jfif'
import A3 from '../src/assets/img/agent/fc08a04c070e415a77ae8cfe609bab92.jfif'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const AgentSwiper = () => {
  return (
    <>
        <div className='xl:w-195.5 xl:h-16.5 rounded-2xl py-2.5 px-4 bg-Cardc flex flex-row gap-5 justify-items-center justify-self-center md:w-156  max-sm:w-111 lg:justify-items-center'>
            <div className='w-34.5 h-11.5 rounded-xl py-3.5 px-7 drop-shadow-xl bg-activebtn'>
                <p className='font-Roboto font-semibold text-base leading-4 text-center text-backgroundWHITE'> 
                Residential
                </p>

            </div>
            <div className='w-195.5 h-16.5 flex justify-items-center mt-3 max-sm:hidden'>  <p className='font-Roboto font-semibold text-base leading-4 text-center text-Organized'>Commercial</p></div>
            <div className='w-195.5 h-16.5 mt-3 max-sm:hidden'> <p className='font-Roboto font-semibold text-base leading-4 text-center text-Organized'>Luxury</p></div>
            <div className='w-195.5 h-16.5 mt-3 '>   <p className='font-Roboto font-semibold text-base leading-4 text-center text-Organized'>Construction</p> </div>
            <div className='w-195.5 h-16.5 mt-3 '>  <p className='font-Roboto font-semibold text-base leading-4 text-center text-Organized'>Land</p> </div>
           
           
            
          
           

        </div>

        {/* <h5 className='font-Roboto font-semibold text-2xl text-black text-center mt-2.5 mb-2.5'>Choose Agent</h5> */}
            

       <div className=' lg:w-197 xl:w-218.5 xl:h-135 flex justify-self-center items-center justify-center justify-items-center py-3 px-10 rounded-xl bg-Cardc md:w-156 md:h-137 max-sm:w-111 max-sm:h-137' >

        <div>
            
        </div>
      

        
      
    
            <Swiper
            modules={ [Pagination , Scrollbar, A11y, Autoplay,   Navigation ]}
            spaceBetween={50}
          grabCursor={true}
          initialSlide={3}
          centeredSlides={true}
          slidesPerView="3"
          speed={3000}
          slideToClickedSlide={true}
          pagination={{  clickable: true }}
          breakpoints={{
            320: { spaceBetween:70 },
            430: { slidesPerView: 1, },
            580: { spaceBetween:70 },
            650: { spaceBetween:30 },
            600: {  width: 768,
              slidesPerView: 1, },
            768: {  width: 768,
              slidesPerView: 3, },
    
          }}>

            {/* <SwiperSlide className='w-68.5 h-109.5 rounded-2xl bg-backgroundWHITE py-4 px-5 '>
                <div className='w-58.5 h-88 ' >
                    <div>
                        <div className=' w-58.5 h-9 bg-primary rounded-t-2xl '></div>

                    </div>


                </div>

            </SwiperSlide> */}

            <SwiperSlide>
                

                <div className=''>

                </div>
                <div className='w-68.5 h-109.5 flex flex-col items-center  gap-3 bg-backgroundWHITE  rounded-2xl py-4 px-5 drop-shadow-lg '>

                    <div className='w-58.5 h-9 pt-2 pb-2 bg-primary rounded-t-xl '></div>
                    <div className='flex flex-col justify-center items-center justify-self-center -mt-7.5'>
                    <img className='w-17.5 h-17.5 rounded-4xl flex justify-center border-1 border-para' src={A1} alt="agent-pic" srcset="" />
                    <p className='text-base font-bold leading-4 font-Roboto text-black'>Emily soccker</p>
                    </div>

                    {/* agent-atributtes */}

                    <div className='w-58.5 h-38.5 rounded-2xl py-2.5 px-2 flex flex-row gap-7.5 bg-Cardc justify-between '>
                        <div className='flex flex-col gap-5'>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-responsive drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Responsive</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-grenny drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center '>Empathetic</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Persistent drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center '>Persistent</p>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Negotiator drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Negotiator</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Organized drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Organized</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-pinnk drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Ethical</p>

                        </div>
                    </div>
                        {/* age-ratings */}
                    <div className='w-58.5 h-18 rounded-xl p-2.5 bg-Cardc flex flex-row gap-2.5 justify-between '>
                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'>Age</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaRegCalendarCheck size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' >37</p>
                            </div>
                        </div>

                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'>Rating</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaStar  size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' > 5.0</p>
                            </div>
                        </div>

                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'> Reviews</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaRegComment size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' >69</p>
                            </div>
                        </div>

                    </div>

                {/* button */}
                <div>
                    <button className='w-58.5 h-9.5 py-3 px-6 bg-activebtn rounded-xl text-xs font-bold leading-4 text-backgroundWHITE '>Selected</button>
                </div>
                  

                </div>

            </SwiperSlide>
          
            <SwiperSlide>
                

                <div className=''>

                </div>
                <div className='w-68.5 h-109.5 flex flex-col items-center  gap-3 bg-backgroundWHITE  rounded-2xl py-4 px-5 drop-shadow-lg '>

                    <div className='w-58.5 h-9 pt-2 pb-2 bg-primary rounded-t-xl '></div>
                    <div className='flex flex-col justify-center items-center justify-self-center -mt-7.5'>
                    <img className='w-17.5 h-17.5 rounded-4xl flex justify-center border-1 border-para' src={A2} alt="agent-pic" srcset="" />
                    <p className='text-base font-bold leading-4 font-Roboto text-black'>Jack sukirr</p>
                    </div>

                    {/* agent-atributtes */}

                    <div className='w-58.5 h-38.5 rounded-2xl py-2.5 px-2 flex flex-row gap-7.5 bg-Cardc justify-between '>
                        <div className='flex flex-col gap-5'>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-responsive drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Responsive</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-grenny drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center '>Empathetic</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Persistent drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center '>Persistent</p>
                        </div>

                        <div className='flex flex-col gap-5'>
                            
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Organized drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Organized</p>
                            

                        </div>
                    </div>
                        {/* age-ratings */}
                    <div className='w-58.5 h-18 rounded-xl p-2.5 bg-Cardc flex flex-row gap-2.5 justify-between '>
                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'>Age</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaRegCalendarCheck size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' >32</p>
                            </div>
                        </div>

                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'>Rating</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaStar  size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' > 3.0</p>
                            </div>
                        </div>

                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'> Reviews</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaRegComment size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' >69</p>
                            </div>
                        </div>

                    </div>

                {/* button */}
                <div>
                    <button className='w-58.5 h-9.5 py-3 px-6 bg-primary rounded-xl text-xs font-bold leading-4 text-backgroundWHITE '>View Agent</button>
                </div>
                  

                </div>

            </SwiperSlide>
          
            <SwiperSlide>
                

                <div className=''>

                </div>
                <div className='w-68.5 h-109.5 flex flex-col items-center  gap-3 bg-backgroundWHITE  rounded-2xl py-4 px-5 drop-shadow-lg '>

                    <div className='w-58.5 h-9 pt-2 pb-2 bg-primary rounded-t-xl '></div>
                    <div className='flex flex-col justify-center items-center justify-self-center -mt-7.5'>
                    <img className='w-17.5 h-17.5 rounded-4xl flex justify-center border-1 border-para' src={A3} alt="agent-pic" srcset="" />
                    <p className='text-base font-bold leading-4 font-Roboto text-black'>Emily soccker</p>
                    </div>

                    {/* agent-atributtes */}

                    <div className='w-58.5 h-38.5 rounded-2xl py-2.5 px-2 flex flex-row gap-7.5 bg-Cardc justify-between '>
                        <div className='flex flex-col gap-5'>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-responsive drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Responsive</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-grenny drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center '>Empathetic</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Persistent drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center '>Persistent</p>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Negotiator drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Negotiator</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Organized drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Organized</p>
                            

                        </div>
                    </div>
                        {/* age-ratings */}
                    <div className='w-58.5 h-18 rounded-xl p-2.5 bg-Cardc flex flex-row gap-2.5 justify-between '>
                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'>Age</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaRegCalendarCheck size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' >28</p>
                            </div>
                        </div>

                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'>Rating</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaStar  size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' > 3.5</p>
                            </div>
                        </div>

                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'> Reviews</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaRegComment size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' >169</p>
                            </div>
                        </div>

                    </div>

                {/* button */}
                <div>
                    <button className='w-58.5 h-9.5 py-3 px-6 bg-primary rounded-xl text-xs font-bold leading-4 text-backgroundWHITE '>View Agent</button>
                </div>
                  

                </div>

            </SwiperSlide>
            <SwiperSlide>
                

                <div className=''>

                </div>
                <div className='w-68.5 h-109.5 flex flex-col items-center  gap-3 bg-backgroundWHITE  rounded-2xl py-4 px-5 drop-shadow-lg '>

                    <div className='w-58.5 h-9 pt-2 pb-2 bg-primary rounded-t-xl '></div>
                    <div className='flex flex-col justify-center items-center justify-self-center -mt-7.5'>
                    <img className='w-17.5 h-17.5 rounded-4xl flex justify-center border-1 border-para' src={A1} alt="agent-pic" srcset="" />
                    <p className='text-base font-bold leading-4 font-Roboto text-black'>Emily soccker</p>
                    </div>

                    {/* agent-atributtes */}

                    <div className='w-58.5 h-38.5 rounded-2xl py-2.5 px-2 flex flex-row gap-7.5 bg-Cardc justify-between '>
                        <div className='flex flex-col gap-5'>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-responsive drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Responsive</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-grenny drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center '>Empathetic</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Persistent drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center '>Persistent</p>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Negotiator drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Negotiator</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Organized drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Organized</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-pinnk drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Ethical</p>

                        </div>
                    </div>
                        {/* age-ratings */}
                    <div className='w-58.5 h-18 rounded-xl p-2.5 bg-Cardc flex flex-row gap-2.5 justify-between '>
                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'>Age</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaRegCalendarCheck size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' >37</p>
                            </div>
                        </div>

                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'>Rating</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaStar  size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' > 5.0</p>
                            </div>
                        </div>

                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'> Reviews</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaRegComment size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' >69</p>
                            </div>
                        </div>

                    </div>

                {/* button */}
                <div>
                    <button className='w-58.5 h-9.5 py-3 px-6 bg-activebtn rounded-xl text-xs font-bold leading-4 text-backgroundWHITE '>Selected</button>
                </div>
                  

                </div>

            </SwiperSlide>
          
            <SwiperSlide>
                

                <div className=''>

                </div>
                <div className='w-68.5 h-109.5 flex flex-col items-center  gap-3 bg-backgroundWHITE  rounded-2xl py-4 px-5 drop-shadow-lg '>

                    <div className='w-58.5 h-9 pt-2 pb-2 bg-primary rounded-t-xl '></div>
                    <div className='flex flex-col justify-center items-center justify-self-center -mt-7.5'>
                    <img className='w-17.5 h-17.5 rounded-4xl flex justify-center border-1 border-para' src={A2} alt="agent-pic" srcset="" />
                    <p className='text-base font-bold leading-4 font-Roboto text-black'>Jack sukirr</p>
                    </div>

                    {/* agent-atributtes */}

                    <div className='w-58.5 h-38.5 rounded-2xl py-2.5 px-2 flex flex-row gap-7.5 bg-Cardc justify-between '>
                        <div className='flex flex-col gap-5'>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-responsive drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Responsive</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-grenny drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center '>Empathetic</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Persistent drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center '>Persistent</p>
                        </div>

                        <div className='flex flex-col gap-5'>
                            
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Organized drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Organized</p>
                            

                        </div>
                    </div>
                        {/* age-ratings */}
                    <div className='w-58.5 h-18 rounded-xl p-2.5 bg-Cardc flex flex-row gap-2.5 justify-between '>
                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'>Age</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaRegCalendarCheck size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' >32</p>
                            </div>
                        </div>

                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'>Rating</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaStar  size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' > 3.0</p>
                            </div>
                        </div>

                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'> Reviews</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaRegComment size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' >69</p>
                            </div>
                        </div>

                    </div>

                {/* button */}
                <div>
                    <button className='w-58.5 h-9.5 py-3 px-6 bg-primary rounded-xl text-xs font-bold leading-4 text-backgroundWHITE '>View Agent</button>
                </div>
                  

                </div>

            </SwiperSlide>
          
            <SwiperSlide>
                

                <div className=''>

                </div>
                <div className='w-68.5 h-109.5 flex flex-col items-center  gap-3 bg-backgroundWHITE  rounded-2xl py-4 px-5 drop-shadow-lg '>

                    <div className='w-58.5 h-9 pt-2 pb-2 bg-primary rounded-t-xl '></div>
                    <div className='flex flex-col justify-center items-center justify-self-center -mt-7.5'>
                    <img className='w-17.5 h-17.5 rounded-4xl flex justify-center border-1 border-para' src={A3} alt="agent-pic" srcset="" />
                    <p className='text-base font-bold leading-4 font-Roboto text-black'>Emily soccker</p>
                    </div>

                    {/* agent-atributtes */}

                    <div className='w-58.5 h-38.5 rounded-2xl py-2.5 px-2 flex flex-row gap-7.5 bg-Cardc justify-between '>
                        <div className='flex flex-col gap-5'>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-responsive drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Responsive</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-grenny drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center '>Empathetic</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Persistent drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center '>Persistent</p>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Negotiator drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Negotiator</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Organized drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Organized</p>
                            

                        </div>
                    </div>
                        {/* age-ratings */}
                    <div className='w-58.5 h-18 rounded-xl p-2.5 bg-Cardc flex flex-row gap-2.5 justify-between '>
                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'>Age</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaRegCalendarCheck size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' >28</p>
                            </div>
                        </div>

                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'>Rating</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaStar  size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' > 3.5</p>
                            </div>
                        </div>

                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'> Reviews</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaRegComment size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' >169</p>
                            </div>
                        </div>

                    </div>

                {/* button */}
                <div>
                    <button className='w-58.5 h-9.5 py-3 px-6 bg-primary rounded-xl text-xs font-bold leading-4 text-backgroundWHITE '>View Agent</button>
                </div>
                  

                </div>

            </SwiperSlide>
            <SwiperSlide>
                

                <div className=''>

                </div>
                <div className='w-68.5 h-109.5 flex flex-col items-center  gap-3 bg-backgroundWHITE  rounded-2xl py-4 px-5 drop-shadow-lg '>

                    <div className='w-58.5 h-9 pt-2 pb-2 bg-primary rounded-t-xl '></div>
                    <div className='flex flex-col justify-center items-center justify-self-center -mt-7.5'>
                    <img className='w-17.5 h-17.5 rounded-4xl flex justify-center border-1 border-para' src={A1} alt="agent-pic" srcset="" />
                    <p className='text-base font-bold leading-4 font-Roboto text-black'>Emily soccker</p>
                    </div>

                    {/* agent-atributtes */}

                    <div className='w-58.5 h-38.5 rounded-2xl py-2.5 px-2 flex flex-row gap-7.5 bg-Cardc justify-between '>
                        <div className='flex flex-col gap-5'>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-responsive drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Responsive</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-grenny drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center '>Empathetic</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Persistent drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center '>Persistent</p>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Negotiator drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Negotiator</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Organized drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Organized</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-pinnk drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Ethical</p>

                        </div>
                    </div>
                        {/* age-ratings */}
                    <div className='w-58.5 h-18 rounded-xl p-2.5 bg-Cardc flex flex-row gap-2.5 justify-between '>
                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'>Age</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaRegCalendarCheck size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' >37</p>
                            </div>
                        </div>

                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'>Rating</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaStar  size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' > 5.0</p>
                            </div>
                        </div>

                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'> Reviews</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaRegComment size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' >69</p>
                            </div>
                        </div>

                    </div>

                {/* button */}
                <div>
                    <button className='w-58.5 h-9.5 py-3 px-6 bg-activebtn rounded-xl text-xs font-bold leading-4 text-backgroundWHITE '>Selected</button>
                </div>
                  

                </div>

            </SwiperSlide>
          
            <SwiperSlide>
                

                <div className=''>

                </div>
                <div className='w-68.5 h-109.5 flex flex-col items-center  gap-3 bg-backgroundWHITE  rounded-2xl py-4 px-5 drop-shadow-lg '>

                    <div className='w-58.5 h-9 pt-2 pb-2 bg-primary rounded-t-xl '></div>
                    <div className='flex flex-col justify-center items-center justify-self-center -mt-7.5'>
                    <img className='w-17.5 h-17.5 rounded-4xl flex justify-center border-1 border-para' src={A2} alt="agent-pic" srcset="" />
                    <p className='text-base font-bold leading-4 font-Roboto text-black'>Jack sukirr</p>
                    </div>

                    {/* agent-atributtes */}

                    <div className='w-58.5 h-38.5 rounded-2xl py-2.5 px-2 flex flex-row gap-7.5 bg-Cardc justify-between '>
                        <div className='flex flex-col gap-5'>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-responsive drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Responsive</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-grenny drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center '>Empathetic</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Persistent drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center '>Persistent</p>
                        </div>

                        <div className='flex flex-col gap-5'>
                            
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Organized drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Organized</p>
                            

                        </div>
                    </div>
                        {/* age-ratings */}
                    <div className='w-58.5 h-18 rounded-xl p-2.5 bg-Cardc flex flex-row gap-2.5 justify-between '>
                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'>Age</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaRegCalendarCheck size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' >32</p>
                            </div>
                        </div>

                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'>Rating</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaStar  size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' > 3.0</p>
                            </div>
                        </div>

                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'> Reviews</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaRegComment size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' >69</p>
                            </div>
                        </div>

                    </div>

                {/* button */}
                <div>
                    <button className='w-58.5 h-9.5 py-3 px-6 bg-primary rounded-xl text-xs font-bold leading-4 text-backgroundWHITE '>View Agent</button>
                </div>
                  

                </div>

            </SwiperSlide>
          
            <SwiperSlide>
                

                <div className=''>

                </div>
                <div className='w-68.5 h-109.5 flex flex-col items-center  gap-3 bg-backgroundWHITE  rounded-2xl py-4 px-5 drop-shadow-lg '>

                    <div className='w-58.5 h-9 pt-2 pb-2 bg-primary rounded-t-xl '></div>
                    <div className='flex flex-col justify-center items-center justify-self-center -mt-7.5'>
                    <img className='w-17.5 h-17.5 rounded-4xl flex justify-center border-1 border-para' src={A3} alt="agent-pic" srcset="" />
                    <p className='text-base font-bold leading-4 font-Roboto text-black'>Emily soccker</p>
                    </div>

                    {/* agent-atributtes */}

                    <div className='w-58.5 h-38.5 rounded-2xl py-2.5 px-2 flex flex-row gap-7.5 bg-Cardc justify-between '>
                        <div className='flex flex-col gap-5'>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-responsive drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Responsive</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-grenny drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center '>Empathetic</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Persistent drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center '>Persistent</p>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Negotiator drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Negotiator</p>
                            <p className='w-23.5 h-8 rounded-xl py-2 bg-Organized drop-shadow-lg text-backgroundWHITE text-13pxS font-bold font-Roboto text-center ' >Organized</p>
                            

                        </div>
                    </div>
                        {/* age-ratings */}
                    <div className='w-58.5 h-18 rounded-xl p-2.5 bg-Cardc flex flex-row gap-2.5 justify-between '>
                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'>Age</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaRegCalendarCheck size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' >28</p>
                            </div>
                        </div>

                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'>Rating</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaStar  size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' > 3.5</p>
                            </div>
                        </div>

                        <div className='w-15 h-13 bg-SeconWhite rounded-lg py-2.5 px-3 drop-shadow-md flex flex-col justify-center items-center'>
                            <p className='font-Roboto font-bold text-xs text-black leading-3'> Reviews</p>
                            <div className='w-5 mt-2 text-darkfade'>
                            <hr   />

                            </div>
                          
                            <div className='flex flex-row gap-1'>
                                <div className='mt-1'>
                                <FaRegComment size={12}  color='#F5B843' />

                                </div>
                        
                                <p className='font-Roboto font-semibold text-xs leading-3 text-lightdaker mt-1.5' >169</p>
                            </div>
                        </div>

                    </div>

                {/* button */}
                <div>
                    <button className='w-58.5 h-9.5 py-3 px-6 bg-primary rounded-xl text-xs font-bold leading-4 text-backgroundWHITE '>View Agent</button>
                </div>
                  

                </div>

            </SwiperSlide>
          
        
          

         

         

        
           
            {/* <div className="swiper-pagination !mt-9  "></div> */}
    
    
            </Swiper>
        </div>




    </>
  )
}

export default AgentSwiper