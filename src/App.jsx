import React from 'react'
import NavBar from '../componets/NavBar'
import Hero from '../componets/Hero'
import Bar from '../componets/Bar'
import Searchbar from '../componets/Searchbar'
import TextBar1 from '../componets/TextBar1'
import Card from '../componets/Card'
import { Carslider } from '../componets/Carslider'
import CardsliderCard from '../componets/CardsliderCard'
import HouseMailSw from '../componets/HouseMailSw'
import TextBar2 from '../componets/TextBar2'
import TextBar3 from '../componets/TextBar3'
import AgentSwiper from '../componets/AgentSwiper'
import AgentCard from '../componets/AgentCard'
import MainAgent from '../componets/MainAgent'
import Footer from '../componets/Footer'
import Reviews from '../componets/Reviews'
import Landslider from '../componets/Landslider'
import LandCard from '../componets/LandCard'
import MainLandC from '../componets/MainLandC'
import TexttBar4 from '../componets/TexttBar4'
import Textbar5 from '../componets/Textbar5'

const App = () => {
  return (
   <>
   <div className=' bg-backgroundS'>
 
    <NavBar/>
    <Hero/>
    <Searchbar/>
    <TextBar1/>
    <HouseMailSw/>
    <TextBar2/>
    <Card/>
    <TextBar3/> 
    <MainAgent/>
    <TexttBar4/>
     <MainLandC/>
     <Textbar5/>
      <Reviews/>
      <Bar/>
      <Footer/>

   
   

   </div>
 


   </>
  )
}

export default App