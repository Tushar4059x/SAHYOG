import React from 'react'
import './landing.css'
import NavBar from './components/navbar/navbar.jsx'
import Hero_section from './components/hero-section/hero-section.jsx' 
import Upcoming from './components/upcoming/upcoming.jsx'
import Footer from './components/footer/footer.jsx'


export default function Landing() {
  return (
    <div>
    < NavBar />
    < Hero_section />
    < Upcoming />
    < Footer />
    </div>
  )

}
