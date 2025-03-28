import React from 'react'
import logo from '../src/assets/img/logo/Annotation 2025-03-05 162204.png';
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {

  function showSideBar(){
    const bar = document.getElementById( 'menubtn')
    const nav = document.getElementById('sideBar')
    if (bar){
      bar.addEventListener('click', ()=>{
        nav.style.display ='flex'
        console.log('yes');
      })
    }
    
  }

  function showHide(){
    const bar = document.getElementById( 'closebtn')
    const nav = document.getElementById('sideBar')
    if (bar){
      bar.addEventListener('click', ()=>{
        nav.style.display ='none'
        console.log('yes');
      })
    }
    
  }
  return (
    <>
        <nav className=' w-full h-25  bg-white   '>
            
            <div className=' w-full h-15 flex flex-row justify-between justify-self-center p-5' >

            <button  className='xl:hidden' onClick={showSideBar} id='menubtn' >    <IoIosMenu size={50} color='#0A2540' /></button>

               <div className=''>
                
               <img className='w-12.5 h-15' src={logo} alt="" srcset="" />
               </div>
              
                  {/* above-1024px */}
               <div className='flex flex-row gap-20 max-xl:hidden'>
           
               <ul className='flex flex-row gap-10 mt-5'>
                <a href="http://" target="_blank" rel="noopener noreferrer"><li className=' w-20 h-9 py-2 px-4.5 bg-nav rounded-xl text-base font-normal font-Roboto text-<12> text-center  -mt-2'>Home</li></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"> <li className=' text-base font-normal font-Roboto text-<12>'>Property</li></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><li className=' text-base font-normal font-Roboto text-<12>'>Services</li></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"> <li className=' text-base font-normal font-Roboto text-<12>'> Agents</li></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"> <li className=' text-base font-normal font-Roboto text-<12>'>Aboult Us</li></a>
                
               
                
               
               
               </ul>

               </div>
                 



             

               <div className='flex flex-row gap-3.5 md:hidden max-sm:hidden xl:flex'>
               <button className=' w-40 h-14 py-4.5 px-2 rounded-xl bg-primary  text-amber-50 text-1xl  '>Buy a HOUSE</button>
               <button className='w-40 h-14 py-4.5 px-2 rounded-xl color-tealish text-amber-50 text-1xl bg-secondary'> Rent A house</button>

               </div>

              






            </div>

             {/* below-1024px */}


             <div className='  gap-20 justify-center justify-items-center justify-self-start  '>
           
           <ul id='sideBar' className='hidden flex-col justify-items-center items-center  gap-10 -mt-11 position:fixed top-0 left-0 right-0 h-100 w-62.5 z-9000  backdrop-blur-lg    bg-Cardc  '>
           <button  onClick={showHide}   id='closebtn'>  <RxCross1 size={50} color='#0A2540' /> </button>
            <a href="http://" target="_blank" rel="noopener noreferrer"><li className=' w-20 h-9 py-2 px-4.5 bg-nav rounded-xl text-base font-normal font-Roboto text-<12> text-center  -mt-2'>Home</li></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"> <li className=' text-base font-normal font-Roboto text-<12>'>Property</li></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><li className=' text-base font-normal font-Roboto text-<12>'>Services</li></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"> <li className=' text-base font-normal font-Roboto text-<12>'> Agents</li></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"> <li className=' text-base font-normal font-Roboto text-<12>'>Aboult Us</li></a>
            
           
            
           
           
           </ul>

           </div>

        </nav>



    </>
  )
}

export default NavBar