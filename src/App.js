import React from 'react'
import Header from './Component/Head/Header'
// import Features from './Component/Features/Card'
import "./App.css"
import Home from './Component/Hero/Home'
import Portfolio from './Component/Portfolio/Portfolio'
import Resume from './Component/Resume/Resume'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Home />
      {/* <Features />  */}
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </>
  ) 
}

export default App