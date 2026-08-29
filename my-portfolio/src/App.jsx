import React from 'react'

import HeroBackground from './components/HeroBackground'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <HeroBackground />
      <div className="relative z-10">
        <Header />
        <main className="mx-auto max-w-4xl px-6 py-12">
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App
