import React, { useEffect, useState } from 'react'
import NavBar from '../componets/NavBar'
import Hero from '../componets/Hero'
import Bar from '../componets/Bar'
import Searchbar from '../componets/Searchbar'
import TextBar1 from '../componets/TextBar1'
import Card from '../componets/Card'
import HouseMailSw from '../componets/HouseMailSw'
import TextBar2 from '../componets/TextBar2'
import TextBar3 from '../componets/TextBar3'
import MainAgent from '../componets/MainAgent'
import Footer from '../componets/Footer'
import Reviews from '../componets/Reviews'
import MainLandC from '../componets/MainLandC'
import TexttBar4 from '../componets/TexttBar4'
import Textbar5 from '../componets/Textbar5'

const App = () => {
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    if (!feedback) return
    const timer = setTimeout(() => setFeedback(''), 2200)
    return () => clearTimeout(timer)
  }, [feedback])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleButtonFallback = (event) => {
    const button = event.target.closest('button')
    if (!button || button.getAttribute('aria-label')) return

    const label = (button.textContent || '').trim().toLowerCase()
    if (!label) return

    if (label.includes('search')) {
      scrollToSection('search')
      setFeedback('Search panel ready. Choose filters and continue.')
      return
    }

    if (label.includes('view agent') || label.includes('selected')) {
      scrollToSection('agents')
      setFeedback('Jumped to the agent section.')
      return
    }

    if (label.includes('learn more')) {
      scrollToSection('services')
      setFeedback('Showing more about our services.')
      return
    }

    if (label.includes('buy') || label.includes('rent') || label.includes('get started')) {
      scrollToSection('contact')
      setFeedback('Moved to the contact section to continue.')
      return
    }

    if (label.includes('subscribe')) {
      const emailInput = button.closest('div')?.querySelector('input[type="email"]')
      const email = emailInput?.value?.trim() || ''
      if (!email) {
        setFeedback('Enter your email before subscribing.')
        emailInput?.focus()
        return
      }
      setFeedback(`Subscribed: ${email}`)
      emailInput.value = ''
      return
    }

    setFeedback('Action received.')
  }

  return (
    <>
      <div
        className='relative min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,_#fff9fc_0%,_#ffeef5_44%,_#fff8fb_100%)]'
        onClickCapture={handleButtonFallback}
      >
        <div className='pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-[#ffd8e7]/70 blur-3xl' />
        <div className='pointer-events-none absolute -right-24 top-[32rem] h-72 w-72 rounded-full bg-[#d6dfff]/70 blur-3xl' />

        <section id='home'>
          <NavBar onNavigate={scrollToSection} />
          <Hero />
        </section>

        <section id='search'>
          <Searchbar />
        </section>

        <section id='services'>
          <TextBar1 />
          <HouseMailSw />
          <TextBar2 />
          <Card />
        </section>

        <section id='agents'>
          <TextBar3 />
          <MainAgent />
        </section>

        <section id='lands'>
          <TexttBar4 />
          <MainLandC />
        </section>

        <section id='reviews'>
          <Textbar5 />
          <Reviews />
        </section>

        <section id='contact'>
          <Bar />
          <Footer />
        </section>

        {feedback && (
          <div className='fixed bottom-4 right-4 z-[80] max-w-xs rounded-2xl border border-white/50 bg-primary px-4 py-3 font-Roboto text-sm font-semibold text-white shadow-lg'>
            {feedback}
          </div>
        )}
      </div>
    </>
  )
}

export default App
