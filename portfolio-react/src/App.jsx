import { useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Resume from './components/sections/Resume'
import Services from './components/sections/Services'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import './styles/index.css'

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default App
