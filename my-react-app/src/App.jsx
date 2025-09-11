import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import LogIn from './components/LogIn.jsx'
import "./App.css"

const App = () => {
  return (
    <div className='main'>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/LogIn' element={<LogIn />} />
        </Routes>
    </div>
  )
}

export default App