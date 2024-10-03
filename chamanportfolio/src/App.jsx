import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

const App = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar/>
      <Hero/>
    </main>
  )
}

export default App
