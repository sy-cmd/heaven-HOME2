import React from 'react'
import { FaCalendarCheck, FaMeta, FaStar, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { LuHouse, LuHandshake, LuPhone } from 'react-icons/lu'
import { PiStarFourFill } from 'react-icons/pi'
import { TbAward } from 'react-icons/tb'
import { VscLocation } from 'react-icons/vsc'
import { SlEnvolope } from 'react-icons/sl'
import A1 from '../src/assets/img/agent/4eca6080adf4a40bf122ec344b6016d5 (1).jfif'
import A2 from '../src/assets/img/agent/5abf7fb8c0eb3eab2663263c1235d240 (1).png'

const statItems = [
  { title: 'Properties sold', value: '523', icon: <LuHouse />, chip: '20-30%' },
  { title: 'Experience', value: '15', icon: <FaCalendarCheck />, chip: '15 years' },
  { title: 'Client Referrals', value: '212', icon: <LuHandshake />, chip: '212' },
  { title: 'Awards', value: '13', icon: <TbAward />, chip: '100%' },
]

const AgentCard = () => {
  return (
    <div className='grid w-full gap-4 lg:grid-cols-2'>
      <section className='rounded-3xl bg-Cardc p-4 sm:p-5'>
        <h4 className='text-center font-Roboto text-4xl font-semibold text-para'>Agents Stats</h4>
        <div className='mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2'>
          {statItems.map((item) => (
            <article key={item.title} className='rounded-2xl bg-white p-3 shadow-sm'>
              <div className='flex items-start justify-between'>
                <div>
                  <p className='font-Roboto text-sm text-para/70'>{item.title}</p>
                  <p className='mt-2 font-Roboto text-5xl font-bold text-para'>{item.value}</p>
                  <p className='mt-1 inline-flex items-center gap-1 rounded-md bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-600'>
                    <PiStarFourFill size={9} />{item.chip}
                  </p>
                </div>
                <div className='rounded-full bg-secondary p-2 text-white'>{item.icon}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className='rounded-3xl bg-Cardc p-4 sm:p-5'>
        <h4 className='text-center font-Roboto text-4xl font-semibold text-para'>Contact info</h4>

        <article className='mt-4 rounded-2xl bg-white p-4 shadow-sm'>
          <div className='flex flex-col gap-4 sm:flex-row'>
            <div className='flex flex-col items-center'>
              <img className='h-16 w-16 rounded-full border-4 border-Cardc object-cover' src={A1} alt='Emily Soccker' />
              <p className='mt-2 inline-flex items-center gap-1 text-sm font-bold text-activebtn2'>
                <FaStar size={11} color='#F5B843' />5.0
              </p>
              <p className='mt-1 inline-flex items-center gap-1 text-xs text-para/70'>
                <VscLocation size={11} />Alaska, USA
              </p>
              <img className='mt-3 h-16 w-16 object-contain' src={A2} alt='QR code' />
            </div>

            <div className='min-w-0 flex-1'>
              <p className='font-Roboto text-2xl font-bold text-para'>Emily Soccker</p>
              <p className='mt-1 text-sm text-para/70'>A highly experienced real estate agent</p>
              <p className='mt-3 text-sm text-para'>Email: <span className='break-all underline'>EmilySoccker.work@gmail.com</span></p>
              <p className='mt-1 text-sm text-para'>Phone: <span className='underline'>+1 239 434 831</span></p>

              <div className='mt-3 flex flex-wrap gap-2'>
                <button className='rounded-lg bg-secondary p-2 text-white'><LuPhone /></button>
                <button className='rounded-lg bg-secondary p-2 text-white'><SlEnvolope /></button>
                <button className='rounded-lg bg-secondary p-2 text-white'><FaMeta /></button>
                <button className='rounded-lg bg-secondary p-2 text-white'><FaXTwitter /></button>
                <button className='rounded-lg bg-secondary p-2 text-white'><FaInstagram /></button>
              </div>

              <button className='mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-primary px-4 font-Roboto text-sm font-bold text-white'>
                <FaCalendarCheck />Schedule a Consultation
              </button>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export default AgentCard
