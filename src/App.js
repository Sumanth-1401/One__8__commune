import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
//import Travel from './components/Travel'
import Contactus from './components/Contactus'
import Apple from './components/Companies/Apple'
import HP from './components/Companies/HP'
import Dell from './components/Companies/Dell'
import Lenovo from './components/Companies/Lenovo'
import Profile from './components/Profile'
import Registration from './components/Registration'

function App() {
  return (
    <div>
      <Navbar />
      {/*Define routes for children */}
      <Routes>
        {/*Define route for Home component */}
        <Route path="/" element={<Home />} />

        {/*Define route for Home component */}
        <Route path="/about" element={<About />} />

        {/*Define route for Devine destinations component */}
        <Route path="/divine" element={<Apple/>} />

        {/*Define route for Devine destinations component */}
        <Route path="/hills" element={<HP/>} />

        {/*Define route for Devine destinations component */}
        <Route path="/beaches" element={<Dell/>} />

        {/*Define route for Devine destinations component */}
        <Route path="/monuments" element={<Lenovo/>} />

        {/* Define route for Travel component
        <Route path="/travel" element={<Travel />} /> */}

        {/*Define route for Contactus component */}
        <Route path="/contactus" element={<Contactus />} />

        {/*Define route for Contactus component */}
        <Route path="/profile" element={<Profile />} />

        {/*Define route for Contactus component */}
        <Route path="/profile/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App;