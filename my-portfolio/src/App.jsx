import React from 'react'

import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen">
        <Header />
        <main className="container mx-auto px-80 py-8">
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default App
