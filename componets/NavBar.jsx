import React, { useState } from 'react'
import logo from '../src/assets/img/logo/Annotation 2025-03-05 162204.png'
import { IoIosMenu } from 'react-icons/io'
import { RxCross1 } from 'react-icons/rx'

const navLinks = [
  { label: 'Home', section: 'home' },
  { label: 'Property', section: 'lands' },
  { label: 'Services', section: 'services' },
  { label: 'Agents', section: 'agents' },
  { label: 'About Us', section: 'contact' },
]

const NavBar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigate = (sectionId) => {
    if (typeof onNavigate === 'function') {
      onNavigate(sectionId)
    }
    setIsOpen(false)
  }

  return (
    <>
      <nav className='sticky top-3 z-50 px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto flex h-20 w-full max-w-7xl items-center justify-between rounded-3xl border border-white/60 bg-white/75 px-4 shadow-[0_16px_36px_-24px_rgba(66,60,130,0.9)] backdrop-blur-xl sm:px-6 lg:px-8'>
          <button
            type='button'
            className='xl:hidden rounded-xl bg-white p-1 text-primary'
            onClick={() => setIsOpen(true)}
            aria-label='Open menu'
          >
            <IoIosMenu size={38} color='#2f3c82' />
          </button>

          <div className='flex items-center gap-3'>
            <img className='h-11 w-10 object-contain sm:h-12 sm:w-11' src={logo} alt='Haven Homes logo' />
            <p className='hidden font-Roboto text-sm font-bold tracking-wider text-primary sm:block'>HAVEN HOMES</p>
          </div>

          <ul className='hidden items-center gap-4 xl:flex'>
            {navLinks.map((item, index) => (
              <li key={item.label}>
                <button
                  type='button'
                  onClick={() => handleNavigate(item.section)}
                  className={`rounded-full px-4 py-2 font-Roboto text-base font-semibold text-primary ${
                    index === 0 ? 'bg-nav' : 'hover:bg-nav/80'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className='hidden items-center gap-3 xl:flex'>
            <button className='h-11 rounded-full bg-primary px-6 font-Roboto text-base font-bold text-white'>Buy a House</button>
            <button className='h-11 rounded-full bg-secondary px-6 font-Roboto text-base font-bold text-white'>Rent a House</button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className='fixed inset-0 z-[60] bg-[#2f3c82]/25 backdrop-blur-sm xl:hidden' onClick={() => setIsOpen(false)}>
          <aside
            className='absolute left-3 top-3 flex h-[calc(100%-1.5rem)] w-72 flex-col gap-6 rounded-3xl bg-white/95 p-6 shadow-2xl'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex items-center justify-between'>
              <p className='font-Roboto text-xl font-bold text-primary'>Menu</p>
              <button
                type='button'
                onClick={() => setIsOpen(false)}
                className='rounded-lg bg-nav/70 p-1 text-primary'
                aria-label='Close menu'
              >
                <RxCross1 size={28} color='#2f3c82' />
              </button>
            </div>

            <ul className='flex flex-col gap-3'>
              {navLinks.map((item, index) => (
                <li key={item.label}>
                  <button
                    type='button'
                    onClick={() => handleNavigate(item.section)}
                    className={`block w-full rounded-xl px-4 py-2 text-left font-Roboto text-base font-semibold text-primary ${
                      index === 0 ? 'bg-nav' : 'bg-backgroundS/50'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className='mt-2 flex flex-col gap-3'>
              <button className='h-11 rounded-full bg-primary px-5 font-Roboto text-sm font-bold text-white'>Buy a House</button>
              <button className='h-11 rounded-full bg-secondary px-5 font-Roboto text-sm font-bold text-white'>Rent a House</button>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}

export default NavBar
